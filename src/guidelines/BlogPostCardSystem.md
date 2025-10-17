# BlogPostCard Component System

## Overview
The `BlogPostCard` component is a versatile, reusable card component designed for displaying three types of content across the intranet homepage: **news articles**, **upcoming events**, and **video content**. Each variant has unique layouts and interactive hover states optimized for user engagement.

## Component Location
- **Path**: `/components/ui/blog-post-card.tsx`
- **Import**: `import { BlogPostCard } from "./components/ui/blog-post-card";`

---

## Variants

### 1. News Variant (`variant="news"`)
**Used in**: "Doporučené novinky" (Recommended News) section

**Layout**: Horizontal card with left-aligned image

**Props**:
```tsx
{
  variant: "news",
  image: string,          // Image URL (312px × 210px)
  date: string,           // e.g., "19. září 2025"
  category: string,       // e.g., "Soutěže", "Z regionů"
  title: string,          // Article headline
  description?: string,   // Article excerpt (optional)
  href?: string,          // Link URL
  onClick?: () => void    // Click handler
}
```

**Design Features**:
- Image: 312px wide × 210px high
- Content area with flexible width
- Date and category row with bullet separator
- Title in CD Fedra Pro Medium, 20px
- Optional description in Roboto Regular, 16px
- White background with subtle border and shadow

**Hover State**:
- Image zooms from 1.0× to 1.10× scale over 800ms
- Enhanced shadow elevation
- Smooth bidirectional transition (in/out)

---

### 2. Event Variant (`variant="event"`)
**Used in**: "Nadcházející události" (Upcoming Events) section

**Layout**: Vertical card with prominent date badge (no image)

**Props**:
```tsx
{
  variant: "event",
  eventMonth: string,     // e.g., "Říjen"
  eventDay: string,       // e.g., "25."
  title: string,          // Event name
  eventTime: string,      // e.g., "10:00 - 17:00"
  eventLocation: string,  // e.g., "Masarykovo nádraží, Praha"
  href?: string,          // Link URL
  onClick?: () => void    // Click handler
}
```

**Design Features**:
- Fixed height: 288px
- Large date display (30px day number in brand blue)
- Arrow icon in top right
- Event time and location at bottom
- No image - pure typographic design

