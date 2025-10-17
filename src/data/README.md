# Content Management System

This directory contains the JSON-based content management system for the České dráhy intranet. All content (both static UI labels and dynamic data) is stored in structured JSON files and accessed through type-safe utilities.

## 📁 File Structure

```
/data/
├── static-content.json      # Static UI text (labels, buttons, navigation)
├── dynamic-content.json     # Dynamic data (articles, events, videos, user)
├── types.ts                 # TypeScript type definitions
├── content-loader.ts        # Content loading utilities
├── README.md               # This file
└── MIGRATION_GUIDE.md      # Migration instructions
```

## 🎯 Purpose

**Complete separation of content from code** to enable:
- ✅ Easy content updates without code changes
- ✅ Content management by non-developers
- ✅ Full internationalization (i18n) support
- ✅ Type-safe content access
- ✅ Single source of truth for all text
- ✅ Future CMS integration ready
- ✅ Multi-language support structure

## 📝 Content Architecture

### Static Content (`static-content.json`)

Contains **all UI text** that doesn't change based on user or data:

- **Common** - Shared buttons, labels, validation messages
- **Header** - Navigation, search, user menu, notifications
- **Footer** - Company info, legal text, contact details
- **Navigation** - Mega menu, breadcrumbs, pagination
- **Sections** - Section titles, tabs, CTAs for news/events/videos
- **Forms** - Form labels, placeholders, success/error messages
- **Accessibility** - ARIA labels, screen reader text
- **Errors** - Error messages for 404, 500, network issues
- **Configuration** - Carousel settings, date formats

### Dynamic Content (`dynamic-content.json`)

Contains **data that changes** based on user or updates:

- **User Profile** - Current user information
- **Banners** - Carousel slide images and metadata
- **News Articles** - Three separate arrays (All, Department, Region)
- **Events** - Upcoming events with dates and locations
- **Videos** - Latest video content
- **Notifications** - User notifications

## 🔧 Usage Examples

### 1. Static UI Text

```tsx
import { getButtonLabels, getSectionLabels } from './data/content-loader';

function NewsSection() {
  const buttons = getButtonLabels();
  const labels = getSectionLabels('news');
  
  return (
    <div>
      <h2>{labels.title}</h2> {/* "Doporučené novinky" */}
      <button>{buttons.viewAll}</button> {/* "Zobrazit všechny" */}
    </div>
  );
}
```

### 2. Dynamic Data

```tsx
import { getNews, getEvents } from './data/content-loader';

function HomePage() {
  const allNews = getNews('all');
  const events = getEvents();
  
  return (
    <div>
      {allNews.map(article => (
        <NewsCard key={article.id} {...article} />
      ))}
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}
```

### 3. Combined Content

```tsx
import { getNewsSection } from './data/content-loader';

function FeaturedNews() {
  const { labels, data } = getNewsSection();
  
  return (
    <section>
      <h2>{labels.title}</h2>
      <Tabs>
        <Tab label={labels.tabs.all}>{/* Všechny */}</Tab>
        <Tab label={labels.tabs.department}>{/* Z mého odboru */}</Tab>
        <Tab label={labels.tabs.region}>{/* Z mého regionu */}</Tab>
      </Tabs>
      {data.all.map(article => (
        <NewsCard key={article.id} {...article} />
      ))}
    </section>
  );
}
```

### 4. Internationalized Strings

```tsx
import { formatString, getSectionLabels } from './data/content-loader';

function Carousel() {
  const labels = getSectionLabels('banner');
  const currentSlide = 2;
  const totalSlides = 4;
  
  // "Snímek {current} z {total}" -> "Snímek 2 z 4"
  const ariaLabel = formatString(labels.slideOf, {
    current: currentSlide,
    total: totalSlides
  });
  
  return <div aria-label={ariaLabel}>...</div>;
}
```

### 5. Accessibility Labels

```tsx
import { getAccessibilityLabels } from './data/content-loader';

function CarouselControls() {
  const aria = getAccessibilityLabels().aria;
  
  return (
    <>
      <button aria-label={aria.previousSlide}>←</button>
      <button aria-label={aria.pauseCarousel}>⏸</button>
      <button aria-label={aria.nextSlide}>→</button>
    </>
  );
}
```

### 6. Form Labels

