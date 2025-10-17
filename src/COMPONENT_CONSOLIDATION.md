# Component Consolidation Summary

## Date: October 14, 2025

### Components Removed (Duplicates)

#### ❌ BlogPostCard (`/components/ui/blog-post-card.tsx`)
**Reason**: Duplicate functionality - had 3 variants (news, event, video) that were already covered by specialized components.

**Replaced by**:
- `NewsArticleCard` - for news articles with horizontal image layout
- `VideoArticleCard` - for video content with play button overlay
- `EventCard` - for events with date badge

---

### Components Updated with ImagePlaceholder

#### ✅ NewsArticleCard (`/components/ui/news-article-card.tsx`)
**Changes**:
- Made `image` prop optional (`image?: string`)
- Added `ImagePlaceholder` component import
- Shows placeholder when no image provided
- Placeholder config: `width={312}`, `height="100%"`, `variant="muted"`, `iconSize={40}`

**Usage**:
```tsx
// With image
<NewsArticleCard
  image="https://example.com/image.jpg"
  title="News Title"
  date="15. 1. 2025"
  category="Aktuality"
  description="Description text..."
/>

// Without image (shows placeholder)
<NewsArticleCard
  title="News Title"
  date="15. 1. 2025"
  category="Aktuality"
  description="Description text..."
/>
```

#### ✅ VideoArticleCard (`/components/ui/video-article-card.tsx`)
**Changes**:
- Made `image` prop optional (`image?: string`)
- Added `ImagePlaceholder` component import
- Shows placeholder when no image provided
- Placeholder config: `aspectRatio="video"`, `variant="muted"`, `iconSize={48}`

**Usage**:
```tsx
// With image
<VideoArticleCard
  image="https://example.com/video-thumbnail.jpg"
  title="Video Title"
  date="Video"
  description="Video description..."
  playIconPath={svgPaths.p35f28e40}
/>

// Without image (shows placeholder)
<VideoArticleCard
  title="Video Title"
  date="Tutorial"
  description="Video description..."
  playIconPath={svgPaths.p35f28e40}
/>
```

---

### Components Kept (No Changes Needed)

#### ✅ ContentCard (`/components/ui/content-card.tsx`)
**Reason**: Different purpose - uses icons instead of images. No image placeholder needed.

#### ✅ EventCard (`/components/ui/event-card.tsx`)
**Reason**: Date-based card design. No images used in this component.

#### ✅ LinkCard (`/components/ui/link-card.tsx`)
**Reason**: Icon-based card for quick links. No images used.

#### ✅ NotificationCard (`/components/ui/notification-card.tsx`)
**Reason**: Status/alert card. No images used.

---

### New Component Created

#### ✅ ImagePlaceholder (`/components/ui/image-placeholder.tsx`)
**Features**:
- Multiple color variants: `default`, `primary`, `secondary`, `muted`
- Multiple aspect ratios: `square`, `video`, `landscape`, `portrait`, `wide`, `custom`
- Customizable icon size
- Optional text label
- Show/hide icon option
- Custom width and height support
- Decorative background pattern
- Design system color integration

**Usage**:
```tsx
<ImagePlaceholder 
  variant="muted"
  aspectRatio="video"
  iconSize={48}
  text="No image available"
/>
```

---

### ComponentsShowcase Updates

#### Changed:
1. ✅ Removed `BlogPostCard` import
2. ✅ Added `svgPaths` import for icons
3. ✅ Removed all `BlogPostCard` examples (3 sections removed)
4. ✅ Updated `NewsArticleCard` examples to show with/without image
5. ✅ Updated `VideoArticleCard` examples to show with/without image
6. ✅ Fixed `EventCard` examples with correct props
7. ✅ Added new "Media Components" section showcasing `ImagePlaceholder`
8. ✅ Updated sidebar navigation categories

#### Media Components Section includes:
- ImagePlaceholder variants (default, primary, secondary, muted)
- ImagePlaceholder aspect ratios (square, video, landscape, portrait, wide)
- ImagePlaceholder with different icon sizes and text
- ImagePlaceholder with custom dimensions

---

### Final Card Component Structure

```
Card Components (6 total):
├── ContentCard           (icon-based, no images)
├── NewsArticleCard       (with optional ImagePlaceholder) ✨
├── VideoArticleCard      (with optional ImagePlaceholder) ✨
├── EventCard            (date-based, no images)
├── LinkCard             (icon-based, no images)
└── NotificationCard     (status alerts, no images)

Media Components (1 total):
└── ImagePlaceholder     (NEW - reusable placeholder) ✨
```

---

### Benefits of Consolidation

1. **Eliminated Duplication**: Removed BlogPostCard which duplicated functionality of 3 other components
2. **Improved Flexibility**: Cards now gracefully handle missing images with placeholders
3. **Consistent Design**: All placeholders use the same ImagePlaceholder component
4. **Better DX**: Clearer component names - each card has a specific purpose
5. **Maintainability**: Fewer components to maintain, clearer responsibilities

---

### Migration Guide

If you were using `BlogPostCard`:

**Before**:
```tsx
// News variant
<BlogPostCard
  variant="news"
  image={image}
  title="Title"
  description="Description"
  category="Category"
  date="Date"
/>

// Video variant
<BlogPostCard
  variant="video"
  image={image}
  title="Title"
  description="Description"
  date="Video"
/>

// Event variant
<BlogPostCard
  variant="event"
  eventDay="25"
  eventMonth="leden"
  title="Title"
  eventTime="14:00"
  eventLocation="Praha"
/>
```

**After**:
```tsx
// Use NewsArticleCard
<NewsArticleCard
  image={image}
  title="Title"
  description="Description"
  category="Category"
  date="Date"
/>

// Use VideoArticleCard
<VideoArticleCard
  image={image}
  title="Title"
  description="Description"
  date="Video"
  playIconPath={svgPaths.p35f28e40}
/>

// Use EventCard
<EventCard
  dateDay="25"
  dateMonth="leden"
  title="Title"
  time="14:00"
  location="Praha"
  arrowIconPath={svgPaths.p35129400}
/>
```
