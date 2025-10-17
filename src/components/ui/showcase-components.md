# Showcase Components Documentation

## Category: Layout & Content Presentation

**Location**: `/components/ui/showcase/`

## Overview

The Showcase Components system provides reusable building blocks for creating consistent reference and documentation pages. Used across ComponentsShowcase, FontStylesShowcase, and ColorStylesShowcase.

---

## Components

### ShowcaseSidebar

**Purpose**: Sticky sidebar navigation for showcase pages

**Props**:
```typescript
{
  title: string;                    // Sidebar header
  sections: ShowcaseSidebarItem[];  // Navigation items
  activeSection: string;             // Current active section
  onSectionClick: (id: string) => void; // Click handler
  className?: string;                // Additional classes
}
```

**Example**:
```tsx
<ShowcaseSidebar
  title="Font Styles"
  sections={[
    { id: 'headings', label: 'Headings (H1-H6)' },
    { id: 'body-text', label: 'Body Text' }
  ]}
  activeSection="headings"
  onSectionClick={(id) => scrollTo(id)}
/>
```

**States**:
- Active: Blue background, white text
- Inactive: Gray text, transparent background
- Hover: Light gray background

**Responsive**: Hidden below lg breakpoint (1024px)

---

### ShowcaseLayout

**Purpose**: Container wrapper with consistent max-width and flex layout

**Props**:
```typescript
{
  children: ReactNode;  // Content (Sidebar + Content)
  className?: string;   // Additional classes
}
```

**Example**:
```tsx
<ShowcaseLayout>
  <ShowcaseSidebar {...} />
  <ShowcaseContent {...} />
</ShowcaseLayout>
```

**Layout**:
- Max width: 1280px
- Padding: 16px
- Flex gap: 32px
- Responsive: Full width on mobile

---

### ShowcaseHeader

**Purpose**: Page title and description

**Props**:
```typescript
{
  title: string;        // Page title (H1)
  description: string;  // Description text
  className?: string;   // Additional classes
}
```

**Example**:
```tsx
<ShowcaseHeader
  title="Font Styles Reference"
  description="Complete typography system documentation"
/>
```

**Typography**:
- Title: text-h1 (48px, CD Fedra Pro)
- Description: text-p-large (20px, Roboto)

---

### ShowcaseSection

**Purpose**: Section wrapper with title and description

**Props**:
```typescript
{
  id: string;            // Section ID (for scroll-to)
  title: string;         // Section title (H2)
  description?: string;  // Optional description
  children: ReactNode;   // Section content
  className?: string;    // Additional classes
}
```

**Example**:
```tsx
<ShowcaseSection
  id="headings"
  title="Headings (H1-H6)"
  description="Typography hierarchy"
>
  <div className="space-y-8">
    {/* Content */}
  </div>
</ShowcaseSection>
```

**Spacing**: space-y-6 (24px internal spacing)

---

### ShowcaseCard

**Purpose**: Display card for examples and content

**Props**:
```typescript
{
  title?: string;       // Card title
  subtitle?: string;    // Specifications/metadata
  children: ReactNode;  // Card content
  noPadding?: boolean;  // Remove default padding
  className?: string;   // Additional classes
}
```

**Example**:
```tsx
<ShowcaseCard
  title="H1 - Main Page Title"
  subtitle="CD Fedra Pro • 48px • Medium (500) • 1.2"
>
  <h1 className="text-h1">Example</h1>
  <code>{'<h1 className="text-h1">...</h1>'}</code>
</ShowcaseCard>
```

**Styling**:
- Background: White
- Border: 1px solid
- Border radius: 8px
- Padding: 24px (unless noPadding=true)
- Hover: Shadow transition

---

### ShowcaseContent

**Purpose**: Main content area wrapper

**Props**:
```typescript
{
  children: ReactNode;  // Content sections
  className?: string;   // Additional classes
}
```

**Example**:
```tsx
<ShowcaseContent>
  <ShowcaseHeader {...} />
  <ShowcaseSection {...} />
  <ShowcaseSection {...} />
</ShowcaseContent>
```

**Spacing**: space-y-12 (48px between sections)

---

### ShowcaseColorCard

**Purpose**: Color swatch card with copy functionality

**Props**:
```typescript
{
  name: string;          // Color name
  cssVar: string;        // CSS variable name
  value: string;         // Hex/RGB value
  textColor?: string;    // Text color class
  copiedColor: string | null; // Currently copied color
  onCopy: (cssVar, value) => void; // Copy handler
  className?: string;    // Additional classes
}
```

**Example**:
```tsx
const [copiedColor, setCopiedColor] = useState<string | null>(null);

const copyToClipboard = (cssVar: string, value: string) => {
  navigator.clipboard.writeText(value);
  setCopiedColor(cssVar);
  setTimeout(() => setCopiedColor(null), 2000);
};

<ShowcaseColorCard
  name="Brand Primary"
  cssVar="--color-brand-primary"
  value="#009FDA"
  copiedColor={copiedColor}
  onCopy={copyToClipboard}
/>
```

