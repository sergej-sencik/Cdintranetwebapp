# Content Section Components

This directory contains reusable section components for displaying different types of content on the intranet homepage.

## Components

### 1. FeaturedNewsSection

Displays a list of featured news articles with **working tabs** for filtering (Všechny, Z mého odboru, Z mého regionu) and a "View All" button.

#### Features

- ✅ **Tab Switching** - Automatically switches content when user clicks on tabs
- ✅ **Personalized Content** - Shows department and region-specific articles
- ✅ **Default Content** - Includes pre-populated articles for all three tabs
- ✅ **Smooth Transitions** - Content updates instantly on tab change

#### Usage

```tsx
import { FeaturedNewsSection } from './components/sections';

function HomePage() {
  return (
    <FeaturedNewsSection
      // Optional: Override default articles for each tab
      allArticles={[
        {
          image: '/path/to/image.jpg',
          date: '20. září 2025',
          category: 'Aktuálně z ČD',
          title: 'Startuje kampaň "Vidět a být viděn"',
          description: 'Nová celofiremní kampaň se zaměřuje na důležitost...',
          badge: { text: 'Bezpečnost', variant: 'blue' },
          href: '/news/123',
          tabFilter: 'all'
        },
        // ... more articles
      ]}
      departmentArticles={[
        // Articles specific to user's department
      ]}
      regionArticles={[
        // Articles specific to user's region
      ]}
      onTabChange={(tabId) => console.log('Tab changed:', tabId)}
      onViewAll={() => router.push('/news')}
    />
  );
}
```

#### Basic Usage (Uses Default Content)

```tsx
// Simply use with no props - includes default articles for all tabs
<FeaturedNewsSection />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Doporučené novinky'` | Section title |
| `allArticles` | `NewsArticle[]` | Default articles | Articles for "Všechny" tab |
| `departmentArticles` | `NewsArticle[]` | Default articles | Articles for "Z mého odboru" tab |
| `regionArticles` | `NewsArticle[]` | Default articles | Articles for "Z mého regionu" tab |
| `tabs` | `Array<{id: string, label: string}>` | Default tabs | Tab configuration |
| `defaultActiveTab` | `string` | `'all'` | Initially active tab ID |
| `onTabChange` | `(tabId: string) => void` | `undefined` | Callback when tab changes |
| `viewAllText` | `string` | `'Zobrazit všechny'` | Text for "View All" button |
| `onViewAll` | `() => void` | `undefined` | Callback when "View All" is clicked |
| `className` | `string` | `''` | Additional CSS classes |

#### NewsArticle Type

```typescript
interface NewsArticle {
  image: string;
  date: string;
  category: string;
  title: string;
  description?: string;
  badge?: {
    text: string;
    variant?: 'blue' | 'orange' | 'green' | 'purple';
  };
  href?: string;
  tabFilter?: 'all' | 'department' | 'region';
}
```

#### Default Content

The component includes realistic default content for a railway technician (Jan Novotný - Technik kolejových vozidel, Odbor údržby a oprav, Plzeň):

**"Všechny" Tab:**
- General company news
- Competition announcements
- Regional updates
- Employee benefits

**"Z mého odboru" Tab:**
- New diagnostic equipment announcements
- Maintenance procedure updates
- Successful team projects
- Technical conferences and training

**"Z mého regionu" Tab:**
- Plzeň depot anniversary celebrations
- New parking facilities
- Safety awards
- Regional training center expansion

---

### 2. UpcomingEventsSection

Displays a list of upcoming events with dates, times, locations, and optional badges.

#### Usage

```tsx
import { UpcomingEventsSection } from './components/sections';

function HomePage() {
  return (
    <UpcomingEventsSection
      events={[
        {
          dateDay: '28.',
          dateMonth: 'Září',
          title: 'Celostátní konference o bezpečnosti na železnici',
          time: '9:00 - 16:00',
          location: 'Kongresové centrum Olomouc',
          href: '/events/123'
        },
        {
          dateDay: '18.',
          dateMonth: 'Listopad',
          title: 'Technické školení nových brzdových systémů',
          time: '8:00 - 15:30',
          location: 'Školící centrum DKV Plzeň',
          badge: {
            text: 'Odbor údržby a oprav',
            bgColor: '#ecfdf3',
            textColor: '#067647',
            borderColor: '#abefc6'
          },
          href: '/events/456'
        },
        // ... more events
      ]}
      onViewAll={() => router.push('/events')}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Nadcházející události'` | Section title |
