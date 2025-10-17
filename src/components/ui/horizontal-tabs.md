# HorizontalTabs Component

## Overview

Professional tab navigation component with full state management, badge support, icons, and accessibility features. Part of the Navigation component category.

## Location
- **Component**: `/components/ui/horizontal-tabs.tsx`
- **Sub-component**: `/components/ui/tab-button.tsx`
- **Category**: Navigation

## Features

✅ **Multiple States**
- Default (inactive)
- Hover (semi-transparent white overlay)
- Active (solid white background)
- Disabled (50% opacity, non-interactive)

✅ **Badge Support**
- Display notification counts
- Automatic color switching (active/inactive)
- Supports numbers or strings

✅ **Icon Support**
- Optional left-aligned icons
- From lucide-react library
- Color-coordinated with tab state

✅ **Accessibility**
- Keyboard navigation (Arrow keys, Home, End)
- Proper ARIA attributes
- Skip disabled tabs in keyboard navigation
- Screen reader friendly

## Usage

### Basic Example

```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';

<HorizontalTabs
  tabs={[
    { id: 'news', label: 'News' },
    { id: 'events', label: 'Events' },
    { id: 'videos', label: 'Videos' }
  ]}
  defaultActiveTab="news"
  onTabChange={(tabId) => console.log('Active:', tabId)}
/>
```

### With Badges

```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';

<HorizontalTabs
  tabs={[
    { id: 'inbox', label: 'Inbox', badge: 12 },
    { id: 'drafts', label: 'Drafts', badge: 3 },
    { id: 'sent', label: 'Sent' }
  ]}
/>
```

### With Icons

```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';
import { FileText, Calendar, Video } from 'lucide-react';

<HorizontalTabs
  tabs={[
    { id: 'news', label: 'News', icon: FileText },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'videos', label: 'Videos', icon: Video }
  ]}
/>
```

### With Disabled Tabs

```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';

<HorizontalTabs
  tabs={[
    { id: 'current', label: 'Current' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'archived', label: 'Archived', disabled: true }
  ]}
/>
```

### Complete Example

```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';
import { Bell, Calendar, FileText, Archive } from 'lucide-react';

<HorizontalTabs
  tabs={[
    { 
      id: 'notifications', 
      label: 'Alerts', 
      icon: Bell,
      badge: 5 
    },
    { 
      id: 'events', 
      label: 'Events', 
      icon: Calendar,
      badge: 2 
    },
    { 
      id: 'news', 
      label: 'News', 
      icon: FileText 
    },
    { 
      id: 'archived', 
      label: 'Archived', 
      icon: Archive,
      disabled: true 
    }
  ]}
  defaultActiveTab="notifications"
  onTabChange={(tabId) => {
    console.log('User switched to:', tabId);
    // Update your content here
  }}
/>
```

## Props

### HorizontalTabs Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tabs` | `Tab[]` | ✅ | - | Array of tab configurations |
| `defaultActiveTab` | `string` | ❌ | First non-disabled tab | ID of initially active tab |
| `onTabChange` | `(tabId: string) => void` | ❌ | - | Callback when tab changes |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `variant` | `'default' \| 'custom'` | ❌ | `'default'` | Tab variant (future use) |

### Tab Interface

```tsx
interface Tab {
  id: string;              // Unique identifier
  label: string;           // Display text
  icon?: LucideIcon;       // Optional icon component
  badge?: number | string; // Optional badge content
  disabled?: boolean;      // Disable interaction
}
```

### TabButton Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | `string` | ✅ | - | Tab text label |
| `isActive` | `boolean` | ❌ | `false` | Active state |
| `disabled` | `boolean` | ❌ | `false` | Disabled state |
| `badge` | `number \| string` | ❌ | - | Badge content |
| `icon` | `LucideIcon` | ❌ | - | Icon component |
| `onClick` | `() => void` | ❌ | - | Click handler |
| `className` | `string` | ❌ | `''` | Additional classes |

## Design Specifications

### Colors
- **Container Background**: `#009fda` (Design system primary blue)
- **Active Tab**: `#ffffff` (White)
- **Inactive Tab**: Transparent
- **Hover State**: `rgba(255, 255, 255, 0.1)`
- **Active Text**: `#252b37` (Dark gray)
- **Inactive Text**: `#ffffff` (White)
- **Border**: `rgba(255, 255, 255, 0.3)`

### Typography
- **Font**: Roboto Medium
- **Size**: 14px
- **Line Height**: 20px
- **Letter Spacing**: 0.28px
- **Transform**: Uppercase

### Spacing
- **Tab Height**: 48px
- **Horizontal Padding**: 20px
- **Vertical Padding**: 12px
- **Gap**: 8px (between icon/label/badge)

### Badge
- **Min Width**: 20px
- **Height**: 20px
- **Padding**: 6px horizontal, 2px vertical
- **Border Radius**: Full (rounded-full)
- **Active Badge**: Blue background (#009fda), white text
- **Inactive Badge**: White background, dark text (#252b37)

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
- ✅ `role="presentation"` on tab wrappers
- ✅ `aria-pressed` indicates active state
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
const [activeTab, setActiveTab] = useState('news');

<div>
  <HorizontalTabs
    tabs={[
      { id: 'news', label: 'News' },
      { id: 'events', label: 'Events' }
    ]}
    defaultActiveTab={activeTab}
    onTabChange={setActiveTab}
  />
  
  <div className="content">
    {activeTab === 'news' && <NewsContent />}
    {activeTab === 'events' && <EventsContent />}
  </div>
</div>
```

### With Dynamic Badges

```tsx
const tabs = [
  { 
    id: 'inbox', 
    label: 'Inbox', 
    badge: unreadCount // Dynamic value
  },
  { 
    id: 'sent', 
    label: 'Sent' 
  }
];

<HorizontalTabs tabs={tabs} />
```

## Related Components

- **Tabs** (ShadCN) - `/components/ui/tabs.tsx` - Generic tab component
- **Breadcrumb** - `/components/ui/breadcrumb.tsx` - Navigation breadcrumbs
- **Navigation Menu** - `/components/ui/navigation-menu.tsx` - Dropdown navigation

## Best Practices

1. ✅ **Unique IDs**: Ensure each tab has a unique `id`
2. ✅ **Meaningful Labels**: Use clear, concise tab labels
3. ✅ **Badge Usage**: Only use badges for notifications/counts
4. ✅ **Icon Consistency**: Use icons consistently across all tabs or none
5. ✅ **Disabled State**: Only disable tabs when necessary (loading/permissions)
6. ✅ **Default Tab**: Always provide a sensible default active tab

## Migration from Old Version

```tsx
// ❌ Old (still works)
<HorizontalTabs
  tabs={[
    { id: 'news', label: 'News' }
  ]}
/>

// ✅ New (with features)
<HorizontalTabs
  tabs={[
    { 
      id: 'news', 
      label: 'News',
      icon: FileText,
      badge: 5
    }
  ]}
/>
```

**Backward Compatible**: All existing code will continue to work without changes.