**Features**:
- Color preview (96px height)
- Copy button with success state
- Hover shadow effect
- Supports light/dark text

---

## Hooks

### useShowcaseScroll

**Purpose**: Manage scroll-to-section and active state

**Parameters**:
```typescript
(
  initialSection: string,   // Initial active section
  scrollOffset?: number     // Offset from top (default: -100)
)
```

**Returns**:
```typescript
{
  activeSection: string;                 // Currently active section
  scrollToSection: (id: string) => void; // Scroll handler
}
```

**Example**:
```tsx
const { activeSection, scrollToSection } = useShowcaseScroll('headings', -100);

<ShowcaseSidebar
  activeSection={activeSection}
  onSectionClick={scrollToSection}
  {...}
/>
```

**Behavior**:
- Updates activeSection state
- Smooth scrolls to element
- Accounts for sticky headers

---

## Data Structure

### Location
`/content/showcase-content.ts`

### Interface
```typescript
interface ShowcaseSection {
  id: string;
  label: string;
  items?: string[];
}

interface ShowcasePageData {
  title: string;
  description: string;
  sections: ShowcaseSection[];
}

const showcaseContent = {
  meta: {
    version: string;
    lastUpdated: string;
    description: string;
  },
  components: ShowcasePageData,
  fontStyles: ShowcasePageData,
  colorStyles: ShowcasePageData
}
```

### Usage
```tsx
import { showcaseContent } from '../content/showcase-content';

const { title, description, sections } = showcaseContent.fontStyles;
```

---

## Design Specifications

### Colors
- **Sidebar Active**: var(--primary)
- **Sidebar Active Text**: var(--primary-foreground)
- **Sidebar Inactive**: var(--foreground-muted)
- **Sidebar Hover**: var(--muted)
- **Card Background**: var(--background) / white
- **Card Border**: var(--border)

### Spacing
- **Container Max Width**: 1280px
- **Container Padding**: 16px
- **Section Spacing**: 48px
- **Card Spacing**: 32px
- **Internal Spacing**: 24px

### Typography
- **Page Title**: text-h1 (48px)
- **Page Description**: text-p-large (20px)
- **Section Title**: text-h2 (30px)
- **Section Description**: text-foreground-muted
- **Card Title**: text-base (16px)
- **Card Subtitle**: text-sm

### Responsive
- **Desktop (lg+)**: Sidebar visible, full layout
- **Tablet/Mobile**: Sidebar hidden, content full-width
- **Breakpoint**: 1024px (lg)

---

## Complete Example

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

export function MyShowcasePage() {
  const { activeSection, scrollToSection } = useShowcaseScroll('first');
  const { title, description, sections } = showcaseContent.myPage;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ShowcaseLayout>
        {/* Sidebar Navigation */}
        <ShowcaseSidebar
          title="My Page"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        {/* Main Content */}
        <ShowcaseContent>
          {/* Page Header */}
          <ShowcaseHeader 
            title={title} 
            description={description} 
          />

          {/* Section 1 */}
          <ShowcaseSection
            id="first"
            title="First Section"
            description="Section description here"
          >
            <div className="space-y-8">
              <ShowcaseCard
                title="Example 1"
                subtitle="Specifications"
              >
                <p>Example content</p>
                <code>{'<example />'}</code>
              </ShowcaseCard>

              <ShowcaseCard title="Example 2">
                <p>More content</p>
              </ShowcaseCard>
            </div>
          </ShowcaseSection>

          {/* Section 2 */}
          <ShowcaseSection
            id="second"
            title="Second Section"
          >
            <ShowcaseCard title="Example 3">
              <p>Content here</p>
            </ShowcaseCard>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>

      <Footer />
    </div>
  );
}
```

---

## Best Practices

1. ✅ **Use data from `/content/showcase-content.ts`** - No hardcoded strings
2. ✅ **Unique section IDs** - For scroll-to functionality
3. ✅ **Consistent spacing** - Use built-in spacing (space-y-*)
4. ✅ **Semantic HTML** - Proper heading hierarchy
5. ✅ **Responsive design** - Test at all breakpoints
6. ✅ **Accessibility** - ARIA labels, keyboard nav
7. ✅ **Type safety** - Use TypeScript interfaces

## Related Components

- **Header** - `/components/layout/Header.tsx`
- **Footer** - `/components/layout/Footer.tsx`
- **HorizontalTabs** - `/components/ui/horizontal-tabs.tsx`
- **SecondaryTabs** - `/components/ui/secondary-tabs.tsx`

## See Also

- [Showcase System README](/components/ui/showcase/README.md)
- [Complete Implementation](/SHOWCASE_SYSTEM_COMPLETE.md)
- [Design System Colors](/docs/COLOR_SYSTEM_MIGRATION.md)

---

**Category**: Layout & Content Presentation  
**Status**: Production Ready ✅  
**Version**: 1.0.0  
**Last Updated**: 2025-10-15
