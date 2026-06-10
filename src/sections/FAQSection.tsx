import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '無料で使えますか？',
    a: '基本機能は無料で使える予定です。将来的に一部プレミアム機能を追加する可能性があります。',
  },
  {
    q: 'なぜ今登録するべきですか？',
    a: '初期ユーザー向けの案内やアップデート情報を先行して受け取れます。リリース直後からすぐ使い始めるために、今のうちに登録しておくことをおすすめします。',
  },
  {
    q: 'いつ使えるようになりますか？',
    a: '現在リリース準備中です。最新情報はInstagramでお知らせしますので、フォローしてお待ちください。',
  },
  {
    q: '何を記録できますか？',
    a: '種目、重量、回数、セット、体重を記録できます。補助あり・失敗・ウォームアップなど、セットのタイプも区別して残せます。',
  },
  {
    q: '前回のメニューは見返せますか？',
    a: 'はい。前回メニューのコピーや、種目ごとの履歴確認に対応しています。前回の重量をそのまま引き継いで記録を始められます。',
  },
  {
    q: 'Instagramに投稿できますか？',
    a: 'はい。ワークアウト記録や成長グラフをInstagram Story用（9:16）の画像として保存できます。',
  },
  {
    q: 'iPhoneで使えますか？',
    a: 'App Storeでの公開を予定しています。リリース時期はInstagramまたはリリース通知でお知らせします。',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left group"
      aria-expanded={open}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: open ? 'rgba(249,115,22,0.05)' : 'rgba(255,255,255,0.03)',
          border: open ? '1px solid rgba(249,115,22,0.22)' : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Question row */}
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <span className="font-semibold text-white/90 text-sm leading-snug pr-2">{q}</span>
          <div
            className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300"
            style={{
              background: open ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.06)',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronDown size={13} color={open ? '#F97316' : 'rgba(255,255,255,0.45)'} strokeWidth={2.5} />
          </div>
        </div>

        {/* Answer */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? '200px' : '0px' }}
        >
          <p className="px-5 pb-4 text-white/55 text-xs leading-relaxed">{a}</p>
        </div>
      </div>
    </button>
  );
}

export function FAQSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-orange-500/60 uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            よくある質問
          </h2>
          <p className="text-white/40 text-sm">
            他にご不明な点はInstagramからお気軽にどうぞ。
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
