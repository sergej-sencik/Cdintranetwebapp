# Showcase Components System

## Overview

Global reusable component system for showcase pages (Components, Font Styles, Color Styles). Provides consistent layout, navigation, and content presentation across all showcase/reference pages.

## Components

### 1. PageHeader
**File**: `/components/ui/page-header.tsx`

Simple page header with breadcrumb navigation and H1 title. Used in PageTemplate and can be used in other page template variants.

```tsx
import { PageHeader } from './components/ui/showcase';

<PageHeader 
  title="Components" 
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Showcase', href: '/showcase' },
    { label: 'Components' }
  ]}
/>
```

**Props:**
- `title` (string) - Page title (H1)
- `breadcrumbs` (BreadcrumbItemType[], optional) - Breadcrumb navigation items
- `className` (string, optional) - Additional class name for the container

**BreadcrumbItemType:**
- `label` (string) - Breadcrumb label text
- `href` (string, optional) - Link URL (if not provided, renders as current page)

### 2. PageTemplate
**File**: `/components/ui/page-template.tsx`

Universal page template component providing consistent layout for all standard pages with header navigation, breadcrumb navigation, H1 page title, proper padding and spacing, and optional Footer and AI Assistant.

```tsx
import { PageTemplate } from './components/ui/showcase';

<PageTemplate 
  title="Components" 
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Showcase', href: '/showcase' },
    { label: 'Components' }
  ]}
>
  <YourContent />
</PageTemplate>
```

**Props:**
- `title` (string) - Page title (H1)
- `breadcrumbs` (BreadcrumbItemType[], optional) - Breadcrumb navigation items
- `children` (ReactNode) - Page content
- `className` (string, optional) - Additional class name for the content wrapper
- `backgroundColor` (string, optional) - Background color class (default: bg-background-subtle)
- `includeFooter` (boolean, optional) - Whether to include the Footer component (default: true)
- `includeAIAssistant` (boolean, optional) - Whether to include the AI Assistant component (default: true)

### 3. ShowcaseSidebar
**File**: `/components/ui/showcase-sidebar.tsx`

Sticky sidebar navigation with active state management.

```tsx
import { ShowcaseSidebar } from './components/ui/showcase';

<ShowcaseSidebar
  title="Font Styles"
  sections={sections}
  activeSection={activeSection}
  onSectionClick={scrollToSection}
/>
```

**Props:**
- `title` (string) - Sidebar header title
- `sections` (ShowcaseSidebarItem[]) - Navigation items
- `activeSection` (string) - Currently active section ID
- `onSectionClick` ((id: string) => void) - Section click handler

### 4. ShowcaseLayout
**File**: `/components/ui/showcase-layout.tsx`

Wrapper layout with consistent container and flexbox setup.

```tsx
import { ShowcaseLayout } from './components/ui/showcase';

<ShowcaseLayout>
  <ShowcaseSidebar />
  <ShowcaseContent />
</ShowcaseLayout>
```

### 5. ShowcaseHeader
**File**: `/components/ui/showcase-header.tsx`

Page header with title and description.

```tsx
import { ShowcaseHeader } from './components/ui/showcase';

<ShowcaseHeader
  title="Font Styles Reference"
  description="Complete typography system documentation"
/>
```

### 6. ShowcaseSection
**File**: `/components/ui/showcase-section.tsx`

Section component with consistent spacing and headers.

```tsx
import { ShowcaseSection } from './components/ui/showcase';

<ShowcaseSection
  id="headings"
  title="Headings (H1-H6)"
  description="Typography hierarchy for headings"
>
  <div>{/* Content */}</div>
</ShowcaseSection>
```

### 7. ShowcaseCard
**File**: `/components/ui/showcase-card.tsx`

Card component for displaying examples.

```tsx
import { ShowcaseCard } from './components/ui/showcase';

<ShowcaseCard
  title="H1 - Main Page Title"
  subtitle="CD Fedra Pro • 48px • Medium (500) • 1.2"
>
  <h1 className="text-h1">Example</h1>
</ShowcaseCard>
```

**Props:**
- `title` (string, optional) - Card header
- `subtitle` (string, optional) - Specifications/metadata
- `children` (ReactNode) - Card content
- `noPadding` (boolean, optional) - Remove default padding

