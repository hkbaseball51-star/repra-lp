import React from 'react';
import { Instagram, Bell } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { PhoneMockup } from '../components/PhoneMockup';
import { APP_STORE_URL } from '../config/appStore';

const floatingCards = [
  { label: 'Bench Press', value: '前回 90 kg', top: '6%', right: '-12%', delay: '0s' },
  { label: 'Best 1RM', value: '+12.5 kg', top: '38%', right: '-16%', delay: '1.5s' },
  { label: 'Total Volume', value: '8,400 kg', bottom: '18%', right: '-12%', delay: '0.8s' },
  { label: 'Streak', value: '28 Days', bottom: '8%', left: '-10%', delay: '2s' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle at 70% 30%, rgba(249,115,22,0.5) 0%, rgba(245,158,11,0.15) 45%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-64px)]">

          {/* Copy side */}
          <div className="order-1 flex flex-col justify-center pt-8 lg:pt-0">
            {/* App Identity Badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-7 w-fit px-2.5 py-2 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-[12px] md:rounded-[13px] flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1c1a2e 0%, #0f0f1a 100%)',
                  border: '1px solid rgba(249,115,22,0.25)',
                  boxShadow: '0 0 14px rgba(249,115,22,0.15)',
                }}
              >
                <span className="text-lg font-black text-orange-400 select-none">R</span>
                <img
                  src="/images/repra/app-icon.png"
                  alt="REPRA"
                  width={56}
                  height={56}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0, transition: 'opacity 0.4s' }}
                  onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              <div className="pr-1">
                <p className="text-white/90 font-bold text-sm tracking-[0.08em] leading-none mb-1">
                  REPRA
                </p>
                {APP_STORE_URL ? (
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-orange-400/65 hover:text-orange-400 transition-colors duration-200 leading-none"
                  >
                    Coming Soon on the App Store
                  </a>
                ) : (
                  <p className="text-[11px] font-medium text-white/40 leading-none">
                    Coming Soon on the App Store
                  </p>
                )}
              </div>
            </div>

            {/* Japanese headline — primary */}
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-2 text-white">
              前回の重量を
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #F97316, #F59E0B)' }}
              >
                忘れない。
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl font-semibold text-white/75 mb-5 leading-snug">
              成長を、数字とストーリーで残す。
            </p>

            {/* Description */}
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
              REPRAは、重量・回数・セットをすばやく記録し、
              前回メニュー・種目履歴・成長グラフを見返せる
              筋トレ記録アプリです。
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a
                href="https://www.instagram.com/repra_jp.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none px-7 py-3.5 text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] hover:from-orange-400 hover:to-amber-400 active:scale-[0.98] opacity-90 hover:opacity-100"
              >
                <Instagram size={14} />
                Instagramで最新情報を見る
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  color: 'rgba(249,115,22,0.9)',
                }}
              >
                <Bell size={14} />
                リリース通知を受け取る
              </a>
            </div>

            {/* Microcopy */}
            <p className="text-white/30 text-xs tracking-wide">
              前回を忘れない。成長を、数字とストーリーで残す。
            </p>
          </div>

          {/* Phone side */}
          <div className="order-2 flex items-center justify-center lg:justify-end relative lg:-mt-10">
            <div
              className="pointer-events-none absolute inset-0 scale-110 opacity-50"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.25) 0%, transparent 60%)' }}
            />

            <div className="relative">
              <PhoneMockup />

              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className="absolute hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl backdrop-blur-md"
                  style={{
                    top: card.top,
                    right: card.right,
                    bottom: card.bottom,
                    left: card.left,
                    background: 'rgba(12,12,18,0.8)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(249,115,22,0.1)',
                    animation: `float 6s ease-in-out ${card.delay} infinite`,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#F97316', boxShadow: '0 0 6px rgba(249,115,22,0.8)' }}
                  />
                  <div>
                    <p className="text-[9px] text-white/40 leading-none mb-0.5">{card.label}</p>
                    <p className="text-xs font-bold text-white leading-none">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25">
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 to-white animate-pulse" />
      </div>
    </section>
  );
}
