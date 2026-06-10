import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Instagram, ChevronDown } from 'lucide-react';
import { REPRA_SUPPORT_EMAIL } from '../components/LegalPageLayout';

const INSTAGRAM_URL = 'https://www.instagram.com/repra_jp/';

type Lang = 'ja' | 'en';

const content = {
  ja: {
    badge: 'サポート',
    title: 'サポート',
    subtitle: 'REPRA サポート',
    intro: 'REPRAに関するご質問・ご要望は、以下の方法でお気軽にお問い合わせください。',
    contactHeading: 'お問い合わせ先',
    emailLabel: 'メール',
    igLabel: 'Instagram DM',
    responseNote: '※ メールのご返信には数日お時間をいただく場合があります。あらかじめご了承ください。',
    faqHeading: 'よくある質問',
    faqs: [
      {
        q: 'アプリはいつ使えますか？',
        a: '現在リリース準備中です。先行登録いただいたメールアドレスへ、公開時に案内をお送りします。最新情報はInstagramでもお知らせします。',
      },
      {
        q: 'ウェイトリストに登録しましたが、確認メールが届きません。',
        a: '迷惑メールフォルダをご確認ください。それでも届かない場合は、メールかInstagram DMにてご連絡ください。',
      },
      {
        q: 'アカウントやデータの削除をリクエストしたい',
        a: 'メールにてご連絡ください。ご本人確認後、速やかに対応いたします。',
      },
      {
        q: 'バグや不具合を報告したい',
        a: '端末の種類、OSバージョン、再現手順を添えて、メールかInstagram DMでお送りください。',
      },
      {
        q: 'プライバシーポリシーや利用規約を確認したい',
        a: 'フッターの「Privacy Policy」「Terms」よりご確認いただけます。',
      },
    ],
  },
  en: {
    badge: 'Support',
    title: 'Support',
    subtitle: 'REPRA Support',
    intro: 'For questions or requests about REPRA, please reach out through any of the channels below.',
    contactHeading: 'Contact',
    emailLabel: 'Email',
    igLabel: 'Instagram DM',
    responseNote: '* Replies may take a few business days. We appreciate your patience.',
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'When will the app be available?',
        a: 'We are currently preparing for launch. Registered users will be notified by email when the app goes live. Follow us on Instagram for the latest updates.',
      },
      {
        q: "I signed up for the waitlist but didn't receive a confirmation email.",
        a: "Please check your spam folder. If you still can't find it, contact us by email or Instagram DM.",
      },
      {
        q: 'I want to request account or data deletion.',
        a: 'Please contact us by email. We will respond promptly after verifying your identity.',
      },
      {
        q: 'I want to report a bug or issue.',
        a: 'Please include your device type, OS version, and steps to reproduce, and send via email or Instagram DM.',
      },
      {
        q: 'Where can I find the Privacy Policy and Terms of Service?',
        a: 'You can find them via the "Privacy Policy" and "Terms" links in the footer.',
      },
    ],
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="block w-full text-left appearance-none"
      aria-expanded={open}
    >
      <div
        className="rounded-2xl overflow-hidden transition-all duration-200"
        style={{
          background: open ? 'rgba(249,115,22,0.05)' : 'rgba(255,255,255,0.03)',
          border: open ? '1px solid rgba(249,115,22,0.22)' : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <span className="font-semibold text-white/90 text-sm leading-snug pr-2">{q}</span>
          <div
            className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200"
            style={{
              background: open ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.06)',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronDown size={13} color={open ? '#F97316' : 'rgba(255,255,255,0.45)'} strokeWidth={2.5} />
          </div>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? '200px' : '0px' }}
        >
          <p className="px-5 pb-4 text-white/55 text-xs leading-relaxed">{a}</p>
        </div>
      </div>
    </button>
  );
}

export function SupportPage() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('repra-legal-lang');
      if (saved === 'ja' || saved === 'en') return saved;
    } catch {}
    return navigator.language.startsWith('ja') ? 'ja' : 'en';
  });

  const switchLang = useCallback((l: Lang) => {
    try { localStorage.setItem('repra-legal-lang', l); } catch {}
    setLang(l);
  }, []);

  const c = content[lang];

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      {/* Noise texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Subtle glow */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[600px] h-[600px]"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(249,115,22,0.10) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-[860px] mx-auto px-6 lg:px-8 py-12 pb-20">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/75 transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to REPRA
        </Link>

        {/* Page header + language switcher */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="text-[10px] font-black tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.25)',
                  color: '#F97316',
                }}
              >
                {c.badge}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h1>
            <p className="text-white/50 text-sm font-medium">{c.subtitle}</p>
          </div>

          {/* Language tab switcher */}
          <div
            className="flex items-center rounded-xl p-1 flex-shrink-0 self-start"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {(['ja', 'en'] as const).map((l) => {
              const active = lang === l;
              return (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={
                    active
                      ? { background: 'rgba(249,115,22,0.18)', border: '1px solid rgba(249,115,22,0.35)', color: '#F97316' }
                      : { background: 'transparent', border: '1px solid transparent', color: 'rgba(255,255,255,0.4)' }
                  }
                >
                  {l === 'ja' ? '日本語' : 'English'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Intro */}
        <p className="text-white/55 text-sm leading-relaxed mb-8">{c.intro}</p>

        {/* Contact card */}
        <div
          className="rounded-3xl overflow-hidden mb-10"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Contact heading */}
          <div className="px-7 md:px-10 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] font-bold tabular-nums" style={{ color: 'rgba(249,115,22,0.5)' }}>01</span>
              <h2 className="text-base font-bold text-white/90">{c.contactHeading}</h2>
            </div>
          </div>

          {/* Email */}
          <div className="px-7 md:px-10 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)' }}
              >
                <Mail size={15} color="#F97316" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[11px] text-white/35 font-medium mb-0.5">{c.emailLabel}</p>
                <a
                  href={`mailto:${REPRA_SUPPORT_EMAIL}`}
                  className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-200"
                >
                  {REPRA_SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Instagram DM */}
          <div className="px-7 md:px-10 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)' }}
              >
                <Instagram size={15} color="#F97316" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[11px] text-white/35 font-medium mb-0.5">{c.igLabel}</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-200"
                >
                  @repra_jp
                </a>
              </div>
            </div>
          </div>

          {/* Response note */}
          <div
            className="px-7 md:px-10 py-4"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <p className="text-white/30 text-xs leading-relaxed">{c.responseNote}</p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-lg font-bold text-white/90 mb-5">{c.faqHeading}</h2>
          <div className="flex flex-col gap-2.5">
            {c.faqs.map((faq, i) => (
              <FAQItem key={`${lang}-${i}`} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-14 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-lg font-black tracking-wider" style={{ color: '#F97316' }}>REPRA</span>
              <span className="text-xs text-white/25">Every rep becomes proof.</span>
            </div>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white/65 transition-colors duration-200"
              >
                <Instagram size={13} />
                Instagram
              </a>
              <Link to="/privacy" className="text-sm text-white/30 hover:text-white/65 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-white/30 hover:text-white/65 transition-colors duration-200">
                Terms
              </Link>
            </div>
          </div>
          <p className="text-xs text-white/15 text-center mt-6">© 2026 REPRA. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
