# Project Restructuring Plan

## Phase 1: Content System ✅
- [x] Create `/content/` folder
- [x] Move `types.ts` to `/content/types.ts`
- [x] Create `/content/loader.ts` (renamed from content-loader.ts)
- [ ] Copy `static-content.json` to `/content/static.json`
- [ ] Copy `dynamic-content.json` to `/content/dynamic.json`
- [x] Create `/content/index.ts` barrel export
- [ ] Delete old `/data/` folder

## Phase 2: Documentation
- [ ] Create `/docs/` folder
- [ ] Move `README.md` to `/docs/README.md`
- [ ] Move `FONT_SETUP.md` to `/docs/FONT_SETUP.md`
- [ ] Move `Attributions.md` to `/docs/Attributions.md`
- [ ] Move `/data/*.md` to `/docs/content/`
- [ ] Move `/guidelines/*.md` to `/docs/guidelines/`
- [ ] Create new root `README.md` with project overview

## Phase 3: Archive Old Files
- [ ] Create `/_archive/` folder
- [ ] Move `/imports/` to `/_archive/imports/`
- [ ] Move unused components to `/_archive/components/`
  - AIAssistant.tsx
  - HomeWithStickyHeader.tsx
  - ResponsiveHome.tsx
  - StickyHeader.tsx
- [ ] Move `header-navigation.html` to `/_archive/`

## Phase 4: Organize UI Components
- [ ] Create organized subfolders in `/components/ui/`:
  - forms/
  - display/
  - navigation/
  - overlays/
  - feedback/
  - data/
  - layout/
  - media/
- [ ] Move components to appropriate subfolders
- [ ] Create barrel exports (index.ts) for each subfolder

## Phase 5: Extract Custom Components
- [ ] Create `/components/custom/` folder
- [ ] Move from `/components/ui/` to `/components/custom/`:
  - custom-button.tsx
  - header-nav-button.tsx
  - tab-button.tsx
  - content-card.tsx
  - blog-post-card.tsx
  - notification-card.tsx
  - page-block-header.tsx
  - horizontal-tabs.tsx
  - news-article-card.tsx
  - video-article-card.tsx
  - event-card.tsx
- [ ] Create `/components/custom/index.ts` barrel export

## Phase 6: Organize Feature Components
- [ ] Create `/components/features/` folder with subfolders:
  - banner/
  - navigation/
  - news/
  - events/
  - videos/
- [ ] Move components to features:
  - BannerCarousel.tsx → features/banner/
  - Header.tsx, Footer.tsx → features/navigation/
  - MegaMenu.tsx, MobileNav.tsx, SearchBar.tsx → features/navigation/
  - FeaturedNewsSection.tsx, NewsTabs.tsx → features/news/
  - UpcomingEventsSection.tsx → features/events/
  - LatestVideosSection.tsx → features/videos/
- [ ] Create barrel exports for each feature

## Phase 7: Common Components
- [ ] Create `/components/common/` folder
- [ ] Move ImageWithFallback.tsx to `/components/common/`
- [ ] Move NotificationBadge.tsx to `/components/common/`
- [ ] Create `/components/common/index.ts`

## Phase 8: Utilities
- [ ] Create `/lib/` folder
- [ ] Move `use-mobile.ts` from `/components/ui/` to `/lib/hooks/`
- [ ] Move `utils.ts` from `/components/ui/` to `/lib/`
- [ ] Create `/lib/index.ts` and `/lib/hooks/index.ts`

## Phase 9: Styles
- [ ] Move `responsive.css` to `/styles/components/`
- [ ] Move `sticky-header.css` to `/styles/components/`

## Phase 10: Update All Imports
- [ ] Update App.tsx imports
- [ ] Update all component imports
- [ ] Update content system imports (data → content)
- [ ] Update utility imports

## Phase 11: Create New Entry Point
- [ ] Move App.tsx to `/app/App.tsx` (or keep at root if preferred)
- [ ] Create `/components/pages/HomePage.tsx` if needed

## Phase 12: Clean Up
- [ ] Delete empty folders
- [ ] Delete old `/data/` folder
- [ ] Delete old `/components/layout/README.md` and `/components/sections/README.md`
- [ ] Verify all imports work

## Final Structure

