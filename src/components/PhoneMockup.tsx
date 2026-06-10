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

          {/* Status bar — time left, battery right, Dynamic Island floats center above */}
          <div className="flex items-center justify-between px-5 pt-[14px] pb-1">
            <span className="text-[10px] text-white/55 font-medium tracking-tight">9:41</span>
            <div className="flex gap-1 items-center">
              {/* Signal bars */}
              <div className="flex gap-[2px] items-end h-[10px]">
                <div className="w-[2px] h-[5px] rounded-[1px] bg-white/45"></div>
                <div className="w-[2px] h-[7px] rounded-[1px] bg-white/45"></div>
                <div className="w-[2px] h-[9px] rounded-[1px] bg-white/45"></div>
              </div>
              {/* Wi-Fi */}
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="opacity-45">
                <path d="M5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7Z" fill="white"/>
                <path d="M2.5 4.5C3.16 3.84 4.04 3.5 5 3.5C5.96 3.5 6.84 3.84 7.5 4.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <path d="M0.5 2.5C1.71 1.3 3.27 0.5 5 0.5C6.73 0.5 8.29 1.3 9.5 2.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              {/* Battery */}
              <div className="flex items-center gap-[1px]">
                <div
                  className="rounded-[2px]"
                  style={{ width: '18px', height: '9px', border: '1px solid rgba(255,255,255,0.4)', padding: '1px' }}
                >
                  <div className="h-full rounded-[1px] bg-white/80" style={{ width: '80%' }}></div>
                </div>
                <div className="rounded-r-[1px] bg-white/35" style={{ width: '2px', height: '4px' }}></div>
              </div>
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

      {/* Dynamic Island */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-end"
        style={{
          top: '10px',
          width: '90px',
          height: '26px',
          background: '#000',
          borderRadius: '999px',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.95), inset 0 0 0 0.5px rgba(255,255,255,0.05)',
        }}
      >
        {/* Camera lens dot */}
        <div
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#141414',
            marginRight: '9px',
            flexShrink: 0,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 0 3px rgba(100,160,255,0.12)',
          }}
        />
      </div>
    </div>
  );
}
