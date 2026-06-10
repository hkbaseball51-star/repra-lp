import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { BarChart2, RefreshCw, Share2 } from 'lucide-react';

const solutions = [
  {
    icon: BarChart2,
    title: 'Record',
    titleJa: '記録する',
    text: '前回メニューをコピーして、重量・回数・セットをすばやく記録。',
    accent: '#F97316',
  },
  {
    icon: RefreshCw,
    title: 'Review',
    titleJa: '見返す',
    text: '種目ごとの履歴、Best 1RM、総重量、体重をグラフで確認。',
    accent: '#F59E0B',
  },
  {
    icon: Share2,
    title: 'Share',
    titleJa: 'シェアする',
    text: '成長グラフや今日のワークアウトを、9:16のStory画像で共有。',
    accent: '#FB923C',
  },
];

export function SolutionSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-14">
          <SectionHeader
            title="REPRAは、前回の自分を越えるために作られた。"
            subtitle="記録・確認・共有のサイクルで、成長を数字とストーリーで残します。"
            label="The Solution"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl p-4 md:p-7 transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${s.accent}10 0%, transparent 60%)` }}
                />
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ border: `1px solid ${s.accent}30` }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-4 md:mb-6"
                    style={{
                      background: `${s.accent}15`,
                      border: `1px solid ${s.accent}30`,
                    }}
                  >
                    <Icon size={22} color={s.accent} strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase mb-2 block">
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <div className="mb-1">
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: s.accent }}
                    >
                      {s.title}
                    </h3>
                    <span className="text-sm text-white/35 font-medium">{s.titleJa}</span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mt-2 md:mt-3">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
