# Immediate Restructuring Actions

This document provides the exact commands and file operations needed to restructure the project.

## Critical Actions (Do These First)

### 1. Copy JSON Files to New Location
The JSON files are too large to rewrite, so they need to be copied:

```bash
# From /data/ to /content/
cp data/static-content.json content/static.json
cp data/dynamic-content.json content/dynamic.json
```

### 2. Update Import Statements
All files importing from `/data/content-loader` need to import from `/content/loader` or `/content`:

**Find all files with old imports:**
```bash
grep -r "from.*data/content-loader" .
grep -r "from.*data/types" .
```

**Replace:**
- `'./data/content-loader'` → `'./content/loader'` or `'./content'`
- `'../data/content-loader'` → `'../content/loader'` or `'../content'`
- `'../../data/content-loader'` → `'../../content/loader'` or `'../../content'`
- `'./data/types'` → `'./content/types'` or `'./content'`

### 3. Create Archive Folder
Move old/unused files to archive:

```bash
mkdir -p _archive/imports
mkdir -p _archive/components

# Move old imports
mv imports/* _archive/imports/

# Move unused components
mv components/AIAssistant.tsx _archive/components/
mv components/HomeWithStickyHeader.tsx _archive/components/
mv components/ResponsiveHome.tsx _archive/components/
mv components/StickyHeader.tsx _archive/components/
mv components/BannerCarousel.tsx _archive/components/ # Duplicate, keep ui version

# Move old HTML
mv header-navigation.html _archive/
```

### 4. Create Documentation Folder

```bash
mkdir -p docs/content
mkdir -p docs/guidelines

# Move documentation
mv data/README.md docs/content/README.md
mv data/INDEX.md docs/content/INDEX.md
mv data/MIGRATION_GUIDE.md docs/content/MIGRATION_GUIDE.md
mv data/QUICK_REFERENCE.md docs/content/QUICK_REFERENCE.md
mv data/USAGE_EXAMPLES.md docs/content/USAGE_EXAMPLES.md

# Move guidelines
mv guidelines/* docs/guidelines/

# Move root docs
mv FONT_SETUP.md docs/
mv Attributions.md docs/
```

### 5. Create Lib Folder for Utilities

```bash
mkdir -p lib/hooks

# Move utilities
mv components/ui/utils.ts lib/utils.ts
mv components/ui/use-mobile.ts lib/hooks/use-mobile.ts
```

### 6. Organize UI Components into Categories

```bash
# Create UI subfolders
mkdir -p components/ui/forms
mkdir -p components/ui/display
mkdir -p components/ui/navigation
mkdir -p components/ui/overlays
mkdir -p components/ui/feedback
mkdir -p components/ui/data
mkdir -p components/ui/layout
mkdir -p components/ui/media

# Move form components
mv components/ui/button.tsx components/ui/forms/
mv components/ui/input.tsx components/ui/forms/
mv components/ui/textarea.tsx components/ui/forms/
mv components/ui/checkbox.tsx components/ui/forms/
mv components/ui/radio-group.tsx components/ui/forms/
mv components/ui/select.tsx components/ui/forms/
mv components/ui/form.tsx components/ui/forms/
mv components/ui/input-otp.tsx components/ui/forms/
mv components/ui/label.tsx components/ui/forms/
mv components/ui/slider.tsx components/ui/forms/
mv components/ui/switch.tsx components/ui/forms/
mv components/ui/toggle.tsx components/ui/forms/
mv components/ui/toggle-group.tsx components/ui/forms/

# Move display components
mv components/ui/card.tsx components/ui/display/
mv components/ui/badge.tsx components/ui/display/
mv components/ui/avatar.tsx components/ui/display/
mv components/ui/separator.tsx components/ui/display/
mv components/ui/skeleton.tsx components/ui/display/
mv components/ui/aspect-ratio.tsx components/ui/display/

# Move navigation components
mv components/ui/tabs.tsx components/ui/navigation/
mv components/ui/breadcrumb.tsx components/ui/navigation/
mv components/ui/pagination.tsx components/ui/navigation/
mv components/ui/navigation-menu.tsx components/ui/navigation/
mv components/ui/menubar.tsx components/ui/navigation/

# Move overlay components
mv components/ui/dialog.tsx components/ui/overlays/
mv components/ui/sheet.tsx components/ui/overlays/
mv components/ui/drawer.tsx components/ui/overlays/
mv components/ui/popover.tsx components/ui/overlays/
mv components/ui/hover-card.tsx components/ui/overlays/
mv components/ui/tooltip.tsx components/ui/overlays/
mv components/ui/alert-dialog.tsx components/ui/overlays/
mv components/ui/context-menu.tsx components/ui/overlays/
mv components/ui/dropdown-menu.tsx components/ui/overlays/
mv components/ui/command.tsx components/ui/overlays/

# Move feedback components
mv components/ui/alert.tsx components/ui/feedback/
mv components/ui/sonner.tsx components/ui/feedback/
mv components/ui/progress.tsx components/ui/feedback/

# Move data components
mv components/ui/table.tsx components/ui/data/
mv components/ui/chart.tsx components/ui/data/
mv components/ui/calendar.tsx components/ui/data/

# Move layout components
mv components/ui/scroll-area.tsx components/ui/layout/
mv components/ui/resizable.tsx components/ui/layout/
mv components/ui/sidebar.tsx components/ui/layout/
mv components/ui/collapsible.tsx components/ui/layout/
mv components/ui/accordion.tsx components/ui/layout/

# Move media components
mv components/ui/carousel.tsx components/ui/media/
```

