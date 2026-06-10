import React from 'react';
import { Instagram, Smartphone } from 'lucide-react';
import { CTAButton } from '../components/CTAButton';
import { APP_STORE_URL } from '../config/appStore';

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.7) 0%, transparent 60%)' }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">

        {/* App Icon Card */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-5 px-5 py-4 md:px-7 md:py-5 rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* App icon */}
            <div
              className="relative w-20 h-20 md:w-[100px] md:h-[100px] flex-shrink-0 rounded-[22px] md:rounded-[26px] flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1c1a2e 0%, #0f0f1a 100%)',
                border: '1px solid rgba(249,115,22,0.35)',
                boxShadow: '0 0 0 4px rgba(249,115,22,0.07), 0 0 32px rgba(249,115,22,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}
            >
              <span className="text-3xl md:text-4xl font-black text-orange-400 select-none">R</span>
            </div>

            {/* App info */}
            <div className="text-left">
              <p
                className="font-black text-xl tracking-[0.12em] mb-0.5"
                style={{ color: '#F97316' }}
              >
                REPRA
              </p>
              <p className="text-white/45 text-xs font-medium mb-3 leading-relaxed">
                Every rep becomes proof.
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#F97316', boxShadow: '0 0 6px rgba(249,115,22,0.9)' }}
                />
                <span className="text-[11px] font-semibold tracking-wide text-orange-400/85">
                  Coming Soon on the App Store
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
          Every rep
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #F97316, #F59E0B)' }}
          >
            becomes proof.
          </span>
        </h2>

        <p className="text-orange-400/80 text-sm font-bold tracking-[0.15em] uppercase mb-4">
          REPRA — Coming Soon
        </p>

        <p className="text-white/65 text-base leading-relaxed mb-10 max-w-md mx-auto">
          記録する。見返す。成長に気づく。続けた証拠が残る。
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.instagram.com/repra_jp.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none text-base px-9 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] hover:from-orange-400 hover:to-amber-400 active:scale-[0.98] opacity-90 hover:opacity-100"
          >
            <Instagram size={16} />
            Instagramで最新情報を見る
          </a>

          {APP_STORE_URL ? (
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold text-white/85 transition-all duration-200 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <Smartphone size={17} strokeWidth={1.7} />
              App Storeでダウンロード
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-medium text-white/28 border cursor-default select-none"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <Smartphone size={17} strokeWidth={1.5} />
              App Storeで公開予定
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
