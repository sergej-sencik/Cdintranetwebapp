import * as React from 'react';
import { MyDepartmentWidget } from './my-department-widget';
import { MyContactsWidget } from './my-contacts-widget';
import { MyDocumentsWidget } from './my-documents-widget';
import { cn } from './utils';
import { sidebarWidgets as sidebarData } from '../../content/sidebar-widgets';

/**
 * Right Sidebar Component
 * 
 * Main container for sidebar widgets on the right side of the page
 * Displays department info, contacts, and documents
 * 
 * @component
 * @example
 * ```tsx
 * <RightSidebar />
 * ```
 */

export interface RightSidebarProps {
  className?: string;
}

export const RightSidebar = React.forwardRef<HTMLDivElement, RightSidebarProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'content-stretch flex flex-col gap-[24px] lg:gap-[32px] items-start relative shrink-0 w-full lg:w-[384px]',
          className
        )}
        data-name="Right Sidebar"
      >
        {/* My Department Widget */}
        <MyDepartmentWidget
          title={sidebarData.myDepartment.title}
          banner={{
            image: sidebarData.myDepartment.banner.image,
            departmentName: sidebarData.myDepartment.banner.departmentName,
            location: sidebarData.myDepartment.banner.location,
            icon: sidebarData.myDepartment.banner.icon as 'wrench' | 'tool',
          }}
          keyContacts={{
            title: sidebarData.myDepartment.keyContacts.title,
            contacts: sidebarData.myDepartment.keyContacts.contacts.map(contact => ({
              name: contact.name,
              position: contact.position,
              phone: contact.phone,
              avatar: contact.avatar,
              badge: contact.badge ? {
                text: contact.badge.text,
                variant: contact.badge.variant as 'success' | 'info' | 'warning' | 'error',
              } : undefined,
            })),
          }}
          quickLinks={{
            title: sidebarData.myDepartment.quickLinks.title,
            links: sidebarData.myDepartment.quickLinks.links,
          }}
          cta={{
            text: sidebarData.myDepartment.cta.text,
            href: sidebarData.myDepartment.cta.href,
          }}
        />

        {/* My Contacts Widget */}
        <MyContactsWidget
          title={sidebarData.myContacts.title}
          tabs={sidebarData.myContacts.tabs}
          defaultTab={sidebarData.myContacts.defaultTab}
          contacts={sidebarData.myContacts.contacts.map(contact => ({
            name: contact.name,
            position: contact.position,
            phone: contact.phone,
            avatar: contact.avatar,
            initials: contact.initials,
          }))}
          viewAll={{
            text: sidebarData.myContacts.viewAll.text,
            href: sidebarData.myContacts.viewAll.href,
          }}
        />

        {/* My Documents Widget */}
        <MyDocumentsWidget
          title={sidebarData.myDocuments.title}
          tabs={sidebarData.myDocuments.tabs}
          defaultTab={sidebarData.myDocuments.defaultTab}
          files={sidebarData.myDocuments.files.map(file => ({
            id: file.id,
            name: file.name,
            type: file.type as 'PDF' | 'DOC' | 'XLSX' | 'PNG' | 'JPG' | 'IMG',
            date: file.date,
            href: file.href,
            badge: file.badge ? {
              text: file.badge.text,
              variant: file.badge.variant as 'success' | 'info' | 'warning' | 'error',
            } : undefined,
            isExternal: file.isExternal,
          }))}
          viewAll={{
            text: sidebarData.myDocuments.viewAll.text,
            href: sidebarData.myDocuments.viewAll.href,
          }}
        />
      </div>
    );
  }
);

RightSidebar.displayName = 'RightSidebar';