### 7. Extract Custom Components

```bash
mkdir -p components/custom

# Move custom (project-specific) components
mv components/ui/custom-button.tsx components/custom/
mv components/ui/header-nav-button.tsx components/custom/
mv components/ui/tab-button.tsx components/custom/
mv components/ui/content-card.tsx components/custom/
mv components/ui/blog-post-card.tsx components/custom/
mv components/ui/notification-card.tsx components/custom/
mv components/ui/page-block-header.tsx components/custom/
mv components/ui/horizontal-tabs.tsx components/custom/
mv components/ui/news-article-card.tsx components/custom/
mv components/ui/video-article-card.tsx components/custom/
mv components/ui/event-card.tsx components/custom/
```

### 8. Organize Feature Components

```bash
mkdir -p components/features/banner
mkdir -p components/features/navigation
mkdir -p components/features/news
mkdir -p components/features/events
mkdir -p components/features/videos

# Move banner
mv components/ui/banner-carousel.tsx components/features/banner/BannerCarousel.tsx
mv components/ui/banner-carousel.md docs/components/

# Move navigation components
mv components/layout/Header.tsx components/features/navigation/
mv components/layout/Footer.tsx components/features/navigation/
mv components/MegaMenu.tsx components/features/navigation/
mv components/MobileNav.tsx components/features/navigation/
mv components/SearchBar.tsx components/features/navigation/

# Move news components
mv components/sections/FeaturedNewsSection.tsx components/features/news/
mv components/NewsTabs.tsx components/features/news/

# Move events
mv components/sections/UpcomingEventsSection.tsx components/features/events/

# Move videos
mv components/sections/LatestVideosSection.tsx components/features/videos/
```

### 9. Create Common Components Folder

```bash
mkdir -p components/common

mv components/figma/ImageWithFallback.tsx components/common/
mv components/NotificationBadge.tsx components/common/
```

### 10. Move Styles

```bash
mkdir -p styles/components

mv components/responsive.css styles/components/
mv components/sticky-header.css styles/components/
```

### 11. Clean Up Empty Folders

```bash
rmdir components/figma
rmdir components/layout
rmdir components/sections
rmdir guidelines
rmdir data
```

## After Manual File Moves

Once files are moved, you'll need to update imports in these key files:

1. **App.tsx** - Update all component imports
2. **All components in /components/features/** - Update cross-references
3. **All components in /components/custom/** - Update UI component imports
4. **All feature sections** - Update content system imports

## Import Update Patterns

### Content System
```tsx
// OLD
import { getNews } from '../data/content-loader';
import type { NewsArticle } from '../data/types';

// NEW
import { getNews, type NewsArticle } from '../content';
// or
import { getNews } from '../content/loader';
import type { NewsArticle } from '../content/types';
```

### UI Components (now organized)
```tsx
// OLD
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

// NEW
import { Button } from './components/ui/forms/button';
import { Card } from './components/ui/display/card';

// BEST (with barrel exports)
import { Button } from './components/ui/forms';
import { Card } from './components/ui/display';
```

### Custom Components
```tsx
// OLD
import { CustomButton } from './components/ui/custom-button';

// NEW
import { CustomButton } from './components/custom/custom-button';
// or with barrel export
import { CustomButton } from './components/custom';
```

### Features
```tsx
// OLD
import { Header } from './components/layout/Header';
import { FeaturedNewsSection } from './components/sections/FeaturedNewsSection';

// NEW
import { Header } from './components/features/navigation/Header';
import { FeaturedNewsSection } from './components/features/news/FeaturedNewsSection';

// BEST (with barrel exports)
import { Header } from './components/features/navigation';
import { FeaturedNewsSection } from './components/features/news';
```

### Utilities
```tsx
// OLD
import { cn } from './components/ui/utils';
import { useMobile } from './components/ui/use-mobile';

// NEW
import { cn } from './lib/utils';
import { useMobile } from './lib/hooks/use-mobile';

// BEST (with barrel exports)
import { cn } from './lib';
import { useMobile } from './lib/hooks';
```

## Verification Checklist

After restructuring:

- [ ] All TypeScript files compile without errors
- [ ] No broken imports
- [ ] App runs successfully
- [ ] All features work as before
- [ ] Documentation is accessible
- [ ] Old `/data/` folder removed
- [ ] Archive folder contains old files

## Creating Barrel Exports (index.ts)

Each organized folder should have an `index.ts` that re-exports all components:

```tsx
// components/ui/forms/index.ts
export { Button } from './button';
export { Input } from './input';
export { Textarea } from './textarea';
// ... etc

// components/custom/index.ts
export { CustomButton } from './custom-button';
export { NewsArticleCard } from './news-article-card';
// ... etc

// components/features/navigation/index.ts
export { Header } from './Header';
export { Footer } from './Footer';
export { MegaMenu } from './MegaMenu';
// ... etc

// lib/index.ts
export * from './utils';

// lib/hooks/index.ts
export { useMobile } from './use-mobile';
```

## Priority Order

1. **CRITICAL**: Copy JSON files, update content system imports
2. **HIGH**: Archive old files, create docs folder
3. **MEDIUM**: Organize UI components, extract custom components
4. **LOW**: Create barrel exports for cleaner imports

---

**Note**: This is a major restructuring. Consider doing it in phases or creating a new branch first.
