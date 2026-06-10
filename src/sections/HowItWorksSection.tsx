import React from 'react';
import { Search, ClipboardList, TrendingUp, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: '種目を選ぶ',
    description: 'ベンチプレス、スクワット、デッドリフトなど、トレーニングする種目を追加。部位別に整理されているので迷わず選べます。',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: '重量・回数・セットを記録',
    description: '前回メニューをそのままコピーして、重量と回数だけ変えるだけ。入力の手間を最小限に抑えます。',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: '成長を見返す',
    description: 'Best 1RM・総重量・体重をグラフで確認。種目ごとの履歴も時系列で見返せます。',
  },
  {
    icon: Share2,
    number: '04',
    title: 'Storyで共有',
    description: '今日のワークアウトや成長グラフを9:16サイズの画像で保存。そのままInstagramに投稿できます。',
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-orange-500/60 uppercase mb-4">
            How it works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            使い方はシンプル。
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-sm mx-auto">
            記録して、見返して、成長をStoryで残す。
            <br />
            REPRAは、筋トレ記録を続けやすいシンプルな流れで使えます。
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'rgba(249,115,22,0.04)',
                    border: '1px solid rgba(249,115,22,0.2)',
                  }}
                />

                {/* Connector line (desktop only, not on last item) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-[2.75rem] -right-2 w-4 h-[1px] hidden lg:block"
                    style={{ background: 'rgba(249,115,22,0.2)', zIndex: 20 }}
                  />
                )}

                <div className="relative z-10">
                  {/* Step number */}
                  <span className="text-[10px] font-bold tracking-widest text-orange-500/40 uppercase mb-2 md:mb-3 block">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-3 md:mb-4"
                    style={{
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                    }}
                  >
                    <Icon size={18} color="#F97316" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <p className="font-semibold text-white/90 text-sm leading-snug mb-2">{step.title}</p>

                  {/* Description */}
                  <p className="text-white/50 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