```tsx
import { getFormLabels, getValidationMessages } from './data/content-loader';

function ContactForm() {
  const form = getFormLabels('contact');
  const validation = getValidationMessages();
  
  return (
    <form>
      <h2>{form.title}</h2>
      <input 
        placeholder={form.name}
        required 
        aria-label={validation.required}
      />
      <button>{form.send}</button>
    </form>
  );
}
```

### 7. Error Messages

```tsx
import { getErrorMessages } from './data/content-loader';

function ErrorPage({ errorCode }: { errorCode: '404' | '500' }) {
  const error = getErrorMessages(errorCode);
  
  return (
    <div>
      <h1>{error.title}</h1>
      <p>{error.message}</p>
      <button>{error.goHome}</button>
    </div>
  );
}
```

## 📊 Complete API Reference

### Static Content Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `getStaticContent()` | `StaticContent` | All static content |
| `getCommonText()` | `CommonContent` | Common buttons, labels, validation |
| `getButtonLabels()` | `CommonButtons` | All button labels |
| `getFormLabels(form?)` | `FormsContent` | Form labels and placeholders |
| `getHeaderContent()` | `HeaderContent` | Header navigation, search, menu |
| `getNavigationLabels()` | `HeaderNavigation` | Main navigation labels |
| `getFooterContent()` | `FooterContent` | Footer sections and links |
| `getMegaMenuContent()` | `MegaMenuContent` | Mega menu structure |
| `getSectionLabels(section?)` | `SectionsContent` | Section-specific labels |
| `getAccessibilityLabels()` | `AccessibilityContent` | ARIA and screen reader labels |
| `getErrorMessages(type?)` | `ErrorsContent` | Error messages |
| `getValidationMessages()` | `CommonValidation` | Form validation messages |
| `getCarouselConfig()` | `CarouselConfig` | Carousel settings |
| `getPageHeaderConfig()` | `PageHeaderContent` | Page header configuration |
| `formatString(template, values)` | `string` | Interpolate strings |

### Dynamic Content Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `getDynamicContent()` | `DynamicContent` | All dynamic content |
| `getUser()` | `User` | Current user profile |
| `getBanners()` | `BannerSlide[]` | Carousel slides |
| `getNews(tab)` | `NewsArticle[]` | News by tab (all/department/region) |
| `getAllNews()` | `NewsContent` | All news tabs |
| `getEvents()` | `Event[]` | Upcoming events |
| `getVideos()` | `Video[]` | Latest videos |
| `getNotifications(unread?)` | `Notification[]` | User notifications |

### Search & Filter Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `searchNews(keyword)` | `NewsArticle[]` | Search articles by keyword |
| `getNewsByCategory(category)` | `NewsArticle[]` | Filter by category |
| `getNewsByBadge(badge)` | `NewsArticle[]` | Filter by badge |
| `getNewsById(id)` | `NewsArticle \| undefined` | Find article by ID |
| `getEventById(id)` | `Event \| undefined` | Find event by ID |
| `getVideoById(id)` | `Video \| undefined` | Find video by ID |

### Combined Content Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `getNewsSection()` | `{ labels, data }` | Complete news section |
| `getEventsSection()` | `{ labels, data }` | Complete events section |
| `getVideosSection()` | `{ labels, data }` | Complete videos section |
| `getBannerSection()` | `{ labels, config, data }` | Complete banner section |
| `getCompleteHeader()` | `{ labels, user }` | Complete header |
| `getAllContent()` | `AllContent` | Everything |

## 🎨 Content Structure Reference

### Static Content Namespaces

```
static-content.json
├── common
│   ├── buttons (viewAll, save, cancel, etc.)
│   ├── labels (loading, error, success, etc.)
│   ├── time (today, yesterday, minutes, etc.)
│   └── validation (required, invalidEmail, etc.)
├── header
│   ├── navigation (home, newsAndMedia, etc.)
│   ├── search (placeholder, noResults, etc.)
│   ├── userMenu (profile, settings, logout, etc.)
│   ├── notifications (title, markAsRead, etc.)
│   └── quickLinks (vacation, scheduling, etc.)
├── footer
│   ├── sections (company, forEmployees, etc.)
│   ├── legal (copyright, privacy, etc.)
│   └── contact (phone, email, address)
├── navigation
│   ├── megaMenu (newsAndMedia, forEmployees, etc.)
│   ├── breadcrumbs (home, separator)
│   └── pagination (previous, next, page, of)
├── sections
│   ├── news (title, tabs, categories, etc.)
│   ├── events (title, viewAll, location, etc.)
│   ├── videos (title, viewAll, duration, etc.)
│   ├── banner (previous, next, pause, play)
│   ├── notifications (title, markAsRead, etc.)
│   └── quickAccess (title, customize)
├── forms
│   ├── search (placeholder, submit, etc.)
│   ├── contact (name, email, message, etc.)
│   ├── login (username, password, etc.)
│   ├── profile (firstName, lastName, etc.)
│   └── feedback (rating, comment, etc.)
├── accessibility
│   ├── aria (mainNavigation, carousel, etc.)
│   └── screenReader (skipToContent, etc.)
├── errors
│   ├── general (title, message, retry)
│   ├── 404 (title, message, goHome)
│   ├── 403, 500, network
│   └── ...
├── pageHeader (greeting, dateFormat)
└── carousel (autoPlayInterval, transitionDuration)
```

