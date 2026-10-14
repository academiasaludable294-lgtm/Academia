import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'secondary' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  showSparkle?: boolean;
  showArrow?: boolean;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  onClick,
  href,
  target,
  rel,
  children,
  variant = 'primary',
  size = 'md',
  showSparkle = false,
  showArrow = false,
  className = '',
  fullWidth = false,
  type = 'button',
  disabled = false,
}) => {
  const variantClasses = {
    primary:
      'bg-[#0F2642] hover:bg-[#183B5E] text-white border border-[#C5A869]/50 shadow-lg hover:shadow-xl active:scale-[0.99]',
    gold:
      'bg-[#E6CD8C] hover:bg-[#F2DEAA] text-[#0F2642] border border-[#C5A869]/80 shadow-md hover:shadow-lg active:scale-[0.99] font-bold',
    secondary:
      'bg-white hover:bg-[#F0F7FC] text-[#0F2642] border border-[#BCD8ED] shadow-xs active:scale-[0.99]',
    subtle:
      'bg-transparent hover:bg-white/60 text-[#2C5077] hover:text-[#0F2642]',
  }[variant];

  const sizeClasses = {
    sm: 'py-2 px-4 text-xs font-semibold rounded-lg',
    md: 'py-3 px-6 text-sm font-bold rounded-xl',
    lg: 'py-4 px-8 text-base sm:text-lg font-bold rounded-xl',
  }[size];

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `inline-flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap select-none group disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showSparkle && (
        <Sparkles className="w-4 h-4 text-[#E6CD8C] group-hover:rotate-12 transition-transform shrink-0" />
      )}
      {showArrow && (
        <ArrowRight className="w-4 h-4 text-[#E6CD8C] group-hover:translate-x-0.5 transition-transform shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
