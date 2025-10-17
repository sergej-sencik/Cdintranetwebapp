# Migration Guide: Moving to JSON Content System

This guide shows how to refactor existing components to use the centralized JSON content system with **both static UI labels and dynamic data**.

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Static Content Migration](#static-content-migration)
- [Dynamic Content Migration](#dynamic-content-migration)
- [Component Examples](#component-examples)
- [Testing Checklist](#testing-checklist)

## Overview

### What Changed?

**Before:**
- Text hardcoded in components
- Data hardcoded in arrays
- Labels mixed with logic
- No i18n support

**After:**
- All text in `static-content.json`
- All data in `dynamic-content.json`
- Clean component code
- i18n-ready structure

### File Structure

```
/data/
├── static-content.json    # UI labels, buttons, navigation
├── dynamic-content.json   # Articles, events, videos, user
├── types.ts              # Type definitions
└── content-loader.ts     # Access functions
```

## Quick Start

### Step 1: Import Content Loader

```tsx
import { 
  getButtonLabels,
  getSectionLabels,
  getNews,
  getEvents 
} from './data/content-loader';
```

### Step 2: Replace Hardcoded Text

```tsx
// ❌ Before
<button>Zobrazit všechny</button>

// ✅ After
const buttons = getButtonLabels();
<button>{buttons.viewAll}</button>
```

### Step 3: Replace Hardcoded Data

```tsx
// ❌ Before
const articles = [{ title: '...' }, ...];

// ✅ After
const articles = getNews('all');
```

## Static Content Migration

### 1. Button Labels

#### ❌ Before
```tsx
<button>Zobrazit všechny</button>
<button>Číst více</button>
<button>Uložit</button>
<button>Zrušit</button>
```

#### ✅ After
```tsx
import { getButtonLabels } from './data/content-loader';

function Component() {
  const buttons = getButtonLabels();
  
  return (
    <>
      <button>{buttons.viewAll}</button>
      <button>{buttons.readMore}</button>
      <button>{buttons.save}</button>
      <button>{buttons.cancel}</button>
    </>
  );
}
```

### 2. Section Titles and Labels

#### ❌ Before
```tsx
function NewsSection() {
  return (
    <section>
      <h2>Doporučené novinky</h2>
      <Tabs>
        <Tab>Všechny</Tab>
        <Tab>Z mého odboru</Tab>
        <Tab>Z mého regionu</Tab>
      </Tabs>
      <button>Zobrazit všechny</button>
    </section>
  );
}
```

#### ✅ After
```tsx
import { getSectionLabels, getButtonLabels } from './data/content-loader';

function NewsSection() {
  const labels = getSectionLabels('news');
  const buttons = getButtonLabels();
  
  return (
    <section>
      <h2>{labels.title}</h2>
      <Tabs>
        <Tab>{labels.tabs.all}</Tab>
        <Tab>{labels.tabs.department}</Tab>
        <Tab>{labels.tabs.region}</Tab>
      </Tabs>
      <button>{buttons.viewAll}</button>
    </section>
  );
}
```

### 3. Navigation Labels

#### ❌ Before
```tsx
function Header() {
  return (
    <nav>
      <a href="/">Úvod</a>
      <a href="/news">Novinky a média</a>
      <a href="/employees">Pro zaměstnance</a>
      <a href="/documents">Dokumenty</a>
    </nav>
  );
}
```

#### ✅ After
```tsx
import { getNavigationLabels } from './data/content-loader';

function Header() {
  const nav = getNavigationLabels();
  
  return (
    <nav>
      <a href="/">{nav.home}</a>
      <a href="/news">{nav.newsAndMedia}</a>
      <a href="/employees">{nav.forEmployees}</a>
      <a href="/documents">{nav.documents}</a>
    </nav>
  );
}
```

### 4. Form Labels

#### ❌ Before
```tsx
function ContactForm() {
  return (
    <form>
      <h2>Kontaktní formulář</h2>
      <input placeholder="Jméno a příjmení" />
      <input placeholder="E-mail" />
      <textarea placeholder="Zpráva" />
      <button>Odeslat</button>
    </form>
  );
}
```

#### ✅ After
```tsx
import { getFormLabels } from './data/content-loader';

function ContactForm() {
  const form = getFormLabels('contact');
  
  return (
    <form>
      <h2>{form.title}</h2>
      <input placeholder={form.name} />
      <input placeholder={form.email} />
      <textarea placeholder={form.message} />
      <button>{form.send}</button>
    </form>
  );
}
```

### 5. Accessibility Labels

#### ❌ Before
```tsx
function Carousel() {
  return (
    <>
      <button aria-label="Předchozí snímek">←</button>
      <button aria-label="Pozastavit karusel">⏸</button>
      <button aria-label="Další snímek">→</button>
    </>
  );
}
```

#### ✅ After
```tsx
import { getAccessibilityLabels } from './data/content-loader';

function Carousel() {
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

### 6. Error Messages

#### ❌ Before
```tsx
function ErrorPage() {
  return (
    <div>
      <h1>Stránka nenalezena</h1>
      <p>Stránka, kterou hledáte, neexistuje.</p>
      <button>Přejít na úvod</button>
    </div>
  );
}
```

#### ✅ After
```tsx
import { getErrorMessages } from './data/content-loader';

function ErrorPage() {
  const error = getErrorMessages('404');
  
  return (
    <div>
      <h1>{error.title}</h1>
      <p>{error.message}</p>
      <button>{error.goHome}</button>
    </div>
  );
}
```

## Dynamic Content Migration

### 1. Banner Carousel

#### ❌ Before
```tsx
function BannerSection() {
  return (
    <BannerCarousel
      slides={[
        { image: imgBanner, title: 'Banner 1' },
        { image: img2, title: 'Banner 2' },
      ]}
    />
  );
}
```

#### ✅ After
```tsx
import { getBanners } from './data/content-loader';

function BannerSection() {
  const banners = getBanners();
  
  return (
    <BannerCarousel slides={banners} />
  );
}
```

### 2. News Section

#### ❌ Before
```tsx
function NewsSection() {
  const articles = [
    {
      title: 'Article 1',
      date: '20. září 2025',
      // ... hardcoded data
    }
  ];
  
  return (
    <div>
      {articles.map(article => (
        <NewsCard {...article} />
      ))}
    </div>
  );
}
```

#### ✅ After
```tsx
import { getNews } from './data/content-loader';

function NewsSection() {
  const articles = getNews('all');
  
  return (
    <div>
      {articles.map(article => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  );
}
```

### 3. Complete Section with Labels + Data

#### ❌ Before
```tsx
function FeaturedNews() {
  const [activeTab, setActiveTab] = React.useState('all');
  
  const articles = [/* hardcoded */];
  
  return (
    <section>
      <h2>Doporučené novinky</h2>
      <Tabs>
        <Tab onClick={() => setActiveTab('all')}>Všechny</Tab>
        <Tab onClick={() => setActiveTab('department')}>Z mého odboru</Tab>
      </Tabs>
      <button>Zobrazit všechny</button>
      {/* articles */}
    </section>
  );
}
```

#### ✅ After
```tsx
import { getNewsSection, getButtonLabels } from './data/content-loader';

function FeaturedNews() {
  const [activeTab, setActiveTab] = React.useState('all');
  const { labels, data } = getNewsSection();
  const buttons = getButtonLabels();
  
  return (
    <section>
      <h2>{labels.title}</h2>
      <Tabs>
        <Tab onClick={() => setActiveTab('all')}>
          {labels.tabs.all}
        </Tab>
        <Tab onClick={() => setActiveTab('department')}>
          {labels.tabs.department}
        </Tab>
      </Tabs>
      <button>{buttons.viewAll}</button>
      {data[activeTab].map(article => (
        <NewsCard key={article.id} {...article} />
      ))}
    </section>
  );
}
```

## Component Examples

### Complete FeaturedNewsSection

```tsx
import * as React from 'react';
import { getNewsSection, getButtonLabels } from '../../data/content-loader';
import { NewsArticleCard } from '../ui/news-article-card';
import { PageBlockHeader } from '../ui/page-block-header';

export const FeaturedNewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  const { labels, data } = getNewsSection();
  const buttons = getButtonLabels();

  const tabs = [
    { id: 'all', label: labels.tabs.all },
    { id: 'department', label: labels.tabs.department },
    { id: 'region', label: labels.tabs.region }
  ];

  const articles = data[activeTab as keyof typeof data];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <PageBlockHeader
        title={labels.title}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        actionText={buttons.viewAll}
        onAction={() => console.log('View all news')}
      />
      
      <div className="grid grid-cols-2 gap-[24px] w-full">
        {articles.slice(0, 4).map(article => (
          <NewsArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
```

### Complete Header Component

```tsx
import * as React from 'react';
import { getCompleteHeader, getButtonLabels } from '../../data/content-loader';

export const Header: React.FC = () => {
  const { labels, user } = getCompleteHeader();
  const buttons = getButtonLabels();

  return (
    <header>
      <nav aria-label={labels.navigation.home}>
        <a href="/">{labels.navigation.home}</a>
        <a href="/news">{labels.navigation.newsAndMedia}</a>
        <a href="/employees">{labels.navigation.forEmployees}</a>
      </nav>
      
      <div className="user-menu">
        <img src={user.avatar} alt={user.fullName} />
        <div>
          <p>{labels.userMenu.greeting}, {user.fullName}</p>
          <p>{user.position}</p>
        </div>
        <button>{labels.userMenu.logout}</button>
      </div>
    </header>
  );
};
```

### Complete Banner Carousel

```tsx
import * as React from 'react';
import { getBannerSection, getAccessibilityLabels } from '../../data/content-loader';
import { BannerCarousel } from '../ui/banner-carousel';

export const HeroBanner: React.FC = () => {
  const { labels, config, data } = getBannerSection();
  const aria = getAccessibilityLabels().aria;

  return (
    <div aria-label={aria.carousel}>
      <BannerCarousel
        slides={data}
        autoPlayInterval={config.autoPlayInterval}
      />
    </div>
  );
};
```

## Testing Checklist

### Static Content

- [ ] All button labels display correctly
- [ ] All navigation links show correct text
- [ ] Form labels and placeholders are correct
- [ ] Error messages display properly
- [ ] ARIA labels are present
- [ ] No hardcoded text in components

### Dynamic Content

- [ ] Banner carousel shows all slides
- [ ] News articles load for all tabs
- [ ] Events display correctly
- [ ] Videos show with metadata
- [ ] User information displays
- [ ] All images load properly

### Functionality

- [ ] Tab switching works
- [ ] Search functionality works
- [ ] Filters apply correctly
- [ ] Links navigate properly
- [ ] No console errors
- [ ] TypeScript compiles

### Accessibility

- [ ] Screen reader labels present
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels correct

## Common Issues

### Issue: Can't find label

**Problem:** Label is missing or undefined

**Solution:** Check JSON path and key name:

```tsx
// Wrong
const label = labels.nonExistent; // undefined

// Right
const label = labels.title ?? 'Default';
```

### Issue: Type errors

**Problem:** TypeScript type mismatch

**Solution:** Import correct types:

```tsx
import type { NewsArticle } from './data/types';

const article: NewsArticle = getNewsById('news-1');
```

### Issue: Interpolated strings

**Problem:** Need to replace placeholders

**Solution:** Use `formatString()`:

```tsx
import { formatString, getSectionLabels } from './data/content-loader';

const labels = getSectionLabels('banner');
const text = formatString(labels.slideOf, { current: 2, total: 4 });
// "Snímek 2 z 4"
```

## Best Practices

### DO ✅

```tsx
// Import at top
import { getButtonLabels } from './data/content-loader';

// Store in const
const buttons = getButtonLabels();

// Use throughout component
<button>{buttons.save}</button>
<button>{buttons.cancel}</button>
```

### DON'T ❌

```tsx
// Don't call repeatedly
<button>{getButtonLabels().save}</button>
<button>{getButtonLabels().cancel}</button>

// Don't hardcode
<button>Uložit</button>

// Don't import JSON directly
import content from './data/static-content.json';
```

## Migration Steps

1. **Audit components** - Find all hardcoded text
2. **Update imports** - Add content-loader imports
3. **Replace text** - Use appropriate getter functions
4. **Update data** - Replace hardcoded arrays
5. **Add types** - Import and apply types
6. **Test thoroughly** - Check all functionality
7. **Remove old code** - Delete hardcoded text

## Performance Tips

### Memoize Content

```tsx
const labels = React.useMemo(() => getSectionLabels('news'), []);
```

### Combine Getters

```tsx
// Instead of multiple calls
const buttons = getButtonLabels();
const forms = getFormLabels('contact');
const aria = getAccessibilityLabels();

// Use combined getter
const { labels, data } = getNewsSection();
```

## Next Steps

After migration:

1. ✅ All text in JSON files
2. ✅ Clean component code
3. ✅ Type-safe content access
4. ✅ Ready for i18n
5. 🔄 Add language switching
6. 🔄 Create content management UI
7. 🔄 Implement content versioning

---

**Need Help?** Check README.md or contact the development team.