**Hover State**:
- Day number color transitions to darker blue (#006d94)
- Arrow translates 4px to the right
- Enhanced shadow elevation
- 300ms smooth transitions

---

### 3. Video Variant (`variant="video"`)
**Used in**: "Nejnovější videa" (Latest Videos) section

**Layout**: Vertical card with video thumbnail and play button overlay

**Props**:
```tsx
{
  variant: "video",
  image: string,          // Video thumbnail (aspect ratio 384:256)
  date: string,           // e.g., "6. září 2025"
  title: string,          // Video title
  description?: string,   // Video description (optional)
  href?: string,          // Video link URL
  onClick?: () => void    // Click handler
}
```

**Design Features**:
- Aspect ratio: 384:256 (1.5:1)
- Play button overlay (64px × 64px) in bottom-left corner
- Frosted glass effect on play button background
- Content area with 24px padding
- Date in brand blue, title in navy

**Hover State**:
- Thumbnail image zooms from 1.0× to 1.10× scale over 800ms
- Play button scales to 1.10× and background opacity increases
- Enhanced shadow elevation
- Smooth bidirectional transitions

---

## Hover States - Detailed Specifications

### Common Hover Effects (All Variants)
```css
/* Shadow Enhancement */
box-shadow: 
  0px 4px 12px 0px rgba(10,13,18,0.1),
  0px 2px 4px -1px rgba(10,13,18,0.08);

/* Transition */
transition: all 300ms ease-out;
```

### Image Zoom Effect (News & Video)
```css
/* Image Transform */
transform: scale(1.10);
transition: transform 800ms ease-out;

/* Hardware Acceleration */
will-change: transform;
```

**Key Features**:
- **Scale factor**: 1.10 (10% zoom)
- **Duration**: 800ms
- **Easing**: ease-out (natural deceleration)
- **Bidirectional**: Smoothly returns to original scale on mouse leave
- **Performance**: Hardware-accelerated for 60fps animation
- **Overflow**: Hidden to maintain clean card edges

### Event Variant Hover Details
```css
/* Day Number Color */
color: #006d94; /* Darker brand blue */
transition: color 300ms ease-out;

/* Arrow Translation */
transform: translateX(4px);
transition: transform 300ms ease-out;
```

### Video Play Button Hover
```css
/* Play Button Scale */
transform: scale(1.10);

/* Background Opacity */
background: rgba(255,255,255,0.5); /* From 0.3 */

/* Combined Transition */
transition: all 300ms ease-out;
```

---

## Usage Examples

### News Card Example
```tsx
<BlogPostCard
  variant="news"
  image={imgArticle}
  date="19. září 2025"
  category="Soutěže"
  title="Nový týden, nová soutěž! Tentokrát o vstupenky na MS Supermoto národů 2025"
  description="Nejlepší supermoto týmy planety zamíří v září 2025 do Vysokého Mýta..."
  href="/news/supermoto-contest"
/>
```

### Event Card Example
```tsx
<BlogPostCard
  variant="event"
  eventMonth="Říjen"
  eventDay="25."
  title="Den Českých drah pro veřejnost"
  eventTime="10:00 - 17:00"
  eventLocation="Masarykovo nádraží, Praha"
  href="/events/cd-public-day"
/>
```

### Video Card Example
```tsx
<BlogPostCard
  variant="video"
  image={imgVideoThumb}
  date="6. září 2025"
  title="DVI slaví 20 let od založení"
  description="Dopravní vzdělávací institut je nedílnou součástí Skupiny ČD..."
  href="/videos/dvi-anniversary"
/>
```

---

## Design System Integration

### Color Variables
- **Brand Blue**: `#008bbe` (categories, dates, event day)
- **Dark Blue**: `#002664` (titles)
- **Navy**: `#252b37` (date text)
- **Gray**: `#535862` (descriptions)
- **Light Gray**: `#717680` (icons)
- **Border**: `#e9eaeb`

### Typography
- **Headings**: CD Fedra Pro Medium, 20px, line-height 28px
- **Dates**: Roboto Medium, 14px, line-height 20px
- **Descriptions**: Roboto Regular, 16px, line-height 22px
- **Event Day**: CD Fedra Pro Medium, 30px, line-height 38px

### Border Radius
- **Card**: `4px` (from `var(--radius-sm)` in design system)
- **Play Button**: `4px`

### Shadows
**Default**:
```css
box-shadow:
  0px 1px 3px 0px rgba(10,13,18,0.05),
  0px 1px 2px -1px rgba(10,13,18,0.05);
```

**Hover**:
```css
box-shadow:
  0px 4px 12px 0px rgba(10,13,18,0.1),
  0px 2px 4px -1px rgba(10,13,18,0.08);
```

---

## Accessibility

### Keyboard Navigation
- All cards are keyboard-accessible via `<a>` or `<div>` with appropriate handlers
- Focus states inherit browser default styling
- Tab order follows visual order

### Screen Readers
- Images have descriptive `alt` attributes using card titles
- Decorative borders marked with `aria-hidden="true"`
- Semantic HTML structure maintained

### Motion Preferences
- Consider adding `prefers-reduced-motion` support for hover animations
- All transitions are optional enhancements, not critical to functionality

---

## Performance Considerations

### Image Optimization
- Use appropriately sized images:
  - News: 312×210px (or 624×420px @2x)
  - Video: Match 384:256 aspect ratio
- Implement lazy loading for off-screen cards
- Consider WebP format with fallbacks

### Animation Performance
- Hardware-accelerated transforms (GPU)
- `will-change: transform` hints browser optimization
- 60fps animation targets
- No layout thrashing (transform-only animations)

---

## Layout Grid Integration

### News Section
```tsx
<div className="box-border content-start flex flex-col gap-[24px] items-start p-[24px]">
  <BlogPostCard variant="news" {...newsProps1} />
  <BlogPostCard variant="news" {...newsProps2} />
  <BlogPostCard variant="news" {...newsProps3} />
</div>
```

### Events Section
```tsx
<div className="box-border content-start flex flex-wrap gap-[24px] items-start p-[24px]">
  <BlogPostCard variant="event" {...eventProps1} />
  <BlogPostCard variant="event" {...eventProps2} />
  <BlogPostCard variant="event" {...eventProps3} />
</div>
```

### Videos Section
```tsx
<div className="box-border content-start flex flex-wrap gap-[24px] items-start p-[24px]">
  <BlogPostCard variant="video" {...videoProps1} />
  <BlogPostCard variant="video" {...videoProps2} />
</div>
```

---

## Responsive Behavior

### Desktop (1440px+)
- News cards: Full width horizontal layout
- Event cards: 3 columns with flexbox wrapping
- Video cards: 2 columns (basis-0 grow)

### Tablet (768px - 1439px)
- News cards: Maintain horizontal layout
- Event cards: 2 columns
- Video cards: 2 columns or stack based on space

### Mobile (<768px)
- All cards stack vertically
- News cards may need modified layout (image on top)
- Event cards maintain design
- Video cards maintain aspect ratio

**Note**: Responsive implementation should be added based on design requirements.

---

## Migration Guide

### Replacing Old BlogPostCard Components

**Before**:
```tsx
function BlogPostCard7() {
  return (
    <div className="basis-0 bg-white grow...">
      <Image7 />
      <Content24 />
      {/* ... */}
    </div>
  );
}
```

**After**:
```tsx
<BlogPostCard
  variant="video"
  image={imgImage7}
  date="19. září 2025"
  title="Modrá linka s ředitelem IT Janem Hazlbauerem"
  description="Co si představíte pod pojmem IT?..."
  href="#"
/>
```

### Benefits
- ✅ Consistent hover states across all card instances
- ✅ Centralized component logic (easier updates)
- ✅ Type-safe props with TypeScript
- ✅ Reduced code duplication
- ✅ Better maintainability
- ✅ Improved accessibility

---

## Future Enhancements

### Potential Additions
1. **Loading States**: Skeleton screens for async content
2. **Badge Support**: "NEW" or "FEATURED" badges for news
3. **Duration Badge**: Video length display for video cards
4. **Bookmarking**: Save/favorite functionality
5. **Share Buttons**: Social sharing overlays on hover
6. **Read Progress**: Progress indicator for news articles
7. **Analytics**: Click tracking integration
8. **A11y Enhancements**: ARIA live regions for dynamic content

### Variant Extensions
- **Photo Gallery**: Grid variant for image collections
- **Podcast**: Audio player variant with waveform
- **Document**: PDF/download variant with file metadata
- **Link**: External link variant with domain indicator

---

## Related Components
- **ContentCard** (`/components/ui/content-card.tsx`) - Smaller cards for mega menu navigation
- **CustomButton** (`/components/ui/custom-button.tsx`) - CTA buttons within cards
- **HeaderNavButton** (`/components/ui/header-nav-button.tsx`) - Navigation menu triggers

---

## Changelog

### Version 1.0 (Initial Release)
- Created unified BlogPostCard component
- Implemented three variants: news, event, video
- Added smooth hover states with image zoom
- Integrated with existing design system
- Replaced BlogPostCard7 and BlogPostCard8 in Nejnovější videa section
