/**
 * Sidebar Widget System Exports
 * 
 * Centralized exports for all sidebar-related components
 */

// Core Components
export { SidebarWidget, ViewAllLink } from '../sidebar-widget';
export type { SidebarWidgetProps, ViewAllLinkProps, SidebarTab } from '../sidebar-widget';

// Atomic Components
export { ContactCard } from '../contact-card';
export type { ContactCardProps, ContactCardBadge } from '../contact-card';

export { FileItem } from '../file-item';
export type { FileItemProps, FileItemBadge, FileType } from '../file-item';

export { QuickLink } from '../quick-link';
export type { QuickLinkProps } from '../quick-link';

export { DepartmentBanner } from '../department-banner';
export type { DepartmentBannerProps } from '../department-banner';

// Widget Components
export { MyDepartmentWidget } from '../my-department-widget';
export type { MyDepartmentWidgetProps } from '../my-department-widget';

export { MyContactsWidget } from '../my-contacts-widget';
export type { MyContactsWidgetProps } from '../my-contacts-widget';

export { MyDocumentsWidget } from '../my-documents-widget';
export type { MyDocumentsWidgetProps } from '../my-documents-widget';

// Main Container
export { RightSidebar } from '../sidebar-right';
export type { RightSidebarProps } from '../sidebar-right';
