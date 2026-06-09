import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function CTAButton({ children, variant = 'primary', className = '', href, onClick }: CTAButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none';

  const variants = {
    primary: 'px-7 py-3.5 text-sm bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] hover:from-orange-400 hover:to-amber-400 active:scale-[0.98]',
    secondary: 'px-7 py-3.5 text-sm border border-white/20 text-white/80 hover:border-orange-500/50 hover:text-white hover:bg-white/5 active:scale-[0.98]',
    ghost: 'px-4 py-2 text-sm text-white/60 hover:text-white/90 underline-offset-4 hover:underline',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
