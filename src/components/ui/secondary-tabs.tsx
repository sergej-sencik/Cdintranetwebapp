import React, { useState } from 'react';
import { SecondaryTabButton } from './secondary-tab-button';
import { cn } from './utils';

/**
 * Secondary Tab Configuration Interface
 */
export interface SecondaryTab {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

/**
 * Secondary Tabs Component Props
 */
export interface SecondaryTabsProps {
  tabs: SecondaryTab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  'aria-label'?: string;
}

/**
 * Secondary Tabs Component
 * 
 * Compact tab navigation for widgets and secondary content areas.
 * Features bottom border indicators and optional count badges.
 * 
 * **Design Specifications:**
 * - Active tab: Blue bottom border (#0097cf), blue text (#008bbe)
 * - Inactive tab: Gray text (#717680), no border
 * - Hover state: Light gray bottom border (#b8c7ce)
 * - Height: 36px (with 12px padding bottom)
 * - Font: Roboto Semibold, 16px
 * - Count badge: Gray background (#f5f5f5), gray border (#e9eaeb)
 * 
 * **Accessibility:**
 * - Full keyboard navigation support
 * - ARIA role="tablist" and role="tab"
 * - aria-selected for active state
 * - aria-disabled for disabled tabs
 * 
 * @component
 * @example
 * ```tsx
 * <SecondaryTabs
 *   tabs={[
 *     { id: 'recent', label: 'Recent' },
 *     { id: 'saved', label: 'Saved', count: 12 }
 *   ]}
 *   defaultActiveTab="recent"
 *   onTabChange={(tabId) => console.log('Active:', tabId)}
 * />
 * ```
 */
export const SecondaryTabs: React.FC<SecondaryTabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
  'aria-label': ariaLabel = 'Secondary navigation tabs',
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs.find(tab => !tab.disabled)?.id || tabs[0]?.id || ''
  );

  const handleTabClick = (tabId: string, isDisabled?: boolean) => {
    if (isDisabled) return;
    
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tabIndex: number) => {
    let newIndex = tabIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = tabIndex - 1;
        if (newIndex < 0) newIndex = tabs.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = tabIndex + 1;
        if (newIndex >= tabs.length) newIndex = 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    // Skip disabled tabs
    while (tabs[newIndex]?.disabled && newIndex !== tabIndex) {
      if (event.key === 'ArrowLeft' || event.key === 'End') {
        newIndex--;
        if (newIndex < 0) newIndex = tabs.length - 1;
      } else {
        newIndex++;
        if (newIndex >= tabs.length) newIndex = 0;
      }
    }

    if (!tabs[newIndex]?.disabled) {
      handleTabClick(tabs[newIndex].id, tabs[newIndex].disabled);
    }
  };

  return (
    <div 
      className={cn(
        'content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full',
        className
      )}
      data-name="Secondary Tabs"
    >
      {/* Bottom border line */}
      <div 
        aria-hidden="true" 
        className="absolute border-[#e9eaeb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" 
      />
      
      {/* Tabs Container */}
      <div 
        className="content-stretch flex gap-[12px] items-start relative shrink-0"
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="presentation"
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <SecondaryTabButton
              label={tab.label}
              count={tab.count}
              disabled={tab.disabled}
              isActive={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SecondaryTabs.displayName = 'SecondaryTabs';