### Dynamic Content Structure

```
dynamic-content.json
├── user (profile information)
├── banners (carousel slides)
├── news
│   ├── all (all articles)
│   ├── department (department-specific)
│   └── region (region-specific)
├── events (upcoming events)
├── videos (latest videos)
└── notifications (user notifications)
```

## 🔄 Updating Content

### Update Static UI Text

1. Open `/data/static-content.json`
2. Find the appropriate namespace
3. Update the text value:

```json
{
  "common": {
    "buttons": {
      "viewAll": "Zobrazit všechny" // Update this
    }
  }
}
```

### Update Dynamic Data

1. Open `/data/dynamic-content.json`
2. Add/edit/remove data:

```json
{
  "news": {
    "all": [
      {
        "id": "news-new-1",
        "title": "New article",
        // ... other fields
      }
    ]
  }
}
```

## 🌍 Internationalization (i18n)

### Current Structure

The system is **i18n-ready** with language specified in metadata:

```json
{
  "meta": {
    "language": "cs"
  }
}
```

### Adding New Languages

Create language-specific files:

```
/data/
├── static-content.cs.json   # Czech (current)
├── static-content.en.json   # English
├── static-content.de.json   # German
├── dynamic-content.cs.json  # Czech
├── dynamic-content.en.json  # English
└── content-loader.ts        # Update to support language parameter
```

### Future i18n Implementation

```tsx
import { getButtonLabels } from './data/content-loader';

const buttons = getButtonLabels('en'); // English version
```

## 🔐 Best Practices

### ✅ DO

- **Use helper functions** - Always use `content-loader.ts` functions
- **Type everything** - Import types from `types.ts`
- **Check for null** - Handle nullable fields properly
- **Use formatString()** - For interpolated strings with placeholders
- **Update metadata** - Update `lastUpdated` when changing content
- **Maintain structure** - Follow established JSON structure
- **Use semantic keys** - Use descriptive, clear key names

### ❌ DON'T

- **Don't import JSON directly** - Use content-loader functions
- **Don't hardcode text** - Put all text in JSON files
- **Don't break structure** - Maintain consistent JSON format
- **Don't forget types** - Update types.ts when adding fields
- **Don't duplicate content** - Reuse common labels
- **Don't use abbreviations** - Use full, clear names

## 📝 Content Guidelines

### Writing Text

- **Be consistent** - Use same terminology throughout
- **Be concise** - Keep labels short and clear
- **Be specific** - Avoid vague terms
- **Use proper case** - Follow Czech capitalization rules
- **Include context** - Text should make sense standalone

### JSON Structure

- **Use camelCase** - For object keys
- **Group logically** - Related items together
- **Order consistently** - Alphabetical or by importance
- **Comment when needed** - Use description fields
- **Validate JSON** - Ensure proper syntax

## 🚀 Future Enhancements

- [ ] Add Zod/Yup validation schemas
- [ ] Implement full i18n with language switching
- [ ] Create content management UI
- [ ] Add content versioning/history
- [ ] Implement content preview
- [ ] Add A/B testing support
- [ ] Create content import/export tools
- [ ] Add analytics tracking fields
- [ ] Implement content scheduling
- [ ] Add SEO metadata fields

## 📞 Support

For questions about:
- **Content updates** - Contact content team
- **Technical issues** - Contact development team
- **New content types** - Submit feature request

---

**Version:** 1.0.0  
**Last Updated:** October 13, 2025  
**Language:** Czech (cs)  
**Maintained by:** České dráhy IT Team