### 8. ShowcaseSectionContent
**File**: `/components/ui/showcase-section-content.tsx`

Content wrapper component with standardized 32px (space-y-8) vertical spacing between child elements. Used inside ShowcaseSection components to maintain consistent spacing.

```tsx
import { ShowcaseSectionContent } from './components/ui/showcase';

<ShowcaseSection id="colors" title="Colors">
  <ShowcaseSectionContent>
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
  </ShowcaseSectionContent>
</ShowcaseSection>
```

**Props:**
- `children` (ReactNode) - Content items with automatic spacing

### 9. ShowcaseContent
**File**: `/components/ui/showcase-content.tsx`

Main content area wrapper with spacing.

```tsx
import { ShowcaseContent } from './components/ui/showcase';

<ShowcaseContent>
  <ShowcaseHeader />
  <ShowcaseSection>...</ShowcaseSection>
</ShowcaseContent>
```

### 10. ShowcaseColorCard
**File**: `/components/ui/showcase-color-card.tsx`

Specialized card for color swatches with copy functionality.

```tsx
import { ShowcaseColorCard } from './components/ui/showcase';

<ShowcaseColorCard
  name="Brand Primary"
  cssVar="--color-brand-primary"
  value="#009FDA"
  copiedColor={copiedColor}
  onCopy={copyToClipboard}
/>
```

### 11. useShowcaseScroll (Hook)
**File**: `/components/ui/use-showcase-scroll.ts`

Custom hook for scroll-to-section functionality.

```tsx
import { useShowcaseScroll } from './components/ui/showcase';

const { activeSection, scrollToSection } = useShowcaseScroll('initial-section');
```

**Returns:**
- `activeSection` (string) - Currently active section
- `scrollToSection` ((id: string) => void) - Scroll handler

## Data Structure

**File**: `/content/showcase-content.ts`

Centralized data for all showcase pages.

```tsx
import { showcaseContent } from '../content/showcase-content';

// Access font styles data
const { title, description, sections } = showcaseContent.fontStyles;

// Access color styles data
const { title, description, sections } = showcaseContent.colorStyles;

// Access components data
const { title, description, sections } = showcaseContent.components;
```

## Usage Examples

### Complete Showcase Page

```tsx
import * as React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseHeader, 
  ShowcaseSection,
  ShowcaseCard,
  useShowcaseScroll 
} from './ui/showcase';
import { showcaseContent } from '../content/showcase-content';

export function MyShowcase() {
  const { activeSection, scrollToSection } = useShowcaseScroll('section1');
  const { title, description, sections } = showcaseContent.myShowcase;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ShowcaseLayout>
        <ShowcaseSidebar
          title="My Showcase"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <ShowcaseContent>
          <ShowcaseHeader 
            title={title} 
            description={description} 
          />

          <ShowcaseSection
            id="section1"
            title="Section Title"
            description="Section description"
          >
            <div className="space-y-8">
              <ShowcaseCard
                title="Example"
                subtitle="Specifications here"
              >
                <p>Example content</p>
              </ShowcaseCard>
            </div>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>

      <Footer />
    </div>
  );
}
```

### With Color Cards

```tsx
const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

const copyToClipboard = (colorVar: string, colorValue: string) => {
  navigator.clipboard.writeText(colorValue);
  setCopiedColor(colorVar);
  setTimeout(() => setCopiedColor(null), 2000);
};

<ShowcaseSection id="colors" title="Colors">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ShowcaseColorCard
      name="Primary"
      cssVar="--color-primary"
      value="#009FDA"
      copiedColor={copiedColor}
      onCopy={copyToClipboard}
    />
  </div>
</ShowcaseSection>
```

## Design Specifications

### Layout
- **Container**: max-w-7xl (1280px)
- **Container Padding**: 1rem (16px)
- **Vertical Spacing**: 3rem (48px)
- **Sidebar Width**: 16rem (256px)
- **Gap**: 2rem (32px)

### Sidebar
- **Position**: Sticky (top: 6rem/96px)
- **Background**: White
- **Border**: 1px solid border color
- **Border Radius**: var(--radius-lg) (8px)
- **Padding**: 1.5rem (24px)
- **Active Item**: bg-primary, text-primary-foreground
- **Inactive Item**: text-foreground-muted, hover:bg-muted

