import React, { ReactNode } from 'react';
import { HorizontalTabs } from './horizontal-tabs';

interface Tab {
  id: string;
  label: string;
}

// Global button size configuration for all PageBlockHeader instances
// Change this constant to update button sizes across all PageBlockHeader components
export const PAGE_BLOCK_HEADER_BUTTON_SIZE = 'md' as const;

interface PageBlockHeaderProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional action buttons or elements on the right side */
  actions?: ReactNode;
  /** Optional tabs configuration */
  tabs?: Tab[];
  /** Default active tab ID */
  defaultActiveTab?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export const PageBlockHeader: React.FC<PageBlockHeaderProps> = ({
  title,
  subtitle,
  actions,
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div 
      className={`content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full ${className}`}
      data-name="Section header"
    >
      {/* Header content with title and actions */}
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[3]">
        {/* Title section */}
        <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
          <h3 className="text-h3 relative shrink-0 text-card-foreground w-full">
            {title}
          </h3>
          {subtitle && (
            <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Actions section */}
        {actions && (
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            {actions}
          </div>
        )}
      </div>

      {/* Optional tabs */}
      {tabs && tabs.length > 0 && (
        <HorizontalTabs
          tabs={tabs}
          defaultActiveTab={defaultActiveTab}
          onTabChange={onTabChange}
        />
      )}
    </div>
  );
};
