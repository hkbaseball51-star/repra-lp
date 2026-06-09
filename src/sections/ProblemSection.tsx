import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

const problems = [
  {
    text: '前回、何kgで何回できたか忘れる',
    sub: 'Forgot last weight & reps',
  },
  {
    text: '記録が面倒で、結局続かない',
    sub: 'Logging feels like a chore',
  },
  {
    text: '成長しているのに、数字で見えない',
    sub: 'Progress invisible without data',
  },
  {
    text: '写真やメモが散らばって見返せない',
    sub: 'Notes scattered, hard to review',
  },
  {
    text: 'ウォームアップや補助ありセットを区別できない',
    sub: "Can't distinguish set types",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeader
            title="筋トレは続けているのに、成長が見えない。"
            subtitle="記録が散らばり、前回が分からなければ、努力は積み上がらない。"
            label="The Problem"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default
                ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid rgba(249,115,22,0.18)' }}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.22)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500/70" />
                </div>

                <div>
                  <p className="font-semibold text-white/90 text-sm leading-snug mb-1.5">{p.text}</p>
                  <p className="text-[11px] text-white/40 font-medium tracking-wide">{p.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
