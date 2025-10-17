# SecondaryTabs Component

## Overview

Compact tab navigation component designed for widgets and secondary content areas. Features bottom border indicators and optional count badges.

## Location
- **Component**: `/components/ui/secondary-tabs.tsx`
- **Sub-component**: `/components/ui/secondary-tab-button.tsx`
- **Category**: Navigation

## Features

✅ **Compact Design**
- Smaller, lighter than HorizontalTabs
- Bottom border indicator (not full background)
- Perfect for widget containers

✅ **Multiple States**
- Default (inactive): Gray text, no border
- Hover: Light gray bottom border
- Active: Blue bottom border, blue text
- Disabled: 50% opacity, non-interactive

✅ **Count Badges**
- Display notification counts
- Rounded pill design
- Gray background with border

✅ **Accessibility**
- Keyboard navigation (Arrow keys, Home, End)
- Proper ARIA attributes
- Skip disabled tabs in keyboard navigation
- Screen reader friendly

## Usage

### Basic Example

```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';

<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved' }
  ]}
  defaultActiveTab="recent"
  onTabChange={(tabId) => console.log('Active:', tabId)}
/>
```

### With Count Badges

```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';

<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved', count: 12 }
  ]}
/>
```

### With Disabled Tabs

```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';

<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'archived', label: 'Archived', disabled: true }
  ]}
/>
```

### Complete Example (In Sidebar Widget)

```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';

<div className="bg-white p-6">
  <h3 className="text-xl mb-4">My Documents</h3>
  
  <SecondaryTabs
    tabs={[
      { id: 'recent', label: 'Recent' },
      { id: 'saved', label: 'Saved', count: 12 },
      { id: 'archived', label: 'Archived', disabled: true }
    ]}
    defaultActiveTab="recent"
    onTabChange={(tabId) => {
      // Load content for selected tab
      loadDocuments(tabId);
    }}
  />
  
  <div className="mt-4">
    {/* Tab content here */}
  </div>
</div>
```

## Props

### SecondaryTabs Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tabs` | `SecondaryTab[]` | ✅ | - | Array of tab configurations |
| `defaultActiveTab` | `string` | ❌ | First non-disabled tab | ID of initially active tab |
| `onTabChange` | `(tabId: string) => void` | ❌ | - | Callback when tab changes |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `aria-label` | `string` | ❌ | `'Secondary navigation tabs'` | ARIA label for tablist |

### SecondaryTab Interface

```tsx
interface SecondaryTab {
  id: string;        // Unique identifier
  label: string;     // Display text
  count?: number;    // Optional count badge
  disabled?: boolean; // Disable interaction
}
```

### SecondaryTabButton Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | ✅ | - | Tab text label |
| `isActive` | `boolean` | ❌ | `false` | Active state |
| `disabled` | `boolean` | ❌ | `false` | Disabled state |
| `count` | `number` | ❌ | - | Count badge number |
| `onClick` | `() => void` | ❌ | - | Click handler |
| `className` | `string` | ❌ | `''` | Additional classes |

## Design Specifications

### Colors
- **Active Tab Border**: `#0097cf` (Blue)
- **Active Tab Text**: `#008bbe` (Blue)
- **Inactive Tab Text**: `#717680` (Gray)
- **Hover Border**: `#b8c7ce` (Light gray)
- **Bottom Line**: `#e9eaeb` (Very light gray)
- **Count Badge Background**: `#f5f5f5` (Neutral gray)
- **Count Badge Border**: `#e9eaeb` (Light gray)
- **Count Badge Text**: `#414651` (Dark gray)

### Typography
- **Tab Label Font**: Roboto Semibold
- **Tab Label Size**: 16px
- **Tab Label Line Height**: 22px
- **Count Badge Font**: Roboto Medium
- **Count Badge Size**: 14px
- **Count Badge Line Height**: 20px

### Spacing
- **Tab Height**: 36px
- **Tab Padding Bottom**: 12px
- **Tab Padding Horizontal**: 4px
- **Gap Between Tabs**: 12px
- **Gap in Tab Container**: 8px
- **Count Badge Padding**: 10px horizontal, 2px vertical

### Borders
- **Active Border**: 2px solid bottom
- **Hover Border**: 2px solid bottom
- **Bottom Line**: 1px solid bottom
- **Count Badge Border**: 1px solid all sides

### Layout
- **Container**: Full width, column direction
- **Tab Container**: Flex row with 12px gap
- **Border Radius (Count)**: 9999px (fully rounded)

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `←` (Left Arrow) | Move to previous tab |
| `→` (Right Arrow) | Move to next tab |
| `Home` | Jump to first tab |
| `End` | Jump to last tab |
| `Enter` / `Space` | Activate focused tab |

**Note**: Disabled tabs are automatically skipped during keyboard navigation.

## Accessibility

- ✅ `role="tablist"` on container
- ✅ `role="tab"` on each tab button
- ✅ `role="presentation"` on tab wrappers
- ✅ `aria-selected` indicates active state
- ✅ `aria-pressed` for button state
- ✅ `aria-disabled` indicates disabled state
- ✅ `aria-label` provides context
- ✅ `aria-hidden` on decorative elements
- ✅ Full keyboard navigation support

## State Management

