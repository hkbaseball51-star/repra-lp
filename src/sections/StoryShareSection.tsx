import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export function StoryShareSection() {
  return (
    <section id="share" className="relative py-14 md:py-20 overflow-hidden scroll-mt-24">
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
        <div className="text-center mb-12">
          <SectionHeader
            label="Share"
            title="努力を、証拠として残す。"
            subtitle="REPRAは、トレーニング記録や成長グラフをInstagram Storyに合う9:16デザインでシェアできます。"
          />
        </div>

        {/* Story cards
            share-workout-story.jpeg is 711×1794 (taller than 9:16).
            Cards are fixed 480px tall with object-contain.
            Mobile: vertical stack. sm+: horizontal row with overflow scroll. */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-5 sm:overflow-x-auto sm:pb-4 sm:justify-center sm:snap-x sm:snap-mandatory sm:scrollbar-none">
          {[
            { src: '/images/repra/share-workout-story.jpeg', label: "Today's Workout" },
            { src: '/images/repra/share-1rm-story.jpeg',     label: 'Max 1RM Progress' },
            { src: '/images/repra/share-volume-story.jpeg',  label: 'Daily Volume' },
          ].map((s, i) => (
            <div
              key={i}
              className="snap-center sm:flex-shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto"
            >
              <div
                className="relative rounded-2xl overflow-hidden w-full max-w-[280px] sm:w-[240px] sm:max-w-none"
                style={{
                  height: '480px',
                  background: 'rgba(12, 8, 6, 1)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.45), 0 0 24px rgba(249,115,22,0.07)',
                }}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="text-xs font-semibold text-white/50 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Feature chips */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {[
            { title: 'Color Themes',    desc: '好きなカラーを選択'    },
            { title: 'Transparent BG',  desc: '背景透過で保存'        },
            { title: 'Graph Layouts',   desc: '4種類の画角に対応'     },
          ].map((chip) => (
            <div
              key={chip.title}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl w-full max-w-[300px] sm:w-auto"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#F97316', boxShadow: '0 0 5px rgba(249,115,22,0.7)' }}
              />
              <div>
                <p className="text-[12px] font-semibold text-white/80 leading-none mb-0.5">{chip.title}</p>
                <p className="text-[11px] text-white/35 leading-none">{chip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
            9:16 · Instagram Story Format · Premium Design
          </p>
        </div>
      </div>
    </section>
  );
}
