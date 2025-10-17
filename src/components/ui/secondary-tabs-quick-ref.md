# SecondaryTabs - Quick Reference Card

## Import
```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';
```

## Basic Usage
```tsx
<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved' }
  ]}
  defaultActiveTab="recent"
/>
```

## With Count Badge
```tsx
<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved', count: 12 }
  ]}
/>
```

## With Disabled Tab
```tsx
<SecondaryTabs
  tabs={[
    { id: 'active', label: 'Active' },
    { id: 'archived', label: 'Archived', disabled: true }
  ]}
/>
```

## In Sidebar Widget (Using JSON Data)
```tsx
import { sidebarWidgets } from '../content/sidebar-widgets';

<SidebarWidget
  title={sidebarWidgets.myContacts.title}
  tabs={sidebarWidgets.myContacts.tabs}
  defaultActiveTab={sidebarWidgets.myContacts.defaultTab}
>
  <ContactList />
</SidebarWidget>
```

## Props Reference

### Tab Object
```tsx
{
  id: string;        // Required: unique ID
  label: string;     // Required: display text
  count?: number;    // Optional: count badge
  disabled?: boolean; // Optional: disable tab
}
```

### SecondaryTabs Props
```tsx
{
  tabs: SecondaryTab[];                    // Required
  defaultActiveTab?: string;               // Optional: initial active
  onTabChange?: (id: string) => void;      // Optional: callback
  className?: string;                      // Optional: additional classes
  'aria-label'?: string;                   // Optional: ARIA label
}
```

## Keyboard Shortcuts
- `←` Previous tab
- `→` Next tab  
- `Home` First tab
- `End` Last tab

## States
- **Default**: Gray text, no border
- **Hover**: Light gray bottom border
- **Active**: Blue text, blue bottom border
- **Disabled**: 50% opacity, non-interactive

## Colors
- Active: `#008bbe` (text), `#0097cf` (border)
- Inactive: `#717680`
- Count badge: `#f5f5f5` bg, `#414651` text

## When to Use
✅ Sidebar widgets
✅ Compact filtering
✅ Secondary navigation
✅ Don't need icons

## See Also
- Full Docs: `/components/ui/secondary-tabs.md`
- Category: `/components/ui/navigation-components.md`
- Compare: HorizontalTabs (for primary navigation)
