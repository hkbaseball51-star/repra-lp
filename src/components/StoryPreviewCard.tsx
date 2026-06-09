import React from 'react';

type StoryType = 'workout' | 'maxrm' | 'volume';

interface StoryPreviewCardProps {
  type: StoryType;
}

export function StoryPreviewCard({ type }: StoryPreviewCardProps) {
  const configs = {
    workout: {
      label: 'TODAY\'S WORKOUT',
      title: 'Bench Press',
      sub: '4 sets · 90kg × 5',
      metrics: [
        { label: 'Best 1RM', value: '102.5 kg' },
        { label: 'Volume', value: '8,400 kg' },
      ],
      footer: 'Streak 28 days',
      accentColor: 'from-orange-600/20 to-amber-600/10',
      borderColor: 'rgba(249,115,22,0.25)',
      // TODO: Replace with final REPRA screenshot before production release.
      // Path: /public/images/repra/story-workout.webp (WebP, 9:16 ratio)
      imageSrc: '/images/repra/story-workout.webp',
    },
    maxrm: {
      label: 'MAX 1RM',
      title: '+12.5 kg',
      sub: 'since 3 months ago',
      metrics: [
        { label: 'Current 1RM', value: '102.5 kg' },
        { label: 'Previous', value: '90.0 kg' },
      ],
      footer: 'New personal record',
      accentColor: 'from-amber-600/20 to-orange-700/10',
      borderColor: 'rgba(245,158,11,0.25)',
      // TODO: Replace with final REPRA screenshot before production release.
      // Path: /public/images/repra/story-progress.webp (WebP, 9:16 ratio)
      imageSrc: '/images/repra/story-progress.webp',
    },
    volume: {
      label: 'PROGRESS GRAPH',
      title: '84 Sessions',
      sub: '3 month total',
      metrics: [
        { label: 'Total Volume', value: '320,400 kg' },
        { label: 'Avg / Day', value: '3,814 kg' },
      ],
      footer: 'Tracked with REPRA',
      accentColor: 'from-orange-700/20 to-amber-800/10',
      borderColor: 'rgba(249,115,22,0.2)',
      // TODO: Replace with final REPRA screenshot before production release.
      // Path: /public/images/repra/story-volume.webp (WebP, 9:16 ratio)
      imageSrc: '/images/repra/story-volume.webp',
    },
  };

  const c = configs[type];

  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden"
      style={{
        width: '160px',
        height: '285px',
        background: 'linear-gradient(160deg, #0f0f14 0%, #0a0a0f 100%)',
        border: `1px solid ${c.borderColor}`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Glow overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${c.accentColor}`} />

      <div className="relative z-10 flex flex-col h-full p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[8px] font-bold tracking-widest text-orange-400">{c.label}</span>
          <span className="text-[8px] text-white/30 font-medium">REPRA</span>
        </div>

        {/* Main metric */}
        <div className="mb-auto">
          <p className="text-2xl font-bold text-white leading-none mb-1">{c.title}</p>
          <p className="text-[10px] text-white/45">{c.sub}</p>
        </div>

        {/* Bar chart for maxrm */}
        {type === 'maxrm' && (
          <div className="mb-3" style={{ height: '50px' }}>
            <div className="flex items-end gap-1 h-full">
              {[40, 55, 48, 65, 58, 72, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 7
                      ? 'linear-gradient(to top, #F97316, #F59E0B)'
                      : 'rgba(249,115,22,0.25)',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Line chart for volume */}
        {type === 'volume' && (
          <div className="mb-3" style={{ height: '50px' }}>
            <svg viewBox="0 0 140 50" className="w-full h-full">
              <defs>
                <linearGradient id="vLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="vFillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 44 C20 40 40 32 60 28 S100 14 120 10 L140 6" stroke="url(#vLineGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M0 44 C20 40 40 32 60 28 S100 14 120 10 L140 6 L140 50 L0 50 Z" fill="url(#vFillGrad)" />
            </svg>
          </div>
        )}

        {/* Exercise dots for workout */}
        {type === 'workout' && (
          <div className="mb-3 space-y-1.5">
            {['Bench Press', 'Squat', 'Row'].map((ex, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[9px] text-white/50">{ex}</span>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(249,115,22,0.7)' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metric chips */}
        <div className="flex gap-1.5 mb-3">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col rounded-lg px-2 py-1.5 flex-1"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="text-[7px] text-white/35 leading-none mb-0.5">{m.label}</span>
              <span className="text-[10px] font-bold text-orange-400 leading-none">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-white/8">
          <span className="text-[8px] text-white/35">{c.footer}</span>
          <div
            className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
            style={{ background: 'rgba(249,115,22,0.2)', color: '#F97316', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            REPRA
          </div>
        </div>
      </div>

      {/* Image overlay — replaces CSS mockup when screenshot is available */}
      <img
        src={c.imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        style={{ opacity: 0, transition: 'opacity 0.4s', zIndex: 20 }}
        onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        loading="lazy"
      />
    </div>
  );
}
