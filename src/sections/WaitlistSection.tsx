import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

interface InsertError {
  message: string;
  code: string | null;
  details: string | null;
  hint: string | null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [debugError, setDebugError] = useState<InsertError | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    const trimmed = email.trim();
    if (!trimmed || !EMAIL_RE.test(trimmed)) return;

    console.log('[Waitlist] Supabase URL exists:', !!import.meta.env.VITE_SUPABASE_URL);
    console.log('[Waitlist] Submitting email:', trimmed);

    setStatus('submitting');

    const language = navigator.language.startsWith('ja') ? 'ja' : 'en';

    const { error } = await supabase
      .from('waitlist_subscribers')
      .insert([{
        email: trimmed,
        language,
        source: 'landing_page',
        interest: 'repra_launch',
        consent_marketing: true,
        user_agent: navigator.userAgent,
      }]);

    console.log('[Waitlist] Insert error:', error);

    if (!error) {
      setStatus('success');
      return;
    }

    console.error('[Waitlist] Insert failed:', error);

    const captured: InsertError = {
      message: error.message ?? '',
      code: error.code ?? null,
      details: (error as { details?: string }).details ?? null,
      hint: (error as { hint?: string }).hint ?? null,
    };
    setDebugError(captured);

    if (error.code === '23505') {
      setStatus('duplicate');
    } else {
      setStatus('error');
    }
  }

  return (
    <section id="waitlist" className="relative py-20 overflow-hidden">
      {/* Subtle top separator */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.22), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(249,115,22,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          リリース通知を受け取る
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          REPRAの公開情報、アップデート、先行案内をメールで受け取れます。
        </p>

        {/* Form card */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {status === 'success' ? (
            <div className="py-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-white/85 text-base font-medium">
                登録ありがとうございます。公開準備が整い次第、メールでお知らせします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') {
                      setStatus('idle');
                      setDebugError(null);
                    }
                  }}
                  placeholder="メールアドレス"
                  required
                  disabled={status === 'submitting'}
                  className="flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 disabled:opacity-50"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: status === 'error' || status === 'duplicate'
                      ? '1px solid rgba(249,115,22,0.5)'
                      : '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting' || !email.trim()}
                  className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
                    boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
                  }}
                >
                  {status === 'submitting' ? '送信中...' : '通知を受け取る'}
                </button>
              </div>

              {/* Inline feedback */}
              {(status === 'duplicate' || status === 'error') && (
                <>
                  <p className="mt-3 text-sm text-orange-400/90">
                    {status === 'duplicate'
                      ? 'このメールアドレスはすでに登録されています。'
                      : '登録に失敗しました。時間をおいてもう一度お試しください。'}
                  </p>
                  {import.meta.env.DEV && debugError && (
                    <pre
                      className="mt-3 text-left text-[11px] leading-relaxed rounded-lg px-3 py-2.5 overflow-x-auto"
                      style={{
                        background: 'rgba(255,60,60,0.08)',
                        border: '1px solid rgba(255,60,60,0.2)',
                        color: 'rgba(255,160,160,0.85)',
                      }}
                    >
                      {`Debug: ${debugError.code ?? 'no code'} — ${debugError.message}${debugError.details ? `\ndetails: ${debugError.details}` : ''}${debugError.hint ? `\nhint:    ${debugError.hint}` : ''}`}
                    </pre>
                  )}
                </>
              )}
            </form>
          )}
        </div>

        {/* Consent */}
        <p className="mt-4 text-white/25 text-[11px] leading-relaxed max-w-sm mx-auto">
          登録することで、REPRAのリリース情報やアップデート情報を受け取ることに同意したものとみなされます。
        </p>
      </div>
    </section>
  );
}
