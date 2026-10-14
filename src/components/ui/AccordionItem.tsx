import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  isOpen: boolean;
  onToggle: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  isOpen,
  onToggle,
  header,
  children,
  className = '',
}) => {
  return (
    <div
      className={`rounded-2xl transition-all border overflow-hidden ${
        isOpen
          ? 'bg-[#F4F9FD] border-[#B2D6F0] shadow-sm'
          : 'bg-white border-[#E2EFF8] hover:border-[#CADFF0]'
      } ${className}`}
    >
      <button
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex-1">{header}</div>
        <div
          className={`p-2 rounded-full transition-transform shrink-0 ${
            isOpen ? 'rotate-180 bg-[#E2F0FB]' : 'text-[#7B9CBF]'
          }`}
        >
          <ChevronDown className="w-4 h-4 text-[#102A45]" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-[#E1EEF8]">
          {children}
        </div>
      )}
    </div>
  );
};
