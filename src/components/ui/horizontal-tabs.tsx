import React, { useState } from 'react';
import { TabButton, TabButtonProps } from './tab-button';
import { LucideIcon } from 'lucide-react';

/**
 * Tab configuration interface
 * Supports labels, icons, badges, and disabled states
 */
export interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  badge?: number | string;
  disabled?: boolean;
}

export interface HorizontalTabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  variant?: 'default' | 'custom';
}

/**
 * HorizontalTabs - Professional tab navigation component
 * 
 * Features:
 * - Active/hover/disabled states
 * - Optional icons
 * - Optional notification badges
 * - Keyboard accessible
 * - Follows design system colors
 * 
 * @example
 * ```tsx
 * <HorizontalTabs
 *   tabs={[
 *     { id: 'news', label: 'News', badge: 5 },
 *     { id: 'events', label: 'Events', icon: Calendar },
 *     { id: 'archived', label: 'Archived', disabled: true }
 *   ]}
 *   defaultActiveTab="news"
 *   onTabChange={(tabId) => console.log('Active tab:', tabId)}
 * />
 * ```
 */
export const HorizontalTabs: React.FC<HorizontalTabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
  variant = 'default',
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
      className={`bg-[#009fda] content-stretch flex items-center relative shrink-0 w-full z-[2] ${className}`}
      data-name="Horizontal tabs"
      role="tablist"
      aria-label="Navigation tabs"
    >
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="presentation"
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          <TabButton
            label={tab.label}
            icon={tab.icon}
            badge={tab.badge}
            disabled={tab.disabled}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
          />
        </div>
      ))}
    </div>
  );
};