| `events` | `Event[]` | **Required** | Array of events to display |
| `viewAllText` | `string` | `'Zobrazit vše'` | Text for "View All" button |
| `onViewAll` | `() => void` | `undefined` | Callback when "View All" is clicked |
| `className` | `string` | `''` | Additional CSS classes |

#### Event Type

```typescript
interface Event {
  dateDay: string;
  dateMonth: string;
  title: string;
  time: string;
  location: string;
  badge?: {
    text: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
  };
  href?: string;
}
```

---

### 3. LatestVideosSection

Displays a grid of video articles with play buttons and thumbnails.

#### Usage

```tsx
import { LatestVideosSection } from './components/sections';

function HomePage() {
  return (
    <LatestVideosSection
      videos={[
        {
          image: '/path/to/thumbnail.jpg',
          date: '19. září 2025',
          title: 'Modrá linka s ředitelem IT Janem Hazlbauerem',
          description: 'Co si představíte pod pojmem IT? Někdo z vás...',
          href: '/videos/123'
        },
        {
          image: '/path/to/thumbnail2.jpg',
          date: '6. září 2025',
          title: 'DVI slaví 20 let od založení',
          description: 'Dopravní vzdělávací institut je nedílnou součástí...',
          href: '/videos/456'
        },
        // ... more videos
      ]}
      onViewAll={() => router.push('/videos')}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Nejnovější videa'` | Section title |
| `videos` | `VideoArticle[]` | **Required** | Array of video articles to display |
| `viewAllText` | `string` | `'Zobrazit vše'` | Text for "View All" button |
| `onViewAll` | `() => void` | `undefined` | Callback when "View All" is clicked |
| `className` | `string` | `''` | Additional CSS classes |

#### VideoArticle Type

```typescript
interface VideoArticle {
  image: string;
  date: string;
  title: string;
  description?: string;
  href?: string;
}
```

---

## Complete Homepage Example

```tsx
import { 
  FeaturedNewsSection, 
  UpcomingEventsSection, 
  LatestVideosSection 
} from './components/sections';
import { Header, Footer } from './components/layout';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 max-w-[1280px] mx-auto px-[32px] py-[40px]">
        <div className="flex gap-[40px]">
          {/* Left column with content sections */}
          <div className="basis-0 flex flex-col gap-[40px] grow">
            <FeaturedNewsSection
              articles={newsArticles}
              onTabChange={handleTabChange}
              onViewAll={() => router.push('/news')}
            />
            
            <UpcomingEventsSection
              events={upcomingEvents}
              onViewAll={() => router.push('/events')}
            />
            
            <LatestVideosSection
              videos={latestVideos}
              onViewAll={() => router.push('/videos')}
            />
          </div>
          
          {/* Right column with sidebar content */}
          <aside className="w-[400px]">
            {/* Sidebar content */}
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
```

## Features

- ✅ **Fully Reusable** - Use across different pages with different data
- ✅ **Type-Safe** - Complete TypeScript interfaces
- ✅ **Consistent Design** - Uses existing design system components
- ✅ **Flexible** - All text and callbacks are customizable
- ✅ **React Best Practices** - Proper prop typing, key management, and component composition
- ✅ **Responsive** - Built with responsive layout in mind

## Design System Integration

All section components use:
- `PageBlockHeader` for consistent section headers
- `CustomButton` with global size configuration
- Existing card components (`NewsArticleCard`, `EventCard`, `VideoArticleCard`)
- Design tokens from Figma (colors, spacing, typography)

## Notes

- All sections include proper hover states and transitions from the card components
- The `FeaturedNewsSection` includes tab functionality for content filtering
- Event cards display formatted dates in a prominent visual style
- Video cards include play button overlays automatically
- All components accept `href` props for navigation
