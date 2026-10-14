import React from 'react';

interface BadgeProps {
  variant?: 'gold' | 'brand' | 'success' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  children,
  className = '',
}) => {
  const variantClasses = {
    gold: 'bg-[#FDF6E2] text-[#8C6D1F] border-[#E8D49E]',
    brand: 'bg-[#EBF5FB] text-[#0F2642] border-[#CDE3F3]',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    neutral: 'bg-white text-[#4A6E94] border-[#D5E7F6]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
