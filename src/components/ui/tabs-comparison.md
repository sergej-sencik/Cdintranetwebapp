# Navigation Tabs Comparison Guide

## Overview

This guide helps you choose the right tab component for your needs.

## Available Tab Components

### 1. HorizontalTabs (Primary Navigation)
**Location**: `/components/ui/horizontal-tabs.tsx`

```tsx
<HorizontalTabs
  tabs={[
    { id: 'news', label: 'News', icon: FileText, badge: 5 },
    { id: 'events', label: 'Events', icon: Calendar }
  ]}
/>
```

**Visual**: Full blue background (#009fda), white active tab, 48px height

**Use for**:
- Main page navigation
- Content section switching
- Prominent navigation areas

---

### 2. SecondaryTabs (Compact Navigation)
**Location**: `/components/ui/secondary-tabs.tsx`

```tsx
<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved', count: 12 }
  ]}
/>
```

**Visual**: Bottom border only, 36px height, gray/blue colors

**Use for**:
- Sidebar widgets
- Compact filtering
- Secondary content areas

---

### 3. Tabs (ShadCN Generic)
**Location**: `/components/ui/tabs.tsx`

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>
```

**Visual**: Rounded tabs, theme colors, content panels

**Use for**:
- Settings pages
- Forms with sections
- Generic tabbed content

---

## Visual Comparison

```
HorizontalTabs (Primary):
┌────────────────────────────────────────────┐
│ ┌────────┐┌────────┐┌────────┐            │
│ │ NEWS 5 ││ EVENTS ││ VIDEOS │            │ ← 48px height
│ └────────┘└────────┘└────────┘            │
└────────────────────────────────────────────┘
  ↑ Blue background, white active tab

SecondaryTabs (Compact):
  ┌────────┐ ┌────────────┐ ┌─────────┐
  │ Recent │ │ Saved (12) │ │ Archive │     ← 36px height
  └────╍───┘ └────────────┘ └─────────┘
       ↑ Blue bottom border for active

Tabs (ShadCN):
┌─────────────────────────────────────┐
│ ⎡ Tab 1 ⎤⎡ Tab 2 ⎤⎡ Tab 3 ⎤       │
│ ⎣────────⎦⎣───────⎦⎣───────⎦       │
│                                     │
│  Content for Tab 1...               │
└─────────────────────────────────────┘
  ↑ Rounded tabs with built-in content panels
```

## Feature Comparison Matrix

| Feature | HorizontalTabs | SecondaryTabs | Tabs (ShadCN) |
|---------|---------------|---------------|---------------|
| **Height** | 48px | 36px | ~40px |
| **Background** | #009fda | Transparent | Muted |
| **Active Indicator** | White fill | Blue bottom border | Background + border |
| **Icons** | ✅ Yes | ❌ No | ✅ Yes (custom) |
| **Badge/Count** | ✅ Badge prop | ✅ Count prop | ❌ No |
| **Disabled State** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Content Panels** | ❌ Manual | ❌ Manual | ✅ Built-in |
| **Best For** | Page sections | Widgets | Settings |

## Color Specifications

### HorizontalTabs
```css
Container: #009fda (Blue)
Active Tab: #ffffff (White bg), #252b37 (Dark text)
Inactive Tab: transparent, #ffffff (White text)
Hover: rgba(255,255,255,0.1)
Badge: #009fda (Active), #ffffff (Inactive)
```

### SecondaryTabs
```css
Container: transparent
Active Tab: #008bbe (Blue text), #0097cf (Bottom border)
Inactive Tab: #717680 (Gray text), no border
Hover: #b8c7ce (Light gray bottom border)
Count: #f5f5f5 (Gray bg), #414651 (Dark text)
```

### Tabs (ShadCN)
```css
Container: var(--muted)
Active Tab: var(--card) background
Inactive Tab: transparent
Hover: subtle background change
```

## Typography Specifications

### HorizontalTabs
- Font: Roboto Medium
- Size: 14px
- Weight: 500
- Transform: Uppercase
- Letter-spacing: 0.28px

### SecondaryTabs
- Font: Roboto Semibold
- Size: 16px
- Weight: 600
- Transform: None
- Letter-spacing: Normal

### Tabs (ShadCN)
- Font: System default
- Size: 14px
- Weight: 500
- Transform: None

## When to Use Which

### Choose HorizontalTabs when:
```
✅ Main navigation for page sections
✅ Need icons with labels
✅ Want prominent, full-width design
✅ Need notification badges
✅ Content has equal importance

Examples:
- News | Events | Videos
- Dashboard | Statistics | Settings
- Inbox | Sent | Drafts
```

### Choose SecondaryTabs when:
```
✅ Inside sidebar widgets
✅ Compact spaces
✅ Need count indicators
✅ Secondary filtering
✅ Don't need icons

Examples:
- Recent | Saved (12)
- My Department | Saved (6)
- Active | Archived
```

### Choose Tabs (ShadCN) when:
```
✅ Need content panels
✅ Settings/configuration pages
✅ Want theme integration
✅ Generic tabbed interface
✅ Form sections

Examples:
- Profile: About | Posts | Photos
- Settings: General | Security | Privacy
- Product: Overview | Specs | Reviews
```

## Code Examples Side-by-Side

```tsx
// HorizontalTabs - For main navigation
import { HorizontalTabs } from './components/ui/horizontal-tabs';
import { FileText, Calendar, Video } from 'lucide-react';

<HorizontalTabs
  tabs={[
    { id: 'news', label: 'News', icon: FileText, badge: 5 },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'videos', label: 'Videos', icon: Video }
  ]}
  defaultActiveTab="news"
  onTabChange={(id) => loadContent(id)}
