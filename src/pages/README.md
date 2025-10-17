# Pages Directory

This directory contains all page-level components (route components) for the application.

## Structure

```
/pages/
├── Home.tsx                    # Main homepage
└── showcase/                   # Showcase pages
    ├── ComponentsShowcase.tsx  # Component library showcase
    ├── FontStylesShowcase.tsx  # Typography showcase
    └── ColorStylesShowcase.tsx # Color system showcase
```

## Design Philosophy

### Pages vs Components

Following React best practices, we maintain a clear separation:

**Pages** (`/pages` directory):
- Route-level components
- Represent entire views/screens
- Handle page-level state and data fetching
- Use URL parameters and routing logic
- Import and compose reusable components

**Components** (`/components` directory):
- Reusable UI building blocks
- Can be used across multiple pages
- Focus on single responsibility
- Receive data via props
- No direct routing logic

## Pages Overview

### Home.tsx
**Route:** `/`
**Description:** Main homepage with sticky header functionality and AI assistant integration.

**Key Features:**
- Sticky header with show/hide on scroll
- Smooth scroll behavior
- AI Assistant integration
- Responsive design

### Showcase Pages

#### ComponentsShowcase.tsx
**Route:** `/components`
**Description:** Interactive showcase of all reusable UI components.

**Sections:**
- Buttons (CustomButton, HeaderNavButton, ShadCN Button)
- Cards (ContentCard, NewsArticleCard, VideoArticleCard, EventCard, LinkCard, NotificationCard)
- Media Components (ImagePlaceholder)
- Layout Components (PageBlockHeader, BannerCarousel, Header, Footer)
- Sidebar Widgets (ContactCard, FileItem, QuickLink, DepartmentBanner, Widgets)
- Navigation (HorizontalTabs, SecondaryTabs, Breadcrumb)
- Form Components (Input, Textarea, Checkbox, Switch, Select, Slider)
- Feedback Components (Alert, Badge, Progress, Skeleton, Tooltip)
- Data Display (Table, Avatar, Separator, Accordion)

#### FontStylesShowcase.tsx
**Route:** `/fonts`
**Description:** Comprehensive typography system showcase.

**Sections:**
- Headings (H1-H6)
- Card Titles (Large and Small variants)
- Body Text (Paragraph Large, Base, Small, Extra Small)
- CSS Variables Reference (Font Families, Sizes, Weights, Line Heights)

#### ColorStylesShowcase.tsx
**Route:** `/colors`
**Description:** Complete color system documentation with interactive copy-to-clipboard functionality.

**Sections:**
- Brand Colors (Primary, Secondary, Accent)
- Neutral Colors (Gray scale, Black, White)
- Blue Palette (50-900)
- Semantic Colors (Background, Foreground, Card, Border, Interactive, Input)
- Status Colors (Success, Warning, Error/Destructive with semantic variants)

## Usage in App.tsx

```tsx
import HomePage from "./pages/Home";
import { ComponentsShowcase } from "./pages/showcase/ComponentsShowcase";
import { FontStylesShowcase } from "./pages/showcase/FontStylesShowcase";
import { ColorStylesShowcase } from "./pages/showcase/ColorStylesShowcase";

// Route mapping
if (currentPath === '/components') return <ComponentsShowcase />;
if (currentPath === '/fonts') return <FontStylesShowcase />;
if (currentPath === '/colors') return <ColorStylesShowcase />;
return <HomePage />;
```

## Shared Page Infrastructure

All showcase pages use the following shared components from `/components/ui`:

### PageTemplate
Provides consistent layout with:
- PageHeader (breadcrumbs + H1 title)
- Proper padding and spacing
- Responsive container

### Showcase System
- `ShowcaseLayout` - Grid layout for sidebar + content
- `ShowcaseSidebar` - Table of contents navigation
- `ShowcaseContent` - Main content area
- `ShowcaseSection` - Individual sections with anchors
- `ShowcaseCard` - Content cards with title/subtitle
- `ShowcaseSectionContent` - Standardized content spacing
- `useShowcaseScroll` - Auto-scroll and active section tracking

## Adding New Pages

1. **Create the page file:**
   ```bash
   touch /pages/NewPage.tsx
   ```

2. **Use standard structure:**
   ```tsx
   import { PageTemplate } from '../components/ui/page-template';
   
   export default function NewPage() {
     return (
       <PageTemplate 
         title="Page Title"
         breadcrumbs={[
           { label: 'Home', href: '/' },
           { label: 'Page Title' }
         ]}
       >
         {/* Page content */}
       </PageTemplate>
     );
   }
   ```

3. **Add route to App.tsx:**
   ```tsx
   import NewPage from "./pages/NewPage";
   
   if (currentPath === '/new-page') return <NewPage />;
   ```

## Import Patterns

### Page imports (from other pages or App.tsx):
```tsx
import HomePage from "./pages/Home";
import { ComponentsShowcase } from "./pages/showcase/ComponentsShowcase";
```

### Component imports (from within pages):
```tsx
// UI Components
import { CustomButton } from '../components/ui/custom-button';
import { PageTemplate } from '../components/ui/page-template';

// Layout Components
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

// Content Data
import { showcaseContent } from '../content/showcase-content';
```

## Best Practices

1. **One page = One route**: Each file should represent a single route/view
2. **Use PageTemplate**: Maintain consistency across pages
3. **Compose components**: Build pages from reusable components
4. **Keep pages thin**: Move complex logic to custom hooks or utility functions
5. **Handle loading states**: Show skeleton screens while loading data
6. **SEO considerations**: Include proper titles and meta information
7. **Accessibility**: Ensure proper heading hierarchy and ARIA labels

## Related Documentation

- [Component System](/components/ui/README.md)
- [Layout Components](/components/layout/README.md)
- [Showcase System](/components/ui/showcase/README.md)
- [Content System](/content/README.md)
