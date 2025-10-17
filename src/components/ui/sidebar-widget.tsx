import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { SecondaryTabs, SecondaryTab } from './secondary-tabs';
import { CustomButton } from './custom-button';
import { cn } from './utils';

/**
 * Sidebar Widget Component
 * 
 * A reusable container component for sidebar widgets with optional
 * tabs, content area, and footer actions.
 * 
 * @component
 * @example
 * ```tsx
 * <SidebarWidget
 *   title="Moje kontakty"
 *   tabs={[
 *     { id: 'all', label: 'Všechny' },
 *     { id: 'favorites', label: 'Oblíbené', count: 5 }
 *   ]}
 * >
 *   <ContactList contacts={contacts} />
 * </SidebarWidget>
 * ```
 */

// Re-export SecondaryTab as SidebarTab for backward compatibility
export type SidebarTab = SecondaryTab;

export interface SidebarWidgetProps {
  /** Widget title */
  title: string;
  /** Optional tabs configuration */
  tabs?: SidebarTab[];
  /** Default active tab ID */
  defaultActiveTab?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
  /** Widget content */
  children: React.ReactNode;
  /** Optional footer content (CTA button, etc.) */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Sidebar Widget Header with Tabs
 */
interface SidebarWidgetHeaderProps {
  title: string;
  tabs?: SidebarTab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
}

const SidebarWidgetHeader: React.FC<SidebarWidgetHeaderProps> = ({
  title,
  tabs,
  defaultActiveTab,
  onTabChange,
}) => {
  return (
    <>
      {/* Title */}
      <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[32px] min-w-full not-italic relative shrink-0 text-card-foreground text-[22px] w-[min-content]">
        {title}
      </h3>

      {/* Tabs (if provided) - using SecondaryTabs component */}
      {tabs && tabs.length > 0 && (
        <SecondaryTabs
          tabs={tabs}
          defaultActiveTab={defaultActiveTab}
          onTabChange={onTabChange}
        />
      )}
    </>
  );
};

/**
 * Main Sidebar Widget Component
 */
export const SidebarWidget = React.forwardRef<HTMLDivElement, SidebarWidgetProps>(
  ({ title, tabs, defaultActiveTab, onTabChange, children, footer, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white relative shrink-0 w-full',
          className
        )}
        data-name="Sidebar Widget"
      >
        <div className="flex flex-col items-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-end p-[24px] relative w-full">
            <SidebarWidgetHeader
              title={title}
              tabs={tabs}
              defaultActiveTab={defaultActiveTab}
              onTabChange={onTabChange}
            />

            {/* Content */}
            {children}

            {/* Footer */}
            {footer}
          </div>
        </div>
      </div>
    );
  }
);

SidebarWidget.displayName = 'SidebarWidget';

/**
 * View All Link Component
 * Common footer link for "View All" actions
 */
export interface ViewAllLinkProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export const ViewAllLink: React.FC<ViewAllLinkProps> = ({ text, href, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className="inline-block">
      <CustomButton
        variant="link-color"
        size="md"
        rightIcon={<ChevronRight className="size-[20px]" />}
      >
        {text}
      </CustomButton>
    </a>
  );
};
