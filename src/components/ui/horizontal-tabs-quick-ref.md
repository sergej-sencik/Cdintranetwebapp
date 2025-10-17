# HorizontalTabs - Quick Reference Card

## Import
```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';
import { Bell, Calendar, FileText } from 'lucide-react';
```

## Basic Usage
```tsx
<HorizontalTabs
  tabs={[
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Details' }
  ]}
  defaultActiveTab="tab1"
/>
```

## All Features
```tsx
<HorizontalTabs
  tabs={[
    { 
      id: 'alerts', 
      label: 'Alerts', 
      icon: Bell,      // Optional icon
      badge: 5         // Optional badge
    },
    { 
      id: 'archived', 
      label: 'Archived', 
      disabled: true   // Optional disable
    }
  ]}
  defaultActiveTab="alerts"
  onTabChange={(id) => console.log(id)}
/>
```

## Props Reference

### Tab Object
```tsx
{
  id: string;              // Required: unique ID
  label: string;           // Required: display text
  icon?: LucideIcon;       // Optional: from lucide-react
  badge?: number | string; // Optional: notification count
  disabled?: boolean;      // Optional: disable interaction
}
```

### HorizontalTabs Props
```tsx
{
  tabs: Tab[];                      // Required: array of tabs
  defaultActiveTab?: string;        // Optional: initial active tab ID
  onTabChange?: (id: string) => void; // Optional: callback
  className?: string;               // Optional: additional classes
}
```

## Keyboard Shortcuts
- `←` Previous tab
- `→` Next tab  
- `Home` First tab
- `End` Last tab

## States
- **Default**: Transparent bg, white text
- **Hover**: White overlay (10% opacity)
- **Active**: White bg, dark text
- **Disabled**: 50% opacity, non-interactive

## Colors
- Container: `#009fda`
- Active: `#ffffff` bg, `#252b37` text
- Inactive: transparent bg, `#ffffff` text

## Common Patterns

### Content Switching
```tsx
const [active, setActive] = useState('news');

<HorizontalTabs
  tabs={tabs}
  defaultActiveTab={active}
  onTabChange={setActive}
/>
<div>
  {active === 'news' && <NewsContent />}
  {active === 'events' && <EventsContent />}
</div>
```

### Dynamic Badges
```tsx
const tabs = [
  { id: 'inbox', label: 'Inbox', badge: unreadCount },
  { id: 'sent', label: 'Sent' }
];
```

## See Also
- Full Docs: `/components/ui/horizontal-tabs.md`
- Demo: `/components/ui/horizontal-tabs-demo.tsx`
- Showcase: `/components/ComponentsShowcase.tsx` (line ~602)
