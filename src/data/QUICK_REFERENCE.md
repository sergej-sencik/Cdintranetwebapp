# Content System Quick Reference

Fast lookup guide for common content access patterns.

## 🎯 Import Statement

```tsx
import { 
  // Static content
  getButtonLabels,
  getSectionLabels,
  getFormLabels,
  getNavigationLabels,
  getAccessibilityLabels,
  getErrorMessages,
  
  // Dynamic content
  getNews,
  getEvents,
  getVideos,
  getBanners,
  getUser,
  
  // Combined
  getNewsSection,
  getEventsSection,
  getCompleteHeader,
  
  // Utilities
  formatString
} from './data/content-loader';
```

## 📝 Common Patterns

### Buttons

```tsx
const buttons = getButtonLabels();

<button>{buttons.viewAll}</button>      // "Zobrazit všechny"
<button>{buttons.save}</button>         // "Uložit"
<button>{buttons.cancel}</button>       // "Zrušit"
<button>{buttons.close}</button>        // "Zavřít"
<button>{buttons.readMore}</button>     // "Číst více"
```

### Section Headers

```tsx
const newsLabels = getSectionLabels('news');
const eventsLabels = getSectionLabels('events');
const videosLabels = getSectionLabels('videos');

<h2>{newsLabels.title}</h2>      // "Doporučené novinky"
<h2>{eventsLabels.title}</h2>    // "Nadcházející události"
<h2>{videosLabels.title}</h2>    // "Poslední videa"
```

### Tabs

```tsx
const { tabs } = getSectionLabels('news');

<Tab>{tabs.all}</Tab>           // "Všechny"
<Tab>{tabs.department}</Tab>    // "Z mého odboru"
<Tab>{tabs.region}</Tab>        // "Z mého regionu"
```

### Navigation

```tsx
const nav = getNavigationLabels();

<a href="/">{nav.home}</a>                      // "Úvod"
<a href="/news">{nav.newsAndMedia}</a>          // "Novinky a média"
<a href="/employees">{nav.forEmployees}</a>     // "Pro zaměstnance"
<a href="/company">{nav.ourCompany}</a>         // "Naše firma"
<a href="/docs">{nav.documents}</a>             // "Dokumenty"
```

### Forms

```tsx
const contact = getFormLabels('contact');

<input placeholder={contact.name} />      // "Jméno a příjmení"
<input placeholder={contact.email} />     // "E-mail"
<input placeholder={contact.phone} />     // "Telefon"
<textarea placeholder={contact.message} /> // "Zpráva"
<button>{contact.send}</button>           // "Odeslat"
```

### Search

```tsx
const search = getFormLabels('search');

<input placeholder={search.placeholder} />  // "Hledat..."
<button>{search.submit}</button>           // "Hledat"
<button>{search.clear}</button>            // "Vymazat"
```

### Accessibility

```tsx
const { aria } = getAccessibilityLabels();

<button aria-label={aria.previousSlide}>←</button>    // "Předchozí snímek"
<button aria-label={aria.nextSlide}>→</button>        // "Další snímek"
<button aria-label={aria.pauseCarousel}>⏸</button>   // "Pozastavit karusel"
<button aria-label={aria.closeDialog}>×</button>      // "Zavřít dialog"
```

### Error Messages

```tsx
const error404 = getErrorMessages('404');
const error500 = getErrorMessages('500');

<h1>{error404.title}</h1>      // "Stránka nenalezena"
<p>{error404.message}</p>      // "Stránka, kterou hledáte, neexistuje."
<button>{error404.goHome}</button>  // "Přejít na úvod"
```

### User Info

```tsx
const user = getUser();
const { greeting } = getPageHeaderConfig();

<p>{greeting}, {user.fullName}</p>     // "Dobrý den, Jan Novotný"
<p>{user.position}</p>                 // "Technik kolejových vozidel"
<p>{user.department}</p>               // "Odbor údržby a oprav"
```

### News Articles

```tsx
const allNews = getNews('all');
const deptNews = getNews('department');
const regionNews = getNews('region');

{allNews.map(article => (
  <NewsCard key={article.id} {...article} />
))}
```

### Events

```tsx
const events = getEvents();

{events.map(event => (
  <EventCard key={event.id} {...event} />
))}
```

### Videos

```tsx
const videos = getVideos();

{videos.map(video => (
  <VideoCard key={video.id} {...video} />
))}
```

### Banner Carousel

```tsx
const banners = getBanners();

<BannerCarousel slides={banners} autoPlayInterval={5000} />
```

## 🔄 Combined Sections

### News Section (Labels + Data)

