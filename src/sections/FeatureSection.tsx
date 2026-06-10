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
  const exercises = [
    { name: 'Bench Press',   sets: '4 × 5',  weight: '90 kg'  },
    { name: 'Incline Press', sets: '3 × 10', weight: '30 kg'  },
    { name: 'OHP',           sets: '3 × 8',  weight: '55 kg'  },
    { name: 'Lateral Raise', sets: '3 × 15', weight: '12 kg'  },
  ];

  return (
    <div
      className="relative w-full max-w-[440px] mx-auto rounded-[28px] overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #111120 0%, #08080f 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(249,115,22,0.1)',
      }}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(249,115,22,0.6) 50%, transparent 90%)' }} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[11px] text-white/30 uppercase tracking-[0.18em] font-medium mb-1.5">Today</p>
            <h4 className="text-2xl font-bold text-white tracking-tight">Push Day</h4>
          </div>
          <div
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.22) 0%, rgba(245,158,11,0.16) 100%)',
              border: '1px solid rgba(249,115,22,0.45)',
              color: '#FB923C',
              fontSize: '13px',
              boxShadow: '0 0 16px rgba(249,115,22,0.15)',
            }}
          >
            <span style={{ fontSize: '17px', lineHeight: 1 }}>+</span>
            <span>Log Set</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: 'Best 1RM',   val: '102.5', unit: 'kg', col: '#F97316', glow: 'rgba(249,115,22,0.18)' },
            { label: 'Total Vol.', val: '8,400',  unit: 'kg', col: '#F59E0B', glow: 'rgba(245,158,11,0.14)' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-4"
              style={{
                background: m.glow,
                border: '1px solid rgba(249,115,22,0.22)',
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}
            >
              <p className="text-[11px] text-white/40 uppercase tracking-wide mb-2">{m.label}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[26px] font-bold leading-none" style={{ color: m.col }}>{m.val}</span>
                <span className="text-sm font-medium text-white/30">{m.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Exercises */}
        <div className="mb-6">
          {exercises.map((ex, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3.5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-[3px] rounded-full flex-shrink-0"
                  style={{ height: '18px', background: 'linear-gradient(to bottom, #F97316, #F59E0B)' }}
                />
                <p className="text-[14px] font-semibold text-white/90 tracking-tight">{ex.name}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] text-white/35 tabular-nums">{ex.sets} @</span>
                <span className="text-[14px] font-bold text-orange-400 tabular-nums">{ex.weight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly check */}
        <div className="flex items-center justify-between">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium text-white/25">{d}</span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: i < 3
                    ? 'linear-gradient(135deg, rgba(249,115,22,0.65), rgba(245,158,11,0.55))'
                    : 'rgba(255,255,255,0.04)',
                  border: i === 3
                    ? '1.5px solid rgba(249,115,22,0.5)'
                    : i < 3
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: i < 3 ? '0 0 10px rgba(249,115,22,0.3)' : 'none',
                }}
              >
                {i < 3 && <Check size={11} color="white" strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GraphMockup() {
  const bars = [28, 38, 32, 55, 46, 63, 72, 58, 78, 67, 86, 100];

  return (
    <div
      className="relative w-full max-w-[440px] mx-auto rounded-[28px] overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #111120 0%, #08080f 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(249,115,22,0.1)',
      }}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(249,115,22,0.6) 50%, transparent 90%)' }} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-1.5">
          <div>
            <p className="text-[11px] text-white/30 uppercase tracking-[0.18em] font-medium mb-1.5">Progress</p>
            <h4 className="text-2xl font-bold text-white tracking-tight">Max 1RM</h4>
          </div>
          {/* New PR badge */}
          <div
            className="text-center px-3.5 py-2.5 rounded-xl flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.22) 0%, rgba(245,158,11,0.16) 100%)',
              border: '1px solid rgba(249,115,22,0.45)',
              boxShadow: '0 0 16px rgba(249,115,22,0.15)',
            }}
          >
            <p className="text-[10px] font-bold text-orange-300/75 uppercase tracking-wider leading-none mb-1">New PR</p>
            <p className="text-[15px] font-bold text-orange-400 leading-none">+12.5 kg</p>
          </div>
        </div>
        <p className="text-base font-bold text-orange-400 mb-5">+12.5 kg — 3 months</p>

        {/* Bar graph */}
        <div className="flex items-end gap-[4px] mb-5 px-0.5" style={{ height: '120px' }}>
          {bars.map((h, i) => {
            const isLatest = i === bars.length - 1;
            const isRecent = i >= bars.length - 3 && !isLatest;
            return (
              <div
                key={i}
                className="flex-1 rounded-t-[4px]"
                style={{
                  height: `${h}%`,
                  background: isLatest
                    ? 'linear-gradient(to top, #F97316, #FBBF24)'
                    : isRecent
                    ? 'rgba(249,115,22,0.5)'
                    : 'rgba(249,115,22,0.16)',
                  boxShadow: isLatest ? '0 0 18px rgba(249,115,22,0.55)' : 'none',
                }}
              />
            );
          })}
        </div>

        {/* Line chart */}
        <div className="mb-5 relative rounded-xl overflow-hidden" style={{ height: '64px', background: 'rgba(255,255,255,0.02)' }}>
          <svg viewBox="0 0 300 64" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="f02line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="f02fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 58 C60 53 110 44 160 36 S240 20 280 11 L300 8" stroke="url(#f02line)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M0 58 C60 53 110 44 160 36 S240 20 280 11 L300 8 L300 64 L0 64 Z" fill="url(#f02fill)" />
            <circle cx="300" cy="8" r="5" fill="#FBBF24" opacity="0.9" />
            <circle cx="300" cy="8" r="9" fill="rgba(251,191,36,0.2)" />
          </svg>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: 'Body Weight', val: '74.2', unit: 'kg'   },
            { label: 'Daily Vol.',  val: '8,400', unit: 'kg'   },
            { label: 'Streak',      val: '28',    unit: 'days' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-3.5 text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <p className="text-[10px] text-white/35 mb-1.5 leading-tight">{m.label}</p>
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-[15px] font-bold text-orange-400 leading-none tabular-nums">{m.val}</span>
                <span className="text-[10px] text-white/30 ml-0.5">{m.unit}</span>
              </div>
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
            title="成長を、グラフで確認。"
            description="Max 1RM、Daily Volume、Body Weightをグラフで可視化。積み上げた努力と成長を一目で確認できます。"
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
