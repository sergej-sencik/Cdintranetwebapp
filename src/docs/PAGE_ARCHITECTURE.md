# Page Architecture & Component System

## Overview

This document describes the refactored page architecture with semantic naming conventions and reusable layout components.

## Semantic Section Naming

### Before vs After

| Old Name | New Name | Purpose |
|----------|----------|---------|
| `Main()` | `NotificationsSection()` | Notifications, welcome header, hero banner |
| `Section()` | `QuickLinksSection()` | User's personalized quick access links |
| `Main1()` | `MainContentSection()` | Featured news, events, and videos |
| `HeaderSection()` | `WelcomeHeader()` | Welcome message with date |
| `Container2()` | `HeroBannerGrid()` | Hero banner carousel and news preview grid |

## Reusable Layout Components

### PageContainer

Provides consistent max-width and responsive padding across all pages.

```tsx
import { PageContainer } from "../components/layout";

<PageContainer>
  <YourContent />
</PageContainer>
```

**Props:**
- `children`: React.ReactNode (required)
- `maxWidth`: string (default: "1280px")
- `className`: string (optional)

**Responsive padding:**
- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

### ContentGrid

Flexible responsive grid layout with predefined patterns.

```tsx
import { ContentGrid } from "../components/layout";

<ContentGrid cols="2">
  <div>Column 1</div>
  <div>Column 2</div>
</ContentGrid>
```

**Props:**
- `children`: React.ReactNode (required)
- `cols`: "2" | "3" | "auto" (default: "auto")
- `className`: string (optional)

**Grid patterns:**
- `"2"`: 1 column mobile → 2 columns desktop
- `"3"`: 1 column mobile → 2 columns tablet → 3 columns desktop
- `"auto"`: 1 column mobile → custom layout desktop (2fr 1fr)

**Responsive gaps:**
- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

### SectionHeader

Standardized header for page sections with optional actions or tabs.

```tsx
import { SectionHeader } from "../components/layout";

// With actions
<SectionHeader 
  title="Featured News"
  actions={<Button>View All</Button>}
/>

// With tabs
<SectionHeader 
  title="Content Sections"
  tabs={[
    { id: "news", label: "News" },
    { id: "events", label: "Events" }
  ]}
/>
```

**Props:**
- `title`: string (required)
- `actions`: React.ReactNode (optional)
- `tabs`: Array<{ id: string, label: string }> (optional)
- `className`: string (optional)

## Responsive Utilities

### Section Spacing Classes

Use these utility classes for consistent vertical spacing across breakpoints:

- `.section-spacing-y-sm`: Small section spacing (2rem → 3rem → 4rem)
- `.section-spacing-y-md`: Medium section spacing (3rem → 4rem → 5rem)
- `.section-spacing-y-lg`: Large section spacing (4rem → 5rem → 6rem)
- `.section-spacing-y-xl`: Extra large section spacing (5rem → 6rem → 8rem)

### Container Utilities

- `.container-padding-responsive`: Responsive horizontal padding (1rem → 1.5rem → 2rem)
- `.gap-responsive`: Responsive gap spacing (1rem → 1.5rem → 2rem)

## Page Structure Example

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <GlobalHeader notificationCount={4} />
      
      <NotificationsSection />
      <QuickLinksSection />  
      <MainContentSection />
      
      <GlobalFooter />
    </main>
  );
}
```

## Homepage Sections

### 1. NotificationsSection

**Purpose:** Display important notifications, welcome message, and hero content

**Contains:**
- Notification alerts
- Welcome header with date
- Hero banner carousel
- News preview cards

**Responsive behavior:**
- Mobile: Stacked layout with 24px top padding
- Tablet: Stacked layout with 32px top padding
- Desktop: Grid layout with -22px negative margin (header spacing fix)

### 2. QuickLinksSection

**Purpose:** User's personalized quick access links

**Contains:**
- Section header with "Edit" action
- Grid of quick link cards

**Responsive behavior:**
- Consistent 64px vertical padding across all breakpoints
- Cards reflow based on viewport width

### 3. MainContentSection

**Purpose:** Featured content including news, events, and videos

**Contains:**
- Featured news articles
- Upcoming events
- Latest videos
- Tabbed navigation for content types

**Responsive behavior:**
- Light blue background (#f2fbff)
- 80px vertical padding
- Content cards adapt to viewport width

## Benefits of New Architecture

✅ **Semantic naming** - Component names clearly describe their purpose
✅ **Reusable components** - PageContainer, ContentGrid, SectionHeader can be used across pages
✅ **Consistent spacing** - Responsive utility classes ensure design system compliance
✅ **Better accessibility** - Semantic HTML (main, section) with aria-labels
✅ **Scalability** - Foundation ready for multi-page development
✅ **Developer experience** - Clear component hierarchy and documentation
✅ **Maintainability** - Changes to layout patterns can be made in one place

## Migration Guide

When creating new pages:

1. Use semantic section names (e.g., `HeroSection`, `FeaturesSection`)
2. Wrap content in `<PageContainer>` for consistent max-width and padding
3. Use `<ContentGrid>` for responsive layouts
4. Use `<SectionHeader>` for section titles
5. Apply responsive spacing utilities (`.section-spacing-y-*`)
6. Use semantic HTML (`<main>`, `<section>`, `<article>`)
7. Add appropriate `aria-label` attributes for accessibility

## File Locations

- Layout components: `/components/layout/`
  - `PageContainer.tsx`
  - `ContentGrid.tsx`
  - `SectionHeader.tsx`
  
- CSS utilities: `/styles/globals.css`
  - `.section-spacing-y-*` classes
  - `.container-padding-responsive`
  - `.gap-responsive`

- Homepage: `/imports/Home-1-22881.tsx`
  - `NotificationsSection()`
  - `QuickLinksSection()`
  - `MainContentSection()`

## Next Steps

Future enhancements to consider:

- [ ] Extract more reusable components from sections
- [ ] Create page templates for common layouts
- [ ] Add animation/transition utilities
- [ ] Implement loading states for dynamic content
- [ ] Create showcase page demonstrating all layout components
