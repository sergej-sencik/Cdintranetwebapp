import * as React from 'react';
import { SidebarWidget, ViewAllLink, SidebarTab } from './sidebar-widget';
import { ContactCard, ContactCardProps } from './contact-card';
import { cn } from './utils';

/**
 * My Contacts Widget Component
 * 
 * Displays a list of contacts with tabs for filtering
 * 
 * @component
 * @example
 * ```tsx
 * <MyContactsWidget
 *   title="Moje kontakty"
 *   tabs={[
 *     { id: 'all', label: 'Všechny' },
 *     { id: 'favorites', label: 'Oblíbené', count: 5 }
 *   ]}
 *   contacts={contacts}
 *   viewAll={{ text: "View all (28)", href: "#" }}
 * />
 * ```
 */

export interface MyContactsWidgetProps {
  title: string;
  tabs: SidebarTab[];
  defaultTab?: string;
  contacts: ContactCardProps[];
  viewAll: {
    text: string;
    href: string;
  };
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const MyContactsWidget = React.forwardRef<HTMLDivElement, MyContactsWidgetProps>(
  ({ title, tabs, defaultTab, contacts, viewAll, onTabChange, className }, ref) => {
    return (
      <div ref={ref} className={cn('content-stretch flex flex-col items-start relative shrink-0 w-full', className)}>
        <SidebarWidget
          title={title}
          tabs={tabs}
          defaultActiveTab={defaultTab}
          onTabChange={onTabChange}
          footer={<ViewAllLink text={viewAll.text} href={viewAll.href} />}
        >
          {/* Contacts List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {contacts.map((contact, index) => (
              <ContactCard key={contact.name || index} {...contact} />
            ))}
          </div>
        </SidebarWidget>
      </div>
    );
  }
);

MyContactsWidget.displayName = 'MyContactsWidget';
