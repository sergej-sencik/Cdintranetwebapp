# Sidebar Widget System Documentation

## Overview

The Sidebar Widget System is a comprehensive, reusable component library for building modular sidebar layouts. It provides a consistent design pattern for displaying department information, contacts, documents, and other widget-based content.

## Architecture

### Component Hierarchy

```
📦 Sidebar System
├── 🎯 RightSidebar (Main Container)
│   ├── MyDepartmentWidget
│   ├── MyContactsWidget
│   └── MyDocumentsWidget
│
├── 🏗️ Core Components
│   ├── SidebarWidget (Base Container)
│   ├── ViewAllLink (Footer Link)
│   └── SidebarWidgetHeader (Title + Tabs)
│
├── 📋 Atomic Components
│   ├── ContactCard
│   ├── FileItem
│   ├── QuickLink
│   └── DepartmentBanner
│
└── 📊 Data Layer
    ├── sidebar-widgets.json
    └── types.ts (TypeScript definitions)
```

## Components

### 1. RightSidebar

**Location:** `/components/ui/sidebar-right.tsx`

Main container component that renders all sidebar widgets using data from JSON.

**Usage:**
```tsx
import { RightSidebar } from './components/ui/sidebar-right';

<RightSidebar />
```

**Props:** None (data-driven from JSON)

---

### 2. SidebarWidget

**Location:** `/components/ui/sidebar-widget.tsx`

Base container component for all sidebar widgets. Provides consistent layout with title, optional tabs, content area, and footer.

**Props:**
- `title` (string, required): Widget title
- `tabs` (SidebarTab[], optional): Tab configuration
- `defaultActiveTab` (string, optional): Initial active tab
- `onTabChange` ((tabId: string) => void, optional): Tab change callback
- `children` (ReactNode, required): Widget content
- `footer` (ReactNode, optional): Footer content (CTA, ViewAll link, etc.)
- `className` (string, optional): Additional CSS classes

**Usage:**
```tsx
<SidebarWidget
  title="My Widget"
  tabs={[
    { id: 'all', label: 'All' },
    { id: 'favorites', label: 'Favorites', count: 5 }
  ]}
  footer={<ViewAllLink text="View All" href="#" />}
>
  {/* Content goes here */}
</SidebarWidget>
```

---

### 3. MyDepartmentWidget

**Location:** `/components/ui/my-department-widget.tsx`

Specialized widget for displaying department information with banner, key contacts, and quick links.

**Props:**
- `title` (string): Widget title
- `banner` (object): Department banner configuration
  - `image` (string): Banner image URL
  - `departmentName` (string): Department name
  - `location` (string): Department location
  - `icon` ('wrench' | 'tool', optional): Icon type
- `keyContacts` (object): Key contacts section
  - `title` (string): Section title
  - `contacts` (ContactCardProps[]): Array of contacts
- `quickLinks` (object): Quick links section
  - `title` (string): Section title
  - `links` (Array<{id, title, href}>): Array of links
- `cta` (object): Call-to-action button
  - `text` (string): Button text
  - `href` (string): Button URL

**Usage:**
```tsx
<MyDepartmentWidget
  title="Muj odbor"
  banner={{
    image: "/dept.jpg",
    departmentName: "Odbor údržby",
    location: "Depo Plzeň"
  }}
  keyContacts={{
    title: "Klíčové kontakty",
    contacts: [...]
  }}
  quickLinks={{
    title: "Důležité odkazy",
    links: [...]
  }}
  cta={{
    text: "Visit department",
    href: "#"
  }}
/>
```

---

### 4. MyContactsWidget

**Location:** `/components/ui/my-contacts-widget.tsx`

Widget for displaying contact lists with tab filtering.

**Props:**
- `title` (string): Widget title
- `tabs` (SidebarTab[]): Tab configuration
- `defaultTab` (string, optional): Default active tab
- `contacts` (ContactCardProps[]): Array of contacts
- `viewAll` (object): View all link
  - `text` (string): Link text
  - `href` (string): Link URL
