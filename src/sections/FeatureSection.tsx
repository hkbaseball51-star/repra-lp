import React from 'react';
import { Check } from 'lucide-react';

interface FeatureBlockProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  reversed?: boolean;
  mockup: React.ReactNode;
}

function FeatureBlock({ number, title, description, bullets, reversed = false, mockup }: FeatureBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center`}>
      {/* Text */}
      <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="text-[10px] font-bold tracking-widest text-orange-500/60 uppercase mb-3 block">{number}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">{title}</h3>
        <p className="text-white/70 text-base leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                <Check size={10} color="#F97316" strokeWidth={3} />
              </div>
              <span className="text-white/75 text-sm font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup */}
      <div className={`flex justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        {mockup}
      </div>
    </div>
  );
}

function WorkoutMockup() {
  return (
    <div
      className="relative w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0f0f18 0%, #080810 100%)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(249,115,22,0.07)',
      }}
    >
      <div className="p-5">
        <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Today</p>
        <h4 className="text-lg font-bold text-white mb-4">Push Day</h4>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { label: 'Best 1RM', val: '102.5 kg', col: '#F97316' },
            { label: 'Total Vol.', val: '8,400 kg', col: '#F59E0B' },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-3" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="text-[10px] text-white/40 mb-1">{m.label}</p>
              <p className="text-sm font-bold" style={{ color: m.col }}>{m.val}</p>
            </div>
          ))}
        </div>

        {[
          { name: 'Bench Press', detail: '4 × 5 @ 90 kg' },
          { name: 'Incline Press', detail: '3 × 10 @ 30 kg' },
          { name: 'OHP', detail: '3 × 8 @ 55 kg' },
          { name: 'Lateral Raise', detail: '3 × 15 @ 12 kg' },
        ].map((ex, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <p className="text-sm font-semibold text-white/85">{ex.name}</p>
            <span className="text-[11px] font-medium text-orange-400">{ex.detail}</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[8px] text-white/20">{d}</span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: i < 3 ? 'rgba(249,115,22,0.55)' : 'rgba(255,255,255,0.05)',
                  border: i === 3 ? '1px solid rgba(249,115,22,0.3)' : 'none',
                }}
              >
                {i < 3 && <Check size={8} color="white" strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function GraphMockup() {
  const bars = [35, 50, 42, 65, 58, 72, 80, 68, 85, 78, 92, 100];

  return (
    <div
      className="relative w-full max-w-[300px] mx-auto rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0f0f18 0%, #080810 100%)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(249,115,22,0.07)',
      }}
    >
      <div className="p-5">
        <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Progress</p>
        <h4 className="text-lg font-bold text-white mb-0.5">Max 1RM</h4>
        <p className="text-sm font-bold text-orange-400 mb-4">+12.5 kg — 3 months</p>

        <div className="flex items-end gap-1 mb-4" style={{ height: '80px' }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1
                  ? 'linear-gradient(to top, #F97316, #F59E0B)'
                  : i >= bars.length - 3
                  ? 'rgba(249,115,22,0.45)'
                  : 'rgba(249,115,22,0.18)',
              }}
            />
          ))}
        </div>

        <div className="mb-4 relative" style={{ height: '48px' }}>
          <svg viewBox="0 0 300 48" className="w-full h-full">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 42 C40 38 80 30 120 26 S200 14 240 10 L300 5" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M0 42 C40 38 80 30 120 26 S200 14 240 10 L300 5 L300 48 L0 48 Z" fill="url(#fillGrad)" />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Body Weight', val: '74.2 kg' },
            { label: 'Daily Vol.', val: '8,400 kg' },
            { label: 'Streak', val: '28 days' },
          ].map((m) => (
            <div key={m.label} className="rounded-xl p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-[8px] text-white/35 mb-0.5">{m.label}</p>
              <p className="text-[11px] font-bold text-orange-400">{m.val}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export function FeatureSection() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-24">
          <FeatureBlock
            number="Feature 01"
            title="今日のトレーニングを、すばやく記録。"
            description="種目、セット、重量、回数を迷わず入力。Best 1RMやTotal Volumeも自動で見える。"
            bullets={['種目別記録', 'セット入力', 'Best 1RM', 'Total Volume', 'カレンダー連動']}
            mockup={<WorkoutMockup />}
          />
          <div id="progress">
          <FeatureBlock
            number="Feature 02"
            title="成長を、数字で確認。"
            description="Max 1RM、Daily Volume、Body Weightをグラフ化。積み上げた努力を一目で確認できます。"
            bullets={['Max 1RM', 'Daily Volume', 'Body Weight', '種目別グラフ', 'Instagram Story用シェア画像']}
            reversed
            mockup={<GraphMockup />}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
