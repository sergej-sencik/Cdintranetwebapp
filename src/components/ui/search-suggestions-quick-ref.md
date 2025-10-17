# Search Suggestions - Quick Reference

## 🚀 Quick Start

### 1. Import Components
```tsx
import { SearchSuggestionsDropdown } from './components/ui/search-suggestions-dropdown';
import { SearchSuggestionSection } from './components/ui/search-suggestion-section';
import { SearchSuggestionItem } from './components/ui/search-suggestion-item';
```

### 2. Basic Setup
```tsx
const [isOpen, setIsOpen] = useState(false);
const [query, setQuery] = useState('');

<div className="relative">
  <SearchInput
    onFocus={() => setIsOpen(true)}
    onChange={(e) => setQuery(e.target.value)}
  />
  
  <SearchSuggestionsDropdown
    isOpen={isOpen}
    query={query}
    onSuggestionClick={(item) => {
      console.log('Selected:', item);
      setIsOpen(false);
    }}
  />
</div>
```

## 📦 Component Props

### SearchSuggestionsDropdown
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `isOpen` | boolean | ✅ | Controls visibility |
| `query` | string | ❌ | Current search text |
| `onSuggestionClick` | function | ❌ | Selection handler |
| `className` | string | ❌ | Custom classes |

### SearchSuggestionSection
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | ✅ | Section heading |
| `actionLabel` | string | ❌ | Action button text |
| `onActionClick` | function | ❌ | Action handler |
| `children` | ReactNode | ✅ | Section content |
| `className` | string | ❌ | Custom classes |

### SearchSuggestionItem
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | string | ✅ | Main text |
| `icon` | ReactNode | ❌ | Icon component |
| `subtitle` | string | ❌ | Secondary text |
| `badge` | string | ❌ | Badge text |
| `onClick` | function | ❌ | Click handler |
| `className` | string | ❌ | Custom classes |

## 🎨 Common Patterns

### Recent Searches
```tsx
<SearchSuggestionSection 
  title="Poslední vyhledávání"
  actionLabel="Vymazat"
  onActionClick={() => clearHistory()}
>
  {recentSearches.map(item => (
    <SearchSuggestionItem
      key={item.id}
      icon={<Clock className="w-4 h-4" />}
      label={item.label}
      onClick={() => handleSearch(item.label)}
    />
  ))}
</SearchSuggestionSection>
```

### Colleague Results
```tsx
<SearchSuggestionItem
  icon={<User className="w-4 h-4" />}
  label="Jan Novák"
  subtitle="Senior Developer • IT oddělení"
  onClick={() => navigate('/profile/jan-novak')}
/>
```

### Document Results
```tsx
<SearchSuggestionItem
  icon={<FileText className="w-4 h-4" />}
  label="Výroční zpráva 2024"
  subtitle="15. 12. 2024"
  badge="PDF"
  onClick={() => openDocument(doc.id)}
/>
```

### News Articles
```tsx
<SearchSuggestionItem
  icon={<Newspaper className="w-4 h-4" />}
  label="Nové benefity pro zaměstnance"
  subtitle="18. 12. 2024"
  badge="HR"
  onClick={() => navigate(`/news/${article.id}`)}
/>
```

### Trending Items
```tsx
<SearchSuggestionItem
  icon={<TrendingUp className="w-4 h-4" />}
  label="Vánoční večírek 2024"
  badge="Populární"
  onClick={() => handleTrending(item)}
/>
```

## 🎯 Icons Reference

```tsx
import {
  Clock,        // Recent searches
  User,         // Colleagues
  FileText,     // Documents
  Newspaper,    // News
  Calendar,     // Events
  TrendingUp,   // Trending
  Search,       // Empty state
  Folder,       // Projects
  Settings,     // Settings
  Star,         // Favorites
} from 'lucide-react';
```

## 🔄 Close Dropdown

### On Click Outside
```tsx
useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
```

### On Escape Key
```tsx
useEffect(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') setIsOpen(false);
  };
  
  window.addEventListener('keydown', handleEscape);
  return () => window.removeEventListener('keydown', handleEscape);
}, []);
```

## 🎨 Design Tokens Used

### Colors
```css
var(--foreground)           /* Primary text */
var(--foreground-muted)     /* Secondary text */
var(--foreground-subtle)    /* Tertiary text */
var(--primary)              /* Links, badges */
var(--primary-hover)        /* Link hover */
var(--background-subtle)    /* Hover bg */
var(--background-muted)     /* Focus bg */
var(--border-muted)         /* Dividers */
```

### Spacing
```css
px-4 py-3    /* Item padding */
py-2         /* Section padding */
gap-3        /* Item gap */
space-y-0.5  /* Items spacing */
```

### Effects
```css
elevation-lg              /* Dropdown shadow */
rounded-[var(--radius-sm)] /* Corner radius */
transition-colors duration-[var(--transition-base)] /* Hover transition */
```

## ⚡ Performance Tips

1. **Limit items per section** (3-5 max)
2. **Debounce search input** (300ms)
3. **Use React.memo** for items if needed
4. **Lazy load sections** if data is heavy
5. **Cache search results** to reduce API calls

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Dropdown not showing | Check `isOpen` prop and z-index |
| Positioning wrong | Parent needs `position: relative` |
| Clicks not working | Check pointer-events and event handlers |
| Scrolling weird | Check max-height and overflow settings |
| Dropdown closes too fast | Add delay before closing on blur |

## 📱 Responsive Considerations

```tsx
// Full width on mobile
<SearchSuggestionsDropdown
  className="tablet:max-w-[600px]"
  isOpen={isOpen}
  query={query}
/>

// Fewer items on mobile
{isMobile 
  ? colleagues.slice(0, 3)
  : colleagues.slice(0, 5)
}
```

## ✅ Checklist

- [ ] Import all components
- [ ] Set up state (isOpen, query)
- [ ] Handle focus event
- [ ] Handle suggestion click
- [ ] Handle close on click outside
- [ ] Add keyboard shortcuts (optional)
- [ ] Test with real data
- [ ] Verify positioning
- [ ] Check mobile responsiveness
- [ ] Add loading states (optional)

---

**Quick Links**:
- [Full Documentation](./search-suggestions.md)
- [SearchInput Component](./search-input.md)
- [MegaMenu Pattern](./mega-menu.md)