- `onTabChange` ((tabId: string) => void, optional): Tab change callback

**Usage:**
```tsx
<MyContactsWidget
  title="Moje kontakty"
  tabs={[
    { id: 'dept', label: 'Můj odbor' },
    { id: 'saved', label: 'Uložené', count: 6 }
  ]}
  contacts={contactsData}
  viewAll={{ text: "View all (28)", href: "#" }}
/>
```

---

### 5. MyDocumentsWidget

**Location:** `/components/ui/my-documents-widget.tsx`

Widget for displaying document/file lists with tab filtering.

**Props:**
- `title` (string): Widget title
- `tabs` (SidebarTab[]): Tab configuration
- `defaultTab` (string, optional): Default active tab
- `files` (FileItemProps[]): Array of files
- `viewAll` (object): View all link
  - `text` (string): Link text
  - `href` (string): Link URL
- `onTabChange` ((tabId: string) => void, optional): Tab change callback

**Usage:**
```tsx
<MyDocumentsWidget
  title="Moje dokumenty"
  tabs={[
    { id: 'recent', label: 'Nedávné' },
    { id: 'saved', label: 'Uložené', count: 12 }
  ]}
  files={filesData}
  viewAll={{ text: "View all (9)", href: "#" }}
/>
```

---

### 6. ContactCard

**Location:** `/components/ui/contact-card.tsx`

Reusable contact card component.

**Props:**
- `name` (string, required): Contact name
- `position` (string, required): Job title
- `phone` (string, required): Phone number
- `avatar` (string, optional): Avatar image URL
- `initials` (string, optional): Avatar initials (auto-generated if not provided)
- `badge` (object, optional): Badge configuration
  - `text` (string): Badge text
  - `variant` ('success' | 'info' | 'warning' | 'error'): Badge variant
- `compact` (boolean, optional): Use compact padding

**Usage:**
```tsx
<ContactCard
  name="Pavel Dvořák"
  position="Mistr směny A"
  phone="+420 725 123 456"
  avatar="/avatar.png"
  badge={{ text: "Váš nadřízený", variant: "success" }}
/>
```

**Variants:**
- **Default:** Full padding (16px all sides)
- **Compact:** Reduced padding (16px horizontal, 12px vertical)

---

### 7. FileItem

**Location:** `/components/ui/file-item.tsx`

Reusable file/document item component.

**Props:**
- `name` (string, required): File name
- `type` ('PDF' | 'DOC' | 'XLSX' | 'PNG' | 'JPG' | 'IMG', required): File type
- `date` (string, required): Date information
- `href` (string, required): Link URL
- `badge` (object, optional): Badge configuration
  - `text` (string): Badge text
  - `variant` ('success' | 'info' | 'warning' | 'error'): Badge variant
- `isExternal` (boolean, optional): Opens in new tab
- `onClick` (() => void, optional): Click handler

**Usage:**
```tsx
<FileItem
  name="Servisní manuál"
  type="PDF"
  date="Dnes, 14:31"
  href="/manual.pdf"
  badge={{ text: "IS NORMIS", variant: "info" }}
/>
```