```
/
├── app/
│   └── App.tsx
├── components/
│   ├── common/
│   │   ├── ImageWithFallback.tsx
│   │   ├── NotificationBadge.tsx
│   │   └── index.ts
│   ├── custom/
│   │   ├── custom-button.tsx
│   │   ├── header-nav-button.tsx
│   │   ├── tab-button.tsx
│   │   ├── content-card.tsx
│   │   ├── blog-post-card.tsx
│   │   ├── notification-card.tsx
│   │   ├── page-block-header.tsx
│   │   ├── horizontal-tabs.tsx
│   │   ├── news-article-card.tsx
│   │   ├── video-article-card.tsx
│   │   ├── event-card.tsx
│   │   └── index.ts
│   ├── features/
│   │   ├── banner/
│   │   │   ├── BannerCarousel.tsx
│   │   │   └── index.ts
│   │   ├── navigation/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── index.ts
│   │   ├── news/
│   │   │   ├── FeaturedNewsSection.tsx
│   │   │   ├── NewsTabs.tsx
│   │   │   └── index.ts
│   │   ├── events/
│   │   │   ├── UpcomingEventsSection.tsx
│   │   │   └── index.ts
│   │   └── videos/
│   │       ├── LatestVideosSection.tsx
│   │       └── index.ts
│   └── ui/
│       ├── forms/
│       │   ├── button.tsx
│       │   ├── input.tsx
│       │   ├── textarea.tsx
│       │   ├── checkbox.tsx
│       │   ├── radio-group.tsx
│       │   ├── select.tsx
│       │   ├── form.tsx
│       │   ├── input-otp.tsx
│       │   ├── label.tsx
│       │   ├── slider.tsx
│       │   ├── switch.tsx
│       │   ├── toggle.tsx
│       │   ├── toggle-group.tsx
│       │   └── index.ts
│       ├── display/
│       │   ├── card.tsx
│       │   ├── badge.tsx
│       │   ├── avatar.tsx
│       │   ├── separator.tsx
│       │   ├── skeleton.tsx
│       │   └── aspect-ratio.tsx
│       ├── navigation/
│       │   ├── tabs.tsx
│       │   ├── breadcrumb.tsx
│       │   ├── pagination.tsx
│       │   ├── navigation-menu.tsx
│       │   └── menubar.tsx
│       ├── overlays/
│       │   ├── dialog.tsx
│       │   ├── sheet.tsx
│       │   ├── drawer.tsx
│       │   ├── popover.tsx
│       │   ├── hover-card.tsx
│       │   ├── tooltip.tsx
│       │   ├── alert-dialog.tsx
│       │   ├── context-menu.tsx
│       │   ├── dropdown-menu.tsx
│       │   └── command.tsx
│       ├── feedback/
│       │   ├── alert.tsx
│       │   ├── sonner.tsx
│       │   └── progress.tsx
│       ├── data/
│       │   ├── table.tsx
│       │   ├── chart.tsx
│       │   └── calendar.tsx
│       ├── layout/
│       │   ├── scroll-area.tsx
│       │   ├── resizable.tsx
│       │   ├── sidebar.tsx
│       │   ├── collapsible.tsx
│       │   └── accordion.tsx
│       └── media/
│           └── carousel.tsx
├── content/
│   ├── static.json
│   ├── dynamic.json
│   ├── types.ts
│   ├── loader.ts
│   └── index.ts
├── docs/
│   ├── README.md
│   ├── FONT_SETUP.md
│   ├── Attributions.md
│   ├── content/
│   │   ├── README.md
│   │   ├── INDEX.md
│   │   ├── MIGRATION_GUIDE.md
│   │   ├── QUICK_REFERENCE.md
│   │   └── USAGE_EXAMPLES.md
│   ├── components/
│   │   └── banner-carousel.md
│   └── guidelines/
│       ├── Guidelines.md
│       ├── ContentCardSystem.md
│       ├── BlogPostCardSystem.md
│       └── BorderRadiusSystem.md
├── lib/
│   ├── utils.ts
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── index.ts
│   └── index.ts
├── styles/
│   ├── globals.css
│   └── components/
│       ├── responsive.css
│       └── sticky-header.css
├── _archive/
│   ├── imports/
│   ├── components/
│   └── header-navigation.html
└── README.md (new project overview)
```

## Status
- Phase 1: In Progress (50%)
- Phases 2-12: Pending
