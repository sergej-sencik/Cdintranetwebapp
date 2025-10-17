import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderNavButtonProps {
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
}

export function HeaderNavButton({ 
  children, 
  hasDropdown = true,
  className = '' 
}: HeaderNavButtonProps) {
  return (
    <button
      className={`
        box-border content-stretch flex gap-[2px] items-center justify-center 
        overflow-clip px-[6px] py-[8px] relative shrink-0
        bg-transparent hover:bg-[#006E96] text-white
        transition-colors duration-200 border-0 outline-none
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={{ borderRadius: 'var(--radius-sm)' }}
      data-name="_Dropdown header navigation button"
    >
      <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
        <span 
          className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] text-[16px] text-nowrap whitespace-pre" 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {children}
        </span>
      </div>
      {hasDropdown && (
        <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
          <ChevronDown className="w-4 h-4 text-[#a0e1f9]" strokeWidth={2} />
        </div>
      )}
    </button>
  );
}
