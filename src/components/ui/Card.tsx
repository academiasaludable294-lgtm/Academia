import React from 'react';

interface CardProps {
  variant?: 'watercolor' | 'surface' | 'deep' | 'subtle';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'watercolor',
  className = '',
  children,
  onClick,
}) => {
  const variantClasses = {
    watercolor: 'watercolor-card rounded-2xl border border-[#CDE5F6] shadow-sm',
    surface: 'bg-white rounded-2xl border border-[#DEEDF7] shadow-sm',
    deep: 'watercolor-deep-card rounded-2xl text-white shadow-xl',
    subtle: 'bg-[#F4F9FD] rounded-xl border border-[#DCEBF6]',
  }[variant];

  const clickableClass = onClick ? 'cursor-pointer hover:border-[#A4D0F2] transition-colors' : '';

  return (
    <div
      onClick={onClick}
      className={`p-6 sm:p-8 transition-all ${variantClasses} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
};
