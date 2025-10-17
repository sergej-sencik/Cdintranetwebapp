# Sidebar Widget System - Quick Start Guide

## Installation

All sidebar components are already installed in the project. No additional setup required!

## Basic Usage

### 1. Use the Complete Sidebar (Recommended)

The simplest way to add the sidebar to your page:

```tsx
import { RightSidebar } from './components/ui/sidebar-right';

function MyPage() {
  return (
    <div className="flex gap-8">
      <main className="flex-1">
        {/* Your main content */}
      </main>
      
      <aside>
        <RightSidebar />
      </aside>
    </div>
  );
}
```

**That's it!** The sidebar will automatically load all widgets with data from `/content/sidebar-widgets.json`.

---

### 2. Use Individual Widgets

If you need more control, use widgets individually:

```tsx
import { 
  MyDepartmentWidget,
  MyContactsWidget,
  MyDocumentsWidget
} from './components/ui/sidebar/index';

function CustomSidebar() {
  return (
    <div className="space-y-8">
      <MyDepartmentWidget {...departmentData} />
      <MyContactsWidget {...contactsData} />
      <MyDocumentsWidget {...documentsData} />
    </div>
  );
}
```

---

### 3. Use Atomic Components

Build custom widgets using atomic components:

```tsx
import {
  SidebarWidget,
  ContactCard,
  FileItem,
  ViewAllLink
} from './components/ui/sidebar/index';

function MyCustomWidget() {
  return (
    <SidebarWidget
      title="My Custom Widget"
      footer={<ViewAllLink text="View All" href="#" />}
    >
      <div className="space-y-2">
        <ContactCard {...contact1} />
        <ContactCard {...contact2} />
        <FileItem {...file1} />
      </div>
    </SidebarWidget>
  );
}
```

---

## Quick Examples

### Example 1: Contact Card

```tsx
<ContactCard
  name="Pavel Dvořák"
  position="Mistr směny A"
  phone="+420 725 123 456"
  avatar="/avatar.png"
  badge={{ text: "Váš nadřízený", variant: "success" }}
/>
```

### Example 2: File Item

```tsx
<FileItem
  name="Servisní manuál"
  type="PDF"
  date="Dnes, 14:31"
  href="/manual.pdf"
  badge={{ text: "New", variant: "info" }}
/>
```

### Example 3: Quick Link

```tsx
<QuickLink
  title="Rozpis směn"
  href="/schedule"
/>
```

### Example 4: Department Banner

```tsx
<DepartmentBanner
  image="/dept-image.jpg"
  departmentName="Odbor údržby"
  location="Depo Plzeň"
  icon="wrench"
/>
```

---

## Customizing Data

Edit `/content/sidebar-widgets.ts` to update widget content:

```typescript
export const sidebarWidgets = {
  myDepartment: {
    title: "My Department",
    banner: {
      image: "/path/to/image.jpg",
      departmentName: "Engineering",
      location: "Building A"
    },
    ...
  }
};
```

Changes will automatically reflect in the `<RightSidebar />` component!

---

## Component Props Reference

### ContactCard Props
- `name` (string) - Required
- `position` (string) - Required
- `phone` (string) - Required
- `avatar` (string) - Optional
- `initials` (string) - Optional (auto-generated)
- `badge` (object) - Optional
- `compact` (boolean) - Optional

### FileItem Props
- `name` (string) - Required
- `type` ('PDF'|'DOC'|'XLSX'|'PNG'|'JPG'|'IMG') - Required
- `date` (string) - Required
- `href` (string) - Required
- `badge` (object) - Optional
- `isExternal` (boolean) - Optional

### Badge Variants
- `success` - Green (success messages)
- `info` - Blue (informational)
- `warning` - Orange (warnings)
- `error` - Red (errors)

---

## View Live Examples

Visit the components showcase page to see all variants:

```
http://localhost:3000/components
```

Navigate to the "Sidebar Widgets" section to see:
- All atomic components
- Complete widget examples
- Different states and variants

---

## Common Patterns

### Pattern 1: Custom Widget with Tabs

```tsx
<SidebarWidget
  title="My Widget"
  tabs={[
    { id: 'all', label: 'All' },
    { id: 'favorites', label: 'Favorites', count: 5 }
  ]}
  onTabChange={(tabId) => console.log(tabId)}
>
  {/* Content changes based on active tab */}
</SidebarWidget>
```

### Pattern 2: Widget with Custom Footer

```tsx
<SidebarWidget
  title="Documents"
  footer={
    <CustomButton variant="primary">
      Upload New
    </CustomButton>
  }
>
  {/* Document list */}
</SidebarWidget>
```

### Pattern 3: Contact Card Variants

```tsx
{/* With photo */}
<ContactCard avatar="/photo.jpg" {...props} />

{/* With initials */}
<ContactCard initials="PD" {...props} />

{/* With badge */}
<ContactCard badge={{ text: "Manager", variant: "success" }} {...props} />

{/* Compact version */}
<ContactCard compact {...props} />
```

---

## Troubleshooting

**Problem:** Components not rendering
- **Solution:** Check that all imports are correct
- Ensure JSON file path is accessible

**Problem:** Styling looks wrong
- **Solution:** Verify global CSS is loaded
- Check for conflicting styles

**Problem:** TypeScript errors
- **Solution:** Import types from `/content/types.ts`
- Ensure props match interface definitions

---

## Next Steps

1. ✅ **Read full documentation:** `/docs/SIDEBAR_SYSTEM.md`
2. ✅ **View components showcase:** Visit `/components` page
3. ✅ **Customize JSON data:** Edit `/content/sidebar-widgets.json`
4. ✅ **Build custom widgets:** Use atomic components

---

## Support

For detailed documentation, see:
- **Full Documentation:** `/docs/SIDEBAR_SYSTEM.md`
- **Type Definitions:** `/content/types.ts`
- **Component Files:** `/components/ui/`

**Happy Building! 🎉**
