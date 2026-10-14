import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A869] block mb-2">
          ✦ {eyebrow} ✦
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2642] tracking-tight leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#385A7E] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
