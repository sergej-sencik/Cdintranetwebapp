# Content Card Component System

## Overview
The ContentCard component is a reusable card system designed for displaying news articles, events, and video content across the intranet. It includes built-in hover states and supports multiple visual variants.

## Component Location
`/components/ui/content-card.tsx`

## Card Variants

### 1. News Card (`variant="news"`)
- **Category Color**: `#008bbe` (Blue)
- **Use Case**: News articles, updates, announcements
- **Hover State**: Shadow elevation, title color change to brand blue, subtle image zoom

### 2. Event Card (`variant="event"`)
- **Category Color**: `#00af3f` (Green)
- **Use Case**: Company events, workshops, conferences, training sessions
- **Hover State**: Shadow elevation, title color change to brand blue, subtle image zoom

### 3. Video Card (`variant="video"`)
- **Category Color**: `#9747ff` (Purple)
- **Use Case**: Video content, tutorials, recordings, media
- **Hover State**: Shadow elevation, title color change to brand blue, subtle image zoom
- **Special Feature**: Supports optional `badge` prop for displaying video duration

## Component Props

```typescript
interface ContentCardProps {
  variant?: 'news' | 'event' | 'video';  // Type of card (default: 'news')
  image: string;                          // Image URL or import
  date: string;                           // Display date (e.g., "20. září 2025")
  category: string;                       // Category label (e.g., "Z regionů")
  title: string;                          // Card title (max 2 lines)
  description: string;                    // Card description (max 3 lines)
  href?: string;                          // Optional link URL
  badge?: string;                         // Optional badge text (e.g., "5:32" for videos)
  onClick?: () => void;                   // Optional click handler
}
```

## Usage Examples

### Basic News Card
```tsx
import { ContentCard } from './components/ui/content-card';
import newsImage from 'figma:asset/xxx.png';

<ContentCard
  variant="news"
  image={newsImage}
  date="20. září 2025"
  category="Aktuálně z ČD"
  title="Modernizace flotily pokračuje"
  description="České dráhy představily nové vlakové soupravy, které budou nasazeny na hlavní tratě."
  href="/news/modernizace-flotily"
/>
```

### Event Card
```tsx
<ContentCard
  variant="event"
  image={eventImage}
  date="15. října 2025"
  category="Firemní akce"
  title="Vánoční večírek 2025"
  description="Přijďte si s námi užít předvánoční atmosféru, hudbu a skvělé jídlo."
  href="/events/vanocni-vecirek-2025"
/>
```

### Video Card with Duration Badge
```tsx
<ContentCard
  variant="video"
  image={videoThumb}
  date="10. srpna 2025"
  category="Vzdělávání"
  title="Jak správně postupovat při bezpečnostní kontrole"
  description="Instruktážní video pro nové zaměstnance o bezpečnostních postupech."
  badge="12:45"
  href="/videos/bezpecnostni-kontrola"
/>
```

### Card without Link (Display Only)
```tsx
<ContentCard
  variant="news"
  image={newsImage}
  date="5. července 2025"
  category="Oznámení"
  title="Plánovaná odstávka systému"
  description="Informační systém bude nedostupný z důvodu údržby."
  onClick={() => console.log('Card clicked')}
/>
```

## Visual Specifications

### Layout
- **Card Dimensions**: Full width (flexible)
- **Image Size**: 196.364px × 130px
- **Gap between image and content**: 24px
- **Border Radius**: `--radius-lg` (8px) - applied to card and image
- **Content Spacing**: 8px between info row and title/description

### Typography
- **Date**: Roboto Regular, 14px, #252b37
- **Category**: Roboto Medium, 14px, variant-specific color
- **Title**: CD Fedra Pro Semibold, 18px, #002664 (hover: #0097cf)
- **Description**: Roboto Regular, 16px, #535862

### Hover States

#### Interactive Elements
1. **Card Container**
   - Box shadow elevation
   - Cursor changes to pointer
   - Smooth transition (300ms)

