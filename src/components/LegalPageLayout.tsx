import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram } from 'lucide-react';

export interface LegalSection {
  heading: string;
  content: React.ReactNode;
}

export interface LegalContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

interface LegalPageLayoutProps {
  ja: LegalContent;
  en: LegalContent;
}

export const REPRA_SUPPORT_EMAIL = 'support@repraworkout.com';

export const bullet = (items: string[]) => (
  <ul className="mt-2 space-y-1.5 list-none">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/50" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const contactBlock = () => (
  <p className="mt-2">
    <a
      href={`mailto:${REPRA_SUPPORT_EMAIL}`}
      className="text-orange-400 font-medium hover:text-orange-300 transition-colors duration-200"
    >
      {REPRA_SUPPORT_EMAIL}
    </a>
  </p>
);

export function LegalPageLayout({ ja, en }: LegalPageLayoutProps) {
  const [lang, setLang] = useState<'ja' | 'en'>(() => {
    const saved = localStorage.getItem('repra-legal-lang');
    if (saved === 'ja' || saved === 'en') return saved;
    return navigator.language.startsWith('ja') ? 'ja' : 'en';
  });

  const switchLang = useCallback((l: 'ja' | 'en') => {
    localStorage.setItem('repra-legal-lang', l);
    setLang(l);
  }, []);
  const c = lang === 'ja' ? ja : en;

  const disclaimer =
    lang === 'ja'
      ? '日本語版と英語版の内容に差異がある場合、日本語版を優先します。'
      : 'If there is any inconsistency between the Japanese and English versions, the Japanese version shall prevail.';

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
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(249,115,22,0.12) 0%, transparent 60%)' }}
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

        {/* Header + language switcher */}
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
                Legal
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{c.title}</h1>
            <p className="text-white/50 text-sm font-medium">{c.subtitle}</p>
            <p className="text-white/30 text-xs mt-1">{c.lastUpdated}</p>
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
                      ? {
                          background: 'rgba(249,115,22,0.18)',
                          border: '1px solid rgba(249,115,22,0.35)',
                          color: '#F97316',
                        }
                      : {
                          background: 'transparent',
                          border: '1px solid transparent',
                          color: 'rgba(255,255,255,0.4)',
                        }
                  }
                >
                  {l === 'ja' ? '日本語' : 'English'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {c.sections.map((section, i) => (
            <div
              key={`${lang}-${i}`}
              className="px-7 md:px-10 py-7"
              style={{
                borderBottom: i < c.sections.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="text-[10px] font-bold tabular-nums flex-shrink-0"
                  style={{ color: 'rgba(249,115,22,0.5)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-base font-bold text-white/90">{section.heading}</h2>
              </div>
              <div className="pl-6 text-white/65 text-sm leading-relaxed space-y-2">
                {section.content}
              </div>
            </div>
          ))}

          {/* Language precedence note */}
          <div
            className="px-7 md:px-10 py-5"
            style={{ background: 'rgba(249,115,22,0.04)', borderTop: '1px solid rgba(249,115,22,0.12)' }}
          >
            <p className="text-white/40 text-xs leading-relaxed">{disclaimer}</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-14 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-lg font-black tracking-wider" style={{ color: '#F97316' }}>
                REPRA
              </span>
              <span className="text-xs text-white/25">Every rep becomes proof.</span>
            </div>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <a href="#" className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white/65 transition-colors duration-200">
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
