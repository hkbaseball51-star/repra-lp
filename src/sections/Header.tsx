import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,12,0.9)' : 'rgba(8,8,12,0.3)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-[22px] font-black tracking-[0.12em] select-none"
          style={{ color: '#F97316', letterSpacing: '0.1em' }}
        >
          REPRA
        </span>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Progress', href: '#progress' },
            { label: 'Share',    href: '#share'    },
            { label: 'FAQ',      href: '#faq'      },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/55 hover:text-white/90 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/repra_jp.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white/90 transition-all duration-200 hover:scale-[1.03] opacity-90 hover:opacity-100"
          >
            <Instagram size={15} strokeWidth={1.8} />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <span
            className="text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide select-none"
            style={{
              background: 'linear-gradient(90deg, rgba(249,115,22,0.2), rgba(245,158,11,0.15))',
              border: '1px solid rgba(249,115,22,0.35)',
              color: '#F97316',
            }}
          >
            Early Access
          </span>
        </div>
      </div>
    </header>
  );
}
