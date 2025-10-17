# Project Restructuring Status

## ✅ Completed Phases

### Phase 1: Content System - COMPLETE
- ✅ Created `/content/` folder
- ✅ Created `/content/types.ts` (copied from `/data/types.ts`)
- ✅ Created `/content/loader.ts` (renamed from `content-loader.ts` with updated imports)
- ✅ Created `/content/static.json` (copied from `/data/static-content.json`)
- ✅ Created `/content/dynamic.json` (copied from `/data/dynamic-content.json`)
- ✅ Created `/content/index.ts` (barrel export)

**Next Actions:**
- Delete old `/data/` folder after verifying imports are updated
- Update all imports from `data/content-loader` to `content` or `content/loader`

## 🚧 In Progress

### Critical Updates Needed
The following files likely import from the old `/data/` location and need updating:

**Potential imports to update:**
1. `/App.tsx` - May import content loader
2. `/components/layout/Header.tsx` - May use user data
3. `/components/layout/Footer.tsx` - May use footer content  
4. `/components/sections/FeaturedNewsSection.tsx` - Uses news content
5. `/components/sections/LatestVideosSection.tsx` - Uses video content
6. `/components/sections/UpcomingEventsSection.tsx` - Uses events content
7. `/components/ui/banner-carousel.tsx` - Uses banner content

**Update pattern:**
```tsx
// OLD
import { getNews } from '../data/content-loader';
import type { NewsArticle } from '../data/types';

// NEW - Option 1 (recommended)
import { getNews, type NewsArticle } from '../content';

// NEW - Option 2 (explicit)
import { getNews } from '../content/loader';
import type { NewsArticle } from '../content/types';
```

## 📋 Pending Phases

### Phase 2: Documentation (Ready to Execute)
Create `/docs/` folder structure:
```
/docs/
├── README.md (project overview)
├── FONT_SETUP.md
├── Attributions.md
├── content/
│   ├── README.md
│   ├── INDEX.md
│   ├── MIGRATION_GUIDE.md
│   ├── QUICK_REFERENCE.md
│   └── USAGE_EXAMPLES.md
├── components/
│   └── banner-carousel.md
└── guidelines/
    ├── Guidelines.md
    ├── ContentCardSystem.md
    ├── BlogPostCardSystem.md
    └── BorderRadiusSystem.md
```

**Files to move:**
- `/data/*.md` → `/docs/content/`
- `/guidelines/*.md` → `/docs/guidelines/`
- `/FONT_SETUP.md` → `/docs/`
- `/Attributions.md` → `/docs/`
- `/components/ui/banner-carousel.md` → `/docs/components/`
- Create new root `/README.md` with project overview

### Phase 3: Archive Old Files
Create `/_archive/` for unused files:
```
/_archive/
├── imports/ (all old Figma imports)
├── components/
│   ├── AIAssistant.tsx
│   ├── HomeWithStickyHeader.tsx
│   ├── ResponsiveHome.tsx
│   ├── StickyHeader.tsx
│   └── BannerCarousel.tsx (duplicate)
└── header-navigation.html
```

### Phase 4: Create Utilities Folder
```
/lib/
├── utils.ts (from /components/ui/utils.ts)
├── hooks/
│   ├── use-mobile.ts
│   └── index.ts
└── index.ts
```

### Phase 5: Organize Custom Components
Extract project-specific components from `/components/ui/`:
```
/components/custom/
├── custom-button.tsx
├── header-nav-button.tsx
├── tab-button.tsx
├── content-card.tsx
├── blog-post-card.tsx
├── notification-card.tsx
├── page-block-header.tsx
├── horizontal-tabs.tsx
├── news-article-card.tsx
├── video-article-card.tsx
├── event-card.tsx
└── index.ts
```

