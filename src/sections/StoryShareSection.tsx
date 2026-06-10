import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

const storyItems = [
  { src: '/images/repra/share-workout-story.jpeg', label: "Today's Workout" },
  { src: '/images/repra/share-1rm-story.jpeg',     label: 'Max 1RM Progress' },
  { src: '/images/repra/share-volume-story.jpeg',  label: 'Daily Volume' },
];

const chips = [
  { title: 'Color Themes',   desc: '好きなカラーを選択' },
  { title: 'Transparent BG', desc: '背景透過で保存' },
  { title: 'Graph Layouts',  desc: '4種類の画角に対応' },
];

const cardBase: React.CSSProperties = {
  background: 'rgba(12, 8, 6, 1)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 16px 40px rgba(0,0,0,0.45), 0 0 24px rgba(249,115,22,0.07)',
};

const imgFill: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
};

const chipDot: React.CSSProperties = {
  background: '#F97316',
  boxShadow: '0 0 5px rgba(249,115,22,0.7)',
};

export function StoryShareSection() {
  return (
    <section id="share" className="relative py-10 md:py-20 overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.25), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <SectionHeader
            label="Share"
            title="努力を、証拠として残す。"
            subtitle="REPRAは、トレーニング記録や成長グラフをInstagram Storyに合う9:16デザインでシェアできます。"
          />
        </div>

        {/* ── Mobile: snap carousel (hidden sm+) ──
            -mx-6 extends past parent px-6 to fill viewport width.
            paddingLeft/Right = (100vw - 72vw) / 2 = 14vw to center first/last card. */}
        <div className="sm:hidden -mx-6">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{
              paddingLeft: '14vw',
              paddingRight: '14vw',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            } as React.CSSProperties}
          >
            {storyItems.map((s, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 flex flex-col items-center gap-3"
                style={{ width: '72vw', maxWidth: '280px' }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden w-full aspect-[9/16]"
                  style={cardBase}
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    style={imgFill}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <span className="text-xs font-semibold text-white/50 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SM+: horizontal row (hidden on mobile) ── */}
        <div
          className="hidden sm:flex sm:gap-5 sm:overflow-x-auto sm:pb-4 sm:justify-center sm:snap-x sm:snap-mandatory"
          style={{ scrollbarWidth: 'none' } as React.CSSProperties}
        >
          {storyItems.map((s, i) => (
            <div
              key={i}
              className="snap-center sm:flex-shrink-0 flex flex-col items-center gap-3"
            >
              <div
                className="relative rounded-2xl overflow-hidden sm:w-[240px]"
                style={{ ...cardBase, height: '480px' }}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  style={imgFill}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="text-xs font-semibold text-white/50 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Mobile: horizontally scrollable chips (hidden sm+) ── */}
        <div className="mt-6 sm:hidden -mx-6">
          <div
            className="flex gap-3 overflow-x-auto pb-2"
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            } as React.CSSProperties}
          >
            {chips.map((chip) => (
              <div
                key={chip.title}
                className="flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{
                  width: '220px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={chipDot} />
                <div>
                  <p className="text-[12px] font-semibold text-white/80 leading-none mb-0.5">{chip.title}</p>
                  <p className="text-[11px] text-white/35 leading-none">{chip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SM+: flex row chips ── */}
        <div className="mt-10 hidden sm:flex sm:flex-row sm:justify-center sm:gap-4">
          {chips.map((chip) => (
            <div
              key={chip.title}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={chipDot} />
              <div>
                <p className="text-[12px] font-semibold text-white/80 leading-none mb-0.5">{chip.title}</p>
                <p className="text-[11px] text-white/35 leading-none">{chip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
            9:16 · Instagram Story Format · Premium Design
          </p>
        </div>
      </div>
    </section>
  );
}