The component manages its own active tab state internally. You can:
1. Set initial state via `defaultActiveTab`
2. React to changes via `onTabChange`
3. Control from parent component (controlled mode coming soon)

## Integration Examples

### With Content Switching

```tsx
const [activeTab, setActiveTab] = useState('recent');

<div>
  <SecondaryTabs
    tabs={[
      { id: 'recent', label: 'Recent' },
      { id: 'saved', label: 'Saved', count: 12 }
    ]}
    defaultActiveTab={activeTab}
    onTabChange={setActiveTab}
  />
  
  <div className="mt-4">
    {activeTab === 'recent' && <RecentDocuments />}
    {activeTab === 'saved' && <SavedDocuments />}
  </div>
</div>
```

### With Dynamic Counts

```tsx
const tabs = [
  { 
    id: 'recent', 
    label: 'Recent' 
  },
  { 
    id: 'saved', 
    label: 'Saved', 
    count: savedCount // Dynamic value
  }
];

<SecondaryTabs tabs={tabs} />
```

### In Sidebar Widgets

```tsx
import { SidebarWidget } from './components/ui/sidebar-widget';

<SidebarWidget
  title="My Contacts"
  tabs={[
    { id: 'dept', label: 'My Department' },
    { id: 'saved', label: 'Saved', count: 6 }
  ]}
  defaultActiveTab="dept"
>
  <ContactList />
</SidebarWidget>
```

## Comparison: SecondaryTabs vs HorizontalTabs

| Feature | SecondaryTabs | HorizontalTabs |
|---------|---------------|----------------|
| **Use Case** | Widgets, compact areas | Main navigation, content switching |
| **Visual Style** | Bottom border only | Full background fill |
| **Size** | Compact (36px) | Larger (48px) |
| **Color Scheme** | Blue/Gray | Blue/White |
| **Background** | Transparent | #009fda container |
| **Icons** | ❌ No | ✅ Yes |
| **Count Badge** | ✅ Yes | ❌ No (has badge prop) |
| **Badge Style** | Rounded pill | Circular |
| **Best For** | Sidebar widgets | Page sections |

## When to Use

### Use SecondaryTabs when:
- ✅ Inside sidebar widgets
- ✅ Compact spaces where full tabs are too heavy
- ✅ Need count indicators (e.g., "Saved (12)")
- ✅ Secondary content filtering
- ✅ Widget-level navigation

### Use HorizontalTabs when:
- ✅ Main page navigation
- ✅ Prominent content switching
- ✅ Need icons in tabs
- ✅ Full-width navigation areas
- ✅ Primary navigation

## Related Components

- **HorizontalTabs** - `/components/ui/horizontal-tabs.tsx` - Primary tab navigation
- **Tabs** (ShadCN) - `/components/ui/tabs.tsx` - Generic tab component
- **SidebarWidget** - `/components/ui/sidebar-widget.tsx` - Widget container
- **Breadcrumb** - `/components/ui/breadcrumb.tsx` - Navigation breadcrumbs

## Best Practices

1. ✅ **Unique IDs**: Ensure each tab has a unique `id`
2. ✅ **Short Labels**: Keep labels concise (1-2 words)
3. ✅ **Count Usage**: Only show counts when meaningful (saved items, notifications)
4. ✅ **2-4 Tabs**: Ideal range for compact spaces
5. ✅ **Default Tab**: Always provide a sensible default active tab
6. ✅ **Disabled State**: Only disable when necessary (permissions, loading)

## Migration from Inline Implementation

If you have inline tab implementations in widgets, here's how to migrate:

```tsx
// ❌ Old (inline implementation)
<div className="flex gap-3">
  {tabs.map(tab => (
    <div
      key={tab.id}
      onClick={() => setActive(tab.id)}
      className={active === tab.id ? 'border-b-2 border-blue-500' : ''}
    >
      {tab.label}
      {tab.count && <span>{tab.count}</span>}
    </div>
  ))}
</div>

// ✅ New (SecondaryTabs component)
<SecondaryTabs
  tabs={tabs}
  defaultActiveTab={active}
  onTabChange={setActive}
/>
```

## Data Structure

### From Content/Data Files

```tsx
// In /content/sidebar-widgets.ts
export const sidebarWidgets = {
  myContacts: {
    title: "Moje kontakty",
    tabs: [
      { id: "department", label: "Můj odbor" },
      { id: "saved", label: "Uložené", count: 6 }
    ],
    defaultTab: "department",
    // ... rest of widget data
  }
};

// Usage
import { sidebarWidgets } from '../content/sidebar-widgets';

<SecondaryTabs
  tabs={sidebarWidgets.myContacts.tabs}
  defaultActiveTab={sidebarWidgets.myContacts.defaultTab}
/>
```

## Testing Checklist

When implementing SecondaryTabs, verify:

- [ ] Keyboard navigation works (Tab, Arrow keys, Enter)
- [ ] Focus indicators are visible
- [ ] Screen reader announces current state
- [ ] Disabled items are not interactive
- [ ] Count badges display correctly
- [ ] Active state switches properly
- [ ] Hover states function correctly
- [ ] No console errors or warnings
- [ ] Colors match design specifications
- [ ] Typography is consistent

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight component (~2KB gzipped)
- No external dependencies (except React)
- Minimal re-renders
- Efficient event handling

---

**Last Updated**: 2025-10-15
**Version**: 1.0.0
