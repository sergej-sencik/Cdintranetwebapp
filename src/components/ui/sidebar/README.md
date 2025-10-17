# Sidebar Widget System

## Quick Access

This directory provides centralized exports for all sidebar widget components.

## Import Examples

### Import Everything

```tsx
import {
  RightSidebar,
  SidebarWidget,
  ContactCard,
  FileItem,
  QuickLink,
  DepartmentBanner,
  MyDepartmentWidget,
  MyContactsWidget,
  MyDocumentsWidget,
  ViewAllLink
} from './components/ui/sidebar';
```

### Import Types

```tsx
import type {
  SidebarWidgetProps,
  ContactCardProps,
  FileItemProps,
  SidebarTab
} from './components/ui/sidebar';
```

## Components Available

### Main Container
- **RightSidebar** - Complete sidebar with all widgets (data-driven)

### Widget Components
- **MyDepartmentWidget** - Department information widget
- **MyContactsWidget** - Contacts list widget with tabs
- **MyDocumentsWidget** - Documents list widget with tabs

### Base Components
- **SidebarWidget** - Base container for creating custom widgets
- **ViewAllLink** - Standardized "View All" link component

### Atomic Components
- **ContactCard** - Reusable contact card
- **FileItem** - Reusable file/document item
- **QuickLink** - Simple navigation link
- **DepartmentBanner** - Department banner with image

## Documentation

- **Complete Guide:** `/docs/SIDEBAR_SYSTEM.md`
- **Quick Start:** `/docs/SIDEBAR_QUICK_START.md`
- **Migration Guide:** `/docs/SIDEBAR_MIGRATION.md`

## Data Location

All sidebar content is managed through:
- **Data File:** `/content/sidebar-widgets.ts`
- **Type Definitions:** `/content/types.ts`

## Live Examples

View all components in action:
```
http://localhost:3000/components
```

Navigate to "Sidebar Widgets" section.

---

**Version:** 1.0.0  
**Last Updated:** January 15, 2025
