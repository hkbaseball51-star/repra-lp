import React from 'react';
import { Copy, Layers, History, TrendingUp, Tag, ImageIcon } from 'lucide-react';

const capabilities = [
  {
    icon: Copy,
    title: '前回メニューをコピー',
    sub: 'Copy last session',
    description: '前回のセット・重量をワンタップで呼び出して記録をスタート。',
  },
  {
    icon: Layers,
    title: '部位別に前回メニューを呼び出し',
    sub: 'Filter by muscle group',
    description: '胸・背中・脚など部位ごとに、前回使ったメニューを素早く選択。',
  },
  {
    icon: History,
    title: '種目ごとの履歴を確認',
    sub: 'Per-exercise history',
    description: '各種目の過去ログを時系列で確認。伸びているか一目でわかる。',
  },
  {
    icon: TrendingUp,
    title: 'Best 1RM / 総重量 / 体重をグラフ化',
    sub: 'Progress graphs',
    description: '3つの指標を折れ線・棒グラフで可視化。継続の成果を数字で確認。',
  },
  {
    icon: Tag,
    title: 'セットタイプを区別して記録',
    sub: 'Warmup / Assisted / Failed',
    description: 'ウォームアップ・補助あり・失敗セットをタグで区別。正確なデータを残す。',
  },
  {
    icon: ImageIcon,
    title: 'Instagram Story用画像を作成',
    sub: '9:16 share image',
    description: '成長グラフや今日のセッションを、そのままStoryに貼れる画像で出力。',
  },
];

export function CapabilitySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-orange-500/60 uppercase mb-4">
            Features
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            REPRAでできること
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-sm mx-auto">
            記録・確認・共有に必要な機能を、シンプルにまとめました。
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
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

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                    }}
                  >
                    <Icon size={16} color="#F97316" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <p className="font-semibold text-white/90 text-sm leading-snug mb-1">{cap.title}</p>
                  <p className="text-[10px] text-white/35 font-medium tracking-wide mb-2.5">{cap.sub}</p>

                  {/* Description */}
                  <p className="text-white/55 text-xs leading-relaxed">{cap.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
