import React from 'react';

// June 2026 starts on Monday
const COMPLETED_DAYS = new Set([1, 2, 4, 5, 7, 8, 9]);
const TODAY_DATE = 10;
const WEEKS = [
  [1,  2,  3,  4,  5,  6,  7],
  [8,  9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30,  0,  0,  0,  0,  0],
];

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
          <div className="px-5 pt-2 pb-2 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/40 font-medium">Monthly View</p>
              <p className="text-base font-bold text-white tracking-tight">June 2026</p>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(249,115,22,0.2)', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              <span className="text-[10px] font-bold text-orange-400">R</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="px-5 grid grid-cols-3 gap-1.5 mb-3">
            {[
              { label: 'Streak',   value: '28 d' },
              { label: 'Sessions', value: '84'   },
              { label: 'This Mo.', value: '7'    },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-2 text-center"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)' }}
              >
                <p className="text-[8px] text-white/40 mb-0.5">{m.label}</p>
                <p className="text-xs font-bold text-orange-400">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Calendar day headers */}
          <div className="px-5 mb-1">
            <div className="grid grid-cols-7">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="text-center">
                  <span className="text-[8px] text-white/25 font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar grid */}
          <div className="px-5 mb-3">
            {WEEKS.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7 mb-0.5">
                {week.map((day, di) => {
                  const done    = COMPLETED_DAYS.has(day);
                  const isToday = day === TODAY_DATE;
                  const future  = day > TODAY_DATE;
                  return (
                    <div key={di} className="flex items-center justify-center" style={{ height: '20px' }}>
                      {day > 0 ? (
                        <div
                          className="w-[18px] h-[18px] rounded-full flex items-center justify-center"
                          style={{
                            background: done
                              ? 'rgba(249,115,22,0.75)'
                              : isToday
                              ? 'rgba(249,115,22,0.18)'
                              : 'transparent',
                            border: isToday ? '1px solid rgba(249,115,22,0.6)' : 'none',
                          }}
                        >
                          <span
                            className="text-[7px] font-semibold"
                            style={{
                              color: done
                                ? 'white'
                                : isToday
                                ? '#F97316'
                                : future
                                ? 'rgba(255,255,255,0.18)'
                                : 'rgba(255,255,255,0.35)',
                            }}
                          >
                            {day}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Last workout card */}
          <div
            className="mx-5 rounded-xl p-3"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] text-white/40 uppercase tracking-widest">Last Workout</p>
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(249,115,22,0.2)', color: '#F97316' }}
              >
                Push
              </span>
            </div>
            <p className="text-[11px] font-semibold text-white mb-0.5">Bench Press · 90 kg × 5</p>
            <p className="text-[9px] text-white/35">4 sets · Best 1RM 102.5 kg</p>
          </div>

          {/* Streak bar */}
          <div className="mx-5 mt-2">
            <div
              className="rounded-xl px-3 py-2 flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(245,158,11,0.1))',
                border: '1px solid rgba(249,115,22,0.25)',
              }}
            >
              <span className="text-[10px] text-white/60">継続中のストリーク</span>
              <span className="text-sm font-bold text-orange-400">28 days</span>
            </div>
          </div>

          {/* Screenshot — fades in over CSS mockup when image is available */}
          <img
            src="/images/repra/hero-calendar-screen.png"
            alt="REPRA カレンダー画面"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0, transition: 'opacity 0.4s', zIndex: 20 }}
            onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />

        </div>
      </div>

      {/* Dynamic island */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] rounded-full bg-black z-10"></div>
    </div>
  );
}
