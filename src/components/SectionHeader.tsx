import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  label?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', label }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {label && (
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-orange-400 uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