/>

// SecondaryTabs - For widgets
import { SecondaryTabs } from './components/ui/secondary-tabs';

<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved', count: 12 }
  ]}
  defaultActiveTab="recent"
  onTabChange={(id) => filterContent(id)}
/>

// Tabs (ShadCN) - For content panels
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <OverviewPanel />
  </TabsContent>
  <TabsContent value="details">
    <DetailsPanel />
  </TabsContent>
</Tabs>
```

## Migration Paths

### From Inline Tabs → SecondaryTabs
```tsx
// Before (inline)
<div className="flex gap-3 border-b">
  {tabs.map(tab => (
    <button
      key={tab.id}
      className={active === tab.id ? 'border-b-2' : ''}
      onClick={() => setActive(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>

// After (SecondaryTabs)
<SecondaryTabs
  tabs={tabs}
  defaultActiveTab={active}
  onTabChange={setActive}
/>
```

### From ShadCN Tabs → HorizontalTabs
```tsx
// Before (if you don't need content panels)
<Tabs>
  <TabsList>
    <TabsTrigger value="news">News</TabsTrigger>
  </TabsList>
</Tabs>

// After (for prominent navigation)
<HorizontalTabs
  tabs={[{ id: 'news', label: 'News' }]}
/>
```

## Accessibility Comparison

All three components support:
- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Screen readers

### Keyboard Shortcuts (All)
- `Tab`: Focus next element
- `Shift+Tab`: Focus previous element
- `Enter`/`Space`: Activate tab
- `Arrow Left/Right`: Navigate tabs
- `Home`: First tab
- `End`: Last tab

## Performance Comparison

| Component | Bundle Size | Re-renders | Dependencies |
|-----------|-------------|------------|--------------|
| HorizontalTabs | ~3KB | Minimal | React only |
| SecondaryTabs | ~2KB | Minimal | React only |
| Tabs (ShadCN) | ~5KB | Minimal | Radix UI |

## Browser Support

All components support:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Decision Tree

```
Do you need tabs?
└─ Yes
   ├─ Is it main page navigation?
   │  └─ Yes → HorizontalTabs
   │
   ├─ Is it inside a widget/compact area?
   │  └─ Yes → SecondaryTabs
   │
   └─ Do you need built-in content panels?
      └─ Yes → Tabs (ShadCN)
```

## Quick Reference

| Scenario | Recommended Component |
|----------|----------------------|
| Main page tabs | HorizontalTabs |
| Widget filtering | SecondaryTabs |
| Settings pages | Tabs (ShadCN) |
| With icons | HorizontalTabs |
| With counts | SecondaryTabs |
| Content panels | Tabs (ShadCN) |
| Sidebar | SecondaryTabs |
| Full width | HorizontalTabs |
| Compact | SecondaryTabs |

## Further Reading

- [HorizontalTabs Documentation](./horizontal-tabs.md)
- [SecondaryTabs Documentation](./secondary-tabs.md)
- [Navigation Components Overview](./navigation-components.md)
- [Design System Colors](/docs/COLOR_SYSTEM_MIGRATION.md)

---

**Last Updated**: 2025-10-15
