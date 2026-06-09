import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { StoryPreviewCard } from '../components/StoryPreviewCard';

export function StoryShareSection() {
  return (
    <section id="share" className="relative py-20 overflow-hidden">
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
            title="努力を、見せたくなる形に。"
            subtitle="REPRAは、トレーニング記録や成長グラフをInstagram Storyに合う9:16デザインでシェアできます。"
          />
        </div>

        {/* Story cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 justify-start sm:justify-center snap-x snap-mandatory scrollbar-none">
          {([
            { type: 'workout', label: "Today's Workout" },
            { type: 'maxrm', label: 'Max 1RM' },
            { type: 'volume', label: 'Progress Graph' },
          ] as const).map((s, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 flex flex-col items-center gap-3"
            >
              <StoryPreviewCard type={s.type} />
              <span className="text-xs font-semibold text-white/50 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
            9:16 · Instagram Story Format · Premium Design
          </p>
        </div>
      </div>
    </section>
  );
}