### Section Spacing
- **Section Margin**: 3rem (48px) between sections
- **Section Internal**: space-y-6 (1.5rem/24px)
- **Card Spacing**: space-y-8 (2rem/32px)

### Typography
- **Page Title**: text-h1 (48px, CD Fedra Pro)
- **Page Description**: text-p-large (20px, Roboto)
- **Section Title**: text-h2 (30px, CD Fedra Pro)
- **Section Description**: text-foreground-muted
- **Card Title**: text-base (16px)
- **Card Subtitle**: text-sm, code style

## Component Hierarchy

```
PageTemplate (Full page wrapper with Header/Footer)
└── PageHeader (Breadcrumbs + H1 title)
└── Page Content:
    ShowcaseLayout
    ├── ShowcaseSidebar
    │   └── Navigation items with active states
    └── ShowcaseContent
        ├── ShowcaseHeader (Page title + description) [DEPRECATED - use PageTemplate title]
        └── ShowcaseSection (Repeatable)
            └── ShowcaseSectionContent (Spacing wrapper)
                └── ShowcaseCard | ShowcaseColorCard (Examples)
```

### Template Variants

**PageHeader** can be reused in other page template types:
- `PageTemplate` (current) - Simple breadcrumb + title header
- `PageTemplateWithActions` (future) - Header with action buttons
- `PageTemplateWithTabs` (future) - Header with tab navigation
- `PageTemplateWithSearch` (future) - Header with search bar

## Pages Using This System

1. **FontStylesShowcase** (`/components/FontStylesShowcase.tsx`)
   - Typography reference
   - Font families, sizes, weights, line heights
   - Headings, body text, card titles

2. **ColorStylesShowcase** (`/components/ColorStylesShowcase.tsx`)
   - Color palette reference
   - Brand, neutral, blue, semantic, status colors
   - Copy-to-clipboard functionality

3. **ComponentsShowcase** (`/components/ComponentsShowcase.tsx`)
   - Component library reference
   - Buttons, cards, forms, navigation, etc.
   - Live component examples

## Migration Guide

### From Custom Layout to Showcase Components

**Before:**
```tsx
<div className="container mx-auto px-4 py-12 max-w-7xl">
  <div className="flex gap-8">
    <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
      <div className="bg-white rounded-lg border p-6">
        <h2>Navigation</h2>
        <nav>...</nav>
      </div>
    </aside>
    <main className="flex-1 space-y-12">
      <h1>Title</h1>
      <section>...</section>
    </main>
  </div>
</div>
```

**After:**
```tsx
<ShowcaseLayout>
  <ShowcaseSidebar title="Navigation" sections={sections} {...props} />
  <ShowcaseContent>
    <ShowcaseHeader title="Title" description="..." />
    <ShowcaseSection>...</ShowcaseSection>
  </ShowcaseContent>
</ShowcaseLayout>
```

### From Custom Cards to ShowcaseCard

**Before:**
```tsx
<div className="bg-white rounded-lg border border-border p-6">
  <div className="mb-4">
    <h3 className="text-base mb-1">Title</h3>
    <code className="text-sm">Subtitle</code>
  </div>
  <div>Content</div>
</div>
```

**After:**
```tsx
<ShowcaseCard title="Title" subtitle="Subtitle">
  <div>Content</div>
</ShowcaseCard>
```

## Best Practices

1. ✅ **Use data from `/content/showcase-content.ts`** - No hardcoded strings
2. ✅ **Consistent spacing** - Use the built-in spacing utilities
3. ✅ **Unique section IDs** - For scroll-to functionality
4. ✅ **Responsive design** - Sidebar hides on mobile (lg:block)
5. ✅ **Accessible** - Semantic HTML, proper headings
6. ✅ **Reusable** - Extract common patterns into components

## Styling

All components use:
- Design system colors (var(--color-*))
- Design system spacing (tailwind utilities)
- Design system typography (text-h1, text-h2, etc.)
- Design system borders and shadows

## Accessibility

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Screen reader friendly

## Future Enhancements

- [ ] Mobile navigation (hamburger menu)
- [ ] Search functionality
- [ ] Filter/sort options
- [ ] Print stylesheet
- [ ] Export functionality
- [ ] Dark mode support

---

**Last Updated**: 2025-10-15
**Version**: 1.0.0
**Status**: Production Ready ✅