2. **Image**
   - Subtle scale transform (scale: 1.05)
   - Smooth transition (300ms)
   - Overflow hidden to maintain rounded corners

3. **Title**
   - Color changes from #002664 to #0097cf
   - Smooth transition (300ms)

#### Static Elements
- Date, category, and description remain unchanged
- Border and badge (if present) remain static

### Category Color Mapping

| Variant | Color | Hex Code | Use Case |
|---------|-------|----------|----------|
| `news` | Blue | `#008bbe` | News articles, updates |
| `event` | Green | `#00af3f` | Events, workshops |
| `video` | Purple | `#9747ff` | Video content, media |

## Design System Integration

### Border Radius
The component uses the standardized border radius system:
- Card container: `var(--radius-lg)` (8px)
- Image container: `var(--radius-lg)` (8px)
- Badge (videos): `var(--radius-sm)` (4px)

### Accessibility
- Images include `alt` attributes with card title
- Semantic HTML structure
- Keyboard navigation support (when `href` is provided)
- Focus states inherited from global styles
- Proper heading hierarchy

### Responsive Behavior
The card is designed to be flexible and responsive:
- Image maintains aspect ratio
- Content area grows to fill available space
- Text truncation with ellipsis for long titles/descriptions
- CSS line clamping for multiline text

## Text Truncation

### Title
- Maximum 2 lines
- CSS class: `css-k9lp1d`
- Overflow: ellipsis

### Description
- Maximum 3 lines
- CSS class: `css-nh3oi9`
- Overflow: ellipsis

## Common Use Cases

### News & Media Section
Use `variant="news"` for:
- Company announcements
- Press releases
- Internal news
- Regional updates

### Events & Activities Section
Use `variant="event"` for:
- Company events
- Training sessions
- Workshops
- Team building activities
- Conferences

### Video Library Section
Use `variant="video"` for:
- Educational videos
- Training materials
- Recorded presentations
- Tutorial content
- Include `badge` prop with video duration

## Best Practices

1. **Image Quality**: Use high-quality images (minimum 400px wide)
2. **Title Length**: Keep titles concise (ideally under 80 characters)
3. **Description**: Provide meaningful descriptions (100-150 characters optimal)
4. **Consistent Dating**: Use consistent date format across all cards
5. **Category Names**: Keep category names short and descriptive
6. **Accessibility**: Always provide meaningful `alt` text for images

## Advanced Features

### Video Duration Badge
For video cards, use the `badge` prop to display duration:
```tsx
badge="5:32"  // Format: MM:SS
badge="1:15:20"  // Format: H:MM:SS for longer videos
```

The badge appears in the bottom-right corner of the image with:
- Background: `black/75` (75% opacity)
- Text color: White
- Font size: 12px
- Backdrop blur effect
- Border radius: `--radius-sm` (4px)

### Custom Click Handlers
When not using `href`, you can provide an `onClick` handler:
```tsx
onClick={() => {
  // Track analytics
  // Open modal
  // Custom behavior
}}
```

## Migration from Old Components

### Before (Old Static Component)
```tsx
<div className="content-stretch flex gap-[24px] items-start relative rounded-[8px]">
  <div className="h-[130px] relative rounded-[8px] shrink-0 w-[196.364px]">
    <img src={imgImage} />
  </div>
  <HeadingAndText1 />
</div>
```

### After (New ContentCard)
```tsx
<ContentCard
  variant="news"
  image={imgImage}
  date="20. září 2025"
  category="Z regionů"
  title="Your title here"
  description="Your description here"
  href="#"
/>
```

## Future Enhancements

Potential additions for future versions:
- Author avatars for news cards
- Read time estimation
- Save/bookmark functionality
- Social sharing buttons
- Tag/label support
- Custom icon support per category
- Image lazy loading
- Skeleton loading states

---

*Last updated: 2025-01-13*
