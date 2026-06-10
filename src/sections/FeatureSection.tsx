import React from 'react';
import { Check } from 'lucide-react';

interface FeatureBlockProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  reversed?: boolean;
  mockup: React.ReactNode;
}

function FeatureBlock({ number, title, description, bullets, reversed = false, mockup }: FeatureBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center`}>
      {/* Text */}
      <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="text-[10px] font-bold tracking-widest text-orange-500/60 uppercase mb-3 block">{number}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">{title}</h3>
        <p className="text-white/70 text-base leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
              >
                <Check size={10} color="#F97316" strokeWidth={3} />
              </div>
              <span className="text-white/75 text-sm font-medium">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup */}
      <div className={`flex justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
        {mockup}
      </div>
    </div>
  );
}

function WorkoutMockup() {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto rounded-[28px] p-3"
      style={{
        background: '#0c0c16',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), 0 0 40px rgba(249,115,22,0.07)',
      }}
    >
      <img
        src="/images/repra/feature-record-entry.png"
        alt="REPRA トレーニング記録画面"
        className="w-full h-auto block rounded-[18px]"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
  );
}

function GraphMockup() {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto rounded-[28px] p-3"
      style={{
        background: '#0c0c16',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), 0 0 40px rgba(249,115,22,0.07)',
      }}
    >
      <img
        src="/images/repra/feature-progress-chart.png"
        alt="REPRA 成長グラフ画面"
        className="w-full h-auto block rounded-[18px]"
        style={{ filter: 'brightness(1.08) contrast(1.05)' }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
  );
}

export function FeatureSection() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="space-y-20 lg:space-y-24">
          <FeatureBlock
            number="Feature 01"
            title="今日のトレーニングを、すばやく記録。"
            description="種目、セット、重量、回数を迷わず入力。Best 1RMやTotal Volumeも自動で見える。"
            bullets={['種目別記録', 'セット入力', 'Best 1RM', 'Total Volume', 'カレンダー連動']}
            mockup={<WorkoutMockup />}
          />
          <div id="progress">
          <FeatureBlock
            number="Feature 02"
            title="成長を、グラフで確認。"
            description="Max 1RM、Daily Volume、Body Weightをグラフで可視化。積み上げた努力と成長を一目で確認できます。"
            bullets={['Max 1RM', 'Daily Volume', 'Body Weight', '種目別グラフ', 'Instagram Story用シェア画像']}
            reversed
            mockup={<GraphMockup />}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