### Phase 6: Organize UI Components by Category
Reorganize `/components/ui/` into logical groups:
- `forms/` - Button, Input, Textarea, Select, etc.
- `display/` - Card, Badge, Avatar, Skeleton, etc.
- `navigation/` - Tabs, Breadcrumb, Pagination, etc.
- `overlays/` - Dialog, Sheet, Popover, Tooltip, etc.
- `feedback/` - Alert, Progress, Toast
- `data/` - Table, Chart, Calendar
- `layout/` - ScrollArea, Resizable, Sidebar, Accordion
- `media/` - Carousel

### Phase 7: Organize Feature Components
Group business logic components:
```
/components/features/
├── banner/
│   ├── BannerCarousel.tsx
│   └── index.ts
├── navigation/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MegaMenu.tsx
│   ├── MobileNav.tsx
│   ├── SearchBar.tsx
│   └── index.ts
├── news/
│   ├── FeaturedNewsSection.tsx
│   └── index.ts
├── events/
│   ├── UpcomingEventsSection.tsx
│   └── index.ts
└── videos/
    ├── LatestVideosSection.tsx
    └── index.ts
```

### Phase 8: Create Common Components Folder
```
/components/common/
├── ImageWithFallback.tsx (from /components/figma/)
├── NotificationBadge.tsx
└── index.ts
```

### Phase 9: Organize Styles
```
/styles/
├── globals.css
└── components/
    ├── responsive.css (from /components/)
    └── sticky-header.css (from /components/)
```

### Phase 10: Update All Imports
After moving files, update imports in all components

### Phase 11: Create Barrel Exports
Add `index.ts` files for clean imports

### Phase 12: Clean Up
- Delete empty folders
- Delete `/data/` folder
- Remove old READMEs in component folders
- Verify everything works

## 📊 Progress Tracker

| Phase | Status | Files Moved | Imports Updated |
|-------|--------|-------------|-----------------|
| 1. Content System | ✅ Complete | 5/5 | 0/? |
| 2. Documentation | ⏳ Pending | 0/10 | N/A |
| 3. Archive | ⏳ Pending | 0/9 | N/A |
| 4. Utilities | ⏳ Pending | 0/2 | 0/? |
| 5. Custom Components | ⏳ Pending | 0/11 | 0/? |
| 6. UI Organization | ⏳ Pending | 0/65 | 0/? |
| 7. Feature Components | ⏳ Pending | 0/8 | 0/? |
| 8. Common Components | ⏳ Pending | 0/2 | 0/? |
| 9. Styles | ⏳ Pending | 0/2 | 0/? |
| 10. Import Updates | ⏳ Pending | N/A | 0/? |
| 11. Barrel Exports | ⏳ Pending | 0/15 | N/A |
| 12. Clean Up | ⏳ Pending | - | - |

## 🎯 Immediate Next Steps

1. **Search and update content imports** - Find all files importing from `/data/`
2. **Test that content system works** - Verify app still runs
3. **Execute Phase 2** - Move documentation files
4. **Execute Phase 3** - Archive old files
5. **Continue with remaining phases**

## 🔍 Files to Check for Imports

Run these searches to find files needing updates:

```bash
# Find all files importing from /data/
grep -r "from.*['\"].*data/" . --include="*.tsx" --include="*.ts"

# Find all files importing content-loader
grep -r "content-loader" . --include="*.tsx" --include="*.ts"

# Find all files importing from data/types
grep -r "from.*['\"].*data/types" . --include="*.tsx" --include="*.ts"
```

## ✨ Benefits After Completion

- ✅ Clear, logical folder structure
- ✅ Easy to find components and utilities
- ✅ Cleaner imports with barrel exports
- ✅ Separated concerns (UI, custom, features, common)
- ✅ Centralized documentation
- ✅ Old/unused code archived, not lost
- ✅ Industry standard structure
- ✅ Easier onboarding for new developers
- ✅ Better IDE autocomplete and navigation

---

**Last Updated:** Phase 1 Complete  
**Ready for:** Import updates and Phase 2 execution
