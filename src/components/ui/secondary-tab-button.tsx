import React from 'react';
import { cn } from './utils';

/**
 * Secondary Tab Button Props Interface
 */
export interface SecondaryTabButtonProps {
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  count?: number;
  onClick?: () => void;
  className?: string;
}

/**
 * Secondary Tab Button Component
 * 
 * Compact tab button with optional count badge, used in widgets and secondary navigation.
 * Features bottom border indicator for active state.
 * 
 * @component
 * @example
 * ```tsx
 * <SecondaryTabButton
 *   label="Recent"
 *   count={5}
 *   isActive={true}
 *   onClick={() => handleTabClick('recent')}
 * />
 * ```
 */
export const SecondaryTabButton: React.FC<SecondaryTabButtonProps> = ({
  label,
  isActive = false,
  disabled = false,
  count,
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
      className={cn(
        'box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pb-[12px] pt-0 px-[4px] relative shrink-0',
        'transition-all duration-200 ease-in-out',
        isActive && 'border-[#0097cf] border-[0px_0px_2px] border-solid',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        !isActive && !disabled && 'hover:border-[#b8c7ce] hover:border-[0px_0px_2px] hover:border-solid',
        className
      )}
      aria-pressed={isActive}
      aria-disabled={disabled}
      type="button"
      role="tab"
      aria-selected={isActive}
    >
      {/* Label */}
      <p 
        className={cn(
          "font-['Roboto:Semibold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre",
          "transition-colors duration-200",
          isActive ? 'text-[#008bbe]' : 'text-[#717680]',
          !isActive && !disabled && 'group-hover:text-[#414651]'
        )}
      >
        {label}
      </p>

      {/* Count Badge (optional) */}
      {count !== undefined && count !== null && (
        <div className="bg-neutral-50 box-border content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0">
          <div 
            aria-hidden="true" 
            className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" 
          />
          <p 
            className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#414651] text-[14px] text-center text-nowrap whitespace-pre" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {count}
          </p>
        </div>
      )}
    </button>
  );
};

SecondaryTabButton.displayName = 'SecondaryTabButton';
