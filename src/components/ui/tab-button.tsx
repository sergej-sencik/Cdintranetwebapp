import React from 'react';
import { Badge } from './badge';
import { LucideIcon } from 'lucide-react';

export interface TabButtonProps {
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  badge?: number | string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive = false,
  disabled = false,
  badge,
  icon: Icon,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        h-[48px] relative shrink-0 
        transition-all duration-200 ease-in-out
        ${isActive ? 'bg-white' : 'bg-transparent'}
        ${!isActive && !disabled ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      aria-pressed={isActive}
      aria-disabled={disabled}
      type="button"
    >
      <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
        {/* Icon (optional) */}
        {Icon && (
          <Icon 
            className={`
              w-[16px] h-[16px] shrink-0
              ${isActive ? 'text-[#252b37]' : 'text-white'}
            `}
            aria-hidden="true"
          />
        )}
        
        {/* Label */}
        <p 
          className={`
            font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] 
            relative shrink-0 text-[14px] text-nowrap tracking-[0.28px] 
            uppercase whitespace-pre
            ${isActive ? 'text-[#252b37]' : 'text-white'}
          `}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {label}
        </p>

        {/* Badge (optional) */}
        {badge !== undefined && badge !== null && (
          <Badge 
            variant={isActive ? "default" : "secondary"}
            className={`
              min-w-[20px] h-[20px] px-[6px] py-[2px] rounded-full
              ${isActive ? 'bg-[#009fda] text-white' : 'bg-white text-[#252b37]'}
            `}
          >
            {badge}
          </Badge>
        )}
      </div>
      
      {/* Border decoration (only when not active) */}
      {!isActive && (
        <div 
          aria-hidden="true" 
          className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" 
        />
      )}
    </button>
  );
};
