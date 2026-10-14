import React from 'react';

interface SectionContainerProps {
  id?: string;
  variant?: 'watercolor' | 'white' | 'deep' | 'subtle';
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  variant = 'white',
  className = '',
  containerClassName = '',
  children,
}) => {
  const bgClasses = {
    watercolor: 'watercolor-bg border-b border-[#E0EDF7]',
    white: 'bg-white border-b border-[#E2EFF8]',
    deep: 'watercolor-deep-card text-white',
    subtle: 'bg-[#F4F9FD] border-b border-[#E1EFF8]',
  }[variant];

  return (
    <section id={id} className={`py-16 md:py-24 relative ${bgClasses} ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