**File Type Colors:**
- PDF: Red (#d92d20)
- DOC: Gray (#414651)
- XLSX: Green (#079455)
- PNG/JPG/IMG: Blue (#0097cf)

---

### 8. QuickLink

**Location:** `/components/ui/quick-link.tsx`

Simple link component for navigation shortcuts.

**Props:**
- `title` (string, required): Link title
- `href` (string, required): Link URL
- `onClick` (() => void, optional): Click handler

**Usage:**
```tsx
<QuickLink
  title="Rozpis směn"
  href="/schedule"
/>
```

---

### 9. DepartmentBanner

**Location:** `/components/ui/department-banner.tsx`

Department banner with image background and overlay information.

**Props:**
- `image` (string, required): Background image URL
- `departmentName` (string, required): Department name
- `location` (string, required): Location/workplace
- `icon` ('wrench' | 'tool', optional): Icon type (default: 'tool')

**Usage:**
```tsx
<DepartmentBanner
  image="/dept-image.jpg"
  departmentName="Odbor údržby a oprav"
  location="Depo kolejových vozidel Plzeň"
  icon="wrench"
/>
```

---

## Data Structure

### Data Configuration

**Location:** `/content/sidebar-widgets.ts`

All sidebar widget content is stored in a centralized TypeScript file for easy management and updates.

**Structure:**
```typescript
export const sidebarWidgets = {
  meta: {
    version: "1.0.0",
    lastUpdated: "2025-01-15",
    description: "Sidebar widget content"
  },
  myDepartment: { /* Department widget config */ },
  myContacts: { /* Contacts widget config */ },
  myDocuments: { /* Documents widget config */ }
} as const;
```

**Type Definitions:** See `/content/types.ts` for complete TypeScript interfaces.

---

## Design System Integration

### Global Styles Used

The sidebar system leverages existing global styles and variables:

**Colors:**
- Primary Blue: `#002664` (text-[#002664])
- Link Blue: `#009FDA`, `#009fda`, `#0097cf`, `#008bbe`
- Text Gray: `#252b37`, `#535862`, `#717680`, `#414651`
- Background: `bg-white`, `bg-neutral-100`, `bg-neutral-50`
- Success: `#ecfdf3`, `#067647`, `#abefc6`
- Info: `#e3f7ff`, `#008bbe`, `#a0e1f9`
- Warning: `#fff4ed`, `#b93815`, `#fec89a`
- Error: `#fef3f2`, `#d92d20`, `#fecdca`

**Typography:**
- Headings: `font-['CD_Fedra_Pro',_sans-serif]` (22px, medium, line-height: 32px)
- Body: `font-['Roboto:Medium',_sans-serif]` or `font-['Roboto:Regular',_sans-serif]`
- Font sizes: 12px, 14px, 16px, 18px, 22px
- Font weights: Regular (400), Medium (500), Semibold (600), Bold (700)

**Spacing:**
- Widget padding: 24px
- Gap between widgets: 32px
- Item gaps: 8px, 12px, 16px
- Border radius: 4px (components), 9999px (badges, avatars)

**Existing Components Used:**
- Avatar (`/components/ui/avatar.tsx`)
- Badge (`/components/ui/badge.tsx`)
- CustomButton (`/components/ui/custom-button.tsx`)
- HorizontalTabs (`/components/ui/horizontal-tabs.tsx`)
- Lucide Icons (Phone, MapPin, ArrowRight, ExternalLink, Wrench, ChevronRight)

---

## Usage Examples

### Basic Implementation

```tsx
import { RightSidebar } from './components/ui/sidebar-right';

function HomePage() {
  return (
    <div className="flex gap-8">
      <main className="flex-1">
        {/* Main content */}
      </main>
      <aside>
        <RightSidebar />
      </aside>
    </div>
  );
}
```

### Custom Widget

```tsx
import { SidebarWidget, ViewAllLink } from './components/ui/sidebar-widget';
import { ContactCard } from './components/ui/contact-card';

function CustomContactWidget() {
  return (
    <SidebarWidget
      title="Team Members"
      footer={<ViewAllLink text="View All Team" href="/team" />}
    >
      <div className="space-y-2">
        <ContactCard
          name="John Doe"
          position="Manager"
          phone="+1 234 567 890"
        />
        {/* More contacts */}
      </div>
    </SidebarWidget>
  );
}
```

### Dynamic Data Loading

```tsx
import { useState, useEffect } from 'react';
import { MyContactsWidget } from './components/ui/my-contacts-widget';

function DynamicContactsWidget() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from API
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <MyContactsWidget
      title="My Contacts"
      tabs={[
        { id: 'all', label: 'All' },
        { id: 'favorites', label: 'Favorites' }
      ]}
      contacts={contacts}
      viewAll={{ text: "View All", href: "/contacts" }}
    />
  );
}
```

---

## Accessibility

### ARIA Labels
- All interactive elements have appropriate ARIA labels
- Tab buttons use `role="tablist"` pattern
- Links have descriptive text or aria-labels

### Keyboard Navigation
- Tab buttons are keyboard accessible
- Links and buttons follow standard focus behavior
- Tab index properly managed

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy (h3 for widget titles)
- Alt text for images
- Hidden decorative elements with `aria-hidden="true"`

---

## Performance Considerations

### Optimization Strategies

1. **Lazy Loading:** Use React.lazy() for widgets not immediately visible
2. **Memoization:** Wrap components with React.memo() to prevent unnecessary re-renders
3. **Virtual Scrolling:** For long contact/file lists (100+ items)
4. **Image Optimization:** Use appropriate image formats and sizes

### Example Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const MyDocumentsWidget = lazy(() => import('./components/ui/my-documents-widget'));

function Sidebar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyDocumentsWidget {...props} />
    </Suspense>
  );
}
```

---

## Customization

### Theme Variants

Create custom variants by extending the base components:

```tsx
// Custom success-themed contact card
<ContactCard
  {...contactProps}
  className="bg-green-50 border-2 border-green-200"
/>

// Custom file item with different styling
<FileItem
  {...fileProps}
  className="bg-blue-50 hover:bg-blue-100"
/>
```

### Custom Badges

```tsx
const customBadge = {
  text: "VIP",
  variant: "success" as const
};

<ContactCard
  name="Important Contact"
  badge={customBadge}
  {...otherProps}
/>
```

---

## Testing

### Unit Tests

```tsx
import { render, screen } from '@testing-library/react';
import { ContactCard } from './contact-card';

test('renders contact name', () => {
  render(<ContactCard name="John Doe" position="Manager" phone="123" />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

### Integration Tests

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MyContactsWidget } from './my-contacts-widget';

test('tab switching works', () => {
  render(<MyContactsWidget {...props} />);
  const savedTab = screen.getByText('Uložené');
  fireEvent.click(savedTab);
  // Assert tab content changed
});
```

---

## Migration Guide

### From Old Sidebar to New System

**Before:**
```tsx
<div className="sidebar">
  <ActivityFeed />
  <Contacts />
  <Contacts1 />
</div>
```

**After:**
```tsx
<RightSidebar />
```

**Steps:**
1. Replace old sidebar components with `<RightSidebar />`
2. Migrate data to `/content/sidebar-widgets.json`
3. Remove old component files
4. Update imports in parent components

---

## Troubleshooting

### Common Issues

**Issue:** Tabs not switching
- **Solution:** Ensure `defaultActiveTab` matches one of the tab IDs

**Issue:** Images not loading
- **Solution:** Check image paths in JSON file, ensure they're accessible

**Issue:** Styling conflicts
- **Solution:** Check for conflicting CSS classes, use `cn()` utility properly

**Issue:** TypeScript errors
- **Solution:** Import types from `/content/types.ts`, ensure props match interfaces

---

## Future Enhancements

### Planned Features

1. **Drag & Drop:** Reorder widgets
2. **Collapsible Widgets:** Expand/collapse functionality
3. **Widget Settings:** User customization per widget
4. **Real-time Updates:** WebSocket support for live data
5. **Export/Import:** Backup and restore widget configurations
6. **Dark Mode:** Theme support for all components

---

## Changelog

### Version 1.0.0 (2025-01-15)
- Initial release
- Core components: ContactCard, FileItem, QuickLink, DepartmentBanner
- Widget components: MyDepartmentWidget, MyContactsWidget, MyDocumentsWidget
- Base container: SidebarWidget
- Main container: RightSidebar
- JSON data structure
- TypeScript type definitions
- Complete documentation

---

## Support

For questions, issues, or feature requests, please contact the development team or open an issue in the project repository.

**Documentation Version:** 1.0.0  
**Last Updated:** January 15, 2025
