import React from 'react';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: '260px', height: '528px' }}>
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[44px] border-2 border-white/15 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(249,115,22,0.15)',
        }}
      >
        {/* Screen content */}
        <div className="absolute inset-[2px] rounded-[42px] overflow-hidden bg-[#0a0a0f]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1">
            <span className="text-[10px] text-white/60 font-medium">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-1.5 rounded-sm bg-white/60"></div>
              <div className="w-1 h-1.5 rounded-[1px] bg-white/20"></div>
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/40 font-medium">Wednesday</p>
              <p className="text-base font-bold text-white tracking-tight">Today's Workout</p>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              <span className="text-[10px] font-bold text-orange-400">R</span>
            </div>
          </div>

          {/* Metric row */}
          <div className="px-5 grid grid-cols-2 gap-2 mb-4">
            {[
              { label: 'Best 1RM', value: '102.5 kg' },
              { label: 'Volume', value: '8,400 kg' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-2.5"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}
              >
                <p className="text-[9px] text-white/40 mb-0.5">{m.label}</p>
                <p className="text-xs font-bold text-orange-400">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Exercise cards */}
          {[
            { name: 'Bench Press', sets: '4 sets', weight: '90 kg × 5' },
            { name: 'Squat', sets: '3 sets', weight: '120 kg × 3' },
            { name: 'Deadlift', sets: '3 sets', weight: '140 kg × 3' },
          ].map((ex, i) => (
            <div
              key={i}
              className="mx-5 mb-2 rounded-xl p-3 flex items-center justify-between"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div>
                <p className="text-[11px] font-semibold text-white">{ex.name}</p>
                <p className="text-[9px] text-white/35">{ex.sets}</p>
              </div>
              <span className="text-[10px] font-bold text-orange-400">{ex.weight}</span>
            </div>
          ))}

          {/* Calendar strip */}
          <div className="mx-5 mt-3 rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[9px] text-white/40 mb-2">This Week</p>
            <div className="flex gap-1.5 justify-between">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-[8px] text-white/30">{d}</span>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: i < 3 ? 'rgba(249,115,22,0.6)' : i === 3 ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.06)',
                      border: i === 3 ? '1px solid rgba(249,115,22,0.4)' : '1px solid transparent',
                    }}
                  >
                    {i < 3 && <span style={{ fontSize: '6px', color: 'white' }}>✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Streak */}
          <div className="mx-5 mt-3 flex items-center gap-2">
            <div
              className="flex-1 rounded-xl px-3 py-2 flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.1))', border: '1px solid rgba(249,115,22,0.25)' }}
            >
              <span className="text-[10px] text-white/60">Streak</span>
              <span className="text-sm font-bold text-orange-400">28 days</span>
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] rounded-full bg-black z-10"></div>
    </div>
  );
}