```tsx
const { labels, data } = getNewsSection();

<section>
  <h2>{labels.title}</h2>
  <Tabs>
    <Tab>{labels.tabs.all}</Tab>
    <Tab>{labels.tabs.department}</Tab>
    <Tab>{labels.tabs.region}</Tab>
  </Tabs>
  {data.all.map(article => (
    <NewsCard key={article.id} {...article} />
  ))}
</section>
```

### Events Section

```tsx
const { labels, data } = getEventsSection();

<section>
  <h2>{labels.title}</h2>
  {data.map(event => (
    <EventCard key={event.id} {...event} />
  ))}
  <button>{labels.viewAll}</button>
</section>
```

### Banner Section

```tsx
const { labels, config, data } = getBannerSection();

<BannerCarousel 
  slides={data}
  autoPlayInterval={config.autoPlayInterval}
/>
```

### Header with User

```tsx
const { labels, user } = getCompleteHeader();

<header>
  <nav>
    <a href="/">{labels.navigation.home}</a>
    {/* ... */}
  </nav>
  <div>
    <p>{labels.userMenu.greeting}, {user.fullName}</p>
  </div>
</header>
```

## 🔍 Search & Filter

### Search Articles

```tsx
import { searchNews } from './data/content-loader';

const results = searchNews('bezpečnost');
```

### Filter by Category

```tsx
import { getNewsByCategory } from './data/content-loader';

const cdNews = getNewsByCategory('Aktuálně z ČD');
```

### Find by ID

```tsx
import { getNewsById, getEventById } from './data/content-loader';

const article = getNewsById('news-1');
const event = getEventById('event-1');
```

## 🌐 Interpolated Strings

### With Placeholders

```tsx
import { formatString, getSectionLabels } from './data/content-loader';

const { slideOf } = getSectionLabels('banner');
// Template: "Snímek {current} z {total}"

const text = formatString(slideOf, { current: 2, total: 4 });
// Result: "Snímek 2 z 4"
```

### Common Examples

```tsx
const aria = getAccessibilityLabels().aria;

// "Přejít na snímek {number}"
formatString(aria.goToSlide, { number: 3 });

// "Stránka {current} z {total}"
formatString(aria.pageOf, { current: 1, total: 5 });

// "{count} nepřečtených"
formatString(labels.unreadCount, { count: 5 });
```

## 💡 Tips & Tricks

### Memoize Expensive Calls

```tsx
const labels = React.useMemo(() => getSectionLabels('news'), []);
```

### Destructure What You Need

```tsx
const { viewAll, save, cancel } = getButtonLabels();
```

### Use Nullish Coalescing

```tsx
const label = article.description ?? labels.noDescription;
```

### Type Safety

```tsx
import type { NewsArticle, Event } from './data/types';

const article: NewsArticle = getNewsById('news-1')!;
```

## 📦 All Available Functions

### Static Content
- `getStaticContent()` - Everything
- `getCommonText()` - Buttons, labels, validation
- `getButtonLabels()` - Button text
- `getFormLabels(formName?)` - Form fields
- `getHeaderContent()` - Header items
- `getNavigationLabels()` - Nav links
- `getFooterContent()` - Footer sections
- `getMegaMenuContent()` - Mega menu
- `getSectionLabels(section?)` - Section text
- `getAccessibilityLabels()` - ARIA labels
- `getErrorMessages(type?)` - Error text
- `getValidationMessages()` - Validation rules
- `getCarouselConfig()` - Carousel settings
- `getPageHeaderConfig()` - Page header

### Dynamic Content
- `getDynamicContent()` - Everything
- `getUser()` - User profile
- `getBanners()` - Carousel slides
- `getNews(tab)` - News articles
- `getAllNews()` - All news tabs
- `getEvents()` - Events
- `getVideos()` - Videos
- `getNotifications(unread?)` - Notifications

### Search & Filter
- `searchNews(keyword)` - Search
- `getNewsByCategory(category)` - Filter
- `getNewsByBadge(badge)` - Filter
- `getNewsById(id)` - Find one
- `getEventById(id)` - Find one
- `getVideoById(id)` - Find one

### Combined
- `getNewsSection()` - Labels + data
- `getEventsSection()` - Labels + data
- `getVideosSection()` - Labels + data
- `getBannerSection()` - Labels + config + data
- `getCompleteHeader()` - Labels + user

### Utilities
- `formatString(template, values)` - Interpolate
- `getCurrentLanguage()` - Get language code
- `getMetadata()` - Version info
- `getAllContent()` - Everything

## 🚀 Performance

### Good ✅

```tsx
// Call once, reuse
const buttons = getButtonLabels();
return (
  <>
    <button>{buttons.save}</button>
    <button>{buttons.cancel}</button>
  </>
);
```

### Bad ❌

```tsx
// Multiple calls
return (
  <>
    <button>{getButtonLabels().save}</button>
    <button>{getButtonLabels().cancel}</button>
  </>
);
```

---

**For detailed documentation, see README.md**
