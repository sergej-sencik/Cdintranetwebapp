# Search Suggestions Dropdown System

A personalized search suggester dropdown that appears when users focus on the main search input in the global header. Built with reusable atomic components following the existing design system.

## 📦 Components

### 1. **SearchSuggestionsDropdown** (Organism)
Main dropdown container that orchestrates the search suggestions experience.

**File**: `/components/ui/search-suggestions-dropdown.tsx`

**Props**:
- `isOpen` (boolean) - Controls dropdown visibility
- `query` (string) - Current search query
- `onSuggestionClick` (function) - Callback when a suggestion is selected
- `className` (string) - Optional custom classes

**Features**:
- Appears below search input on focus
- Categorized sections (Recent, Trending, Colleagues, Documents, News)
- Empty state for no results
- Keyboard shortcuts footer
- Smooth animations
- Auto-scrolling for long content

### 2. **SearchSuggestionSection** (Molecule)
Reusable section container with title and optional action link.

**File**: `/components/ui/search-suggestion-section.tsx`

**Props**:
- `title` (string) - Section heading
- `actionLabel` (string) - Optional action text (e.g., "View All")
- `onActionClick` (function) - Action click handler
- `children` (ReactNode) - Section content
- `className` (string) - Optional custom classes

**Usage**:
```tsx
<SearchSuggestionSection 
  title="Kolegové"
  actionLabel="Zobrazit všechny"
  onActionClick={() => console.log('View all')}
>
  {/* Items */}
</SearchSuggestionSection>
```

### 3. **SearchSuggestionItem** (Atom)
Individual suggestion item with icon, label, subtitle, and badge support.

**File**: `/components/ui/search-suggestion-item.tsx`

**Props**:
- `icon` (ReactNode) - Icon component (from lucide-react)
- `label` (string) - Main text
- `subtitle` (string) - Optional secondary text
- `badge` (string) - Optional badge/tag
- `onClick` (function) - Click handler
- `className` (string) - Optional custom classes

**Usage**:
```tsx
<SearchSuggestionItem
  icon={<User className="w-4 h-4" />}
  label="Jan Novák"
  subtitle="Senior Developer • IT oddělení"
  onClick={() => navigate('/profile/jan-novak')}
/>
```

## 🎨 Design System Integration

### Colors
All colors use CSS variables from the global design system:
- `var(--foreground)` - Primary text
- `var(--foreground-muted)` - Secondary text
- `var(--foreground-subtle)` - Tertiary text
- `var(--primary)` - Links and badges
- `var(--background-subtle)` - Hover state
- `var(--background-muted)` - Focus state
- `var(--border-muted)` - Section dividers

### Typography
Follows the global typography system:
- Section titles: `text-sm` with muted color
- Item labels: Default body text
- Subtitles: `text-sm` with muted color
- Badge: `text-xs`

### Spacing
Uses consistent spacing from the design system:
- Section padding: `py-2`
- Item padding: `px-4 py-3`
- Section header: `px-4 py-2`
- Gap between items: `space-y-0.5`

### Shadows & Borders
- Dropdown shadow: `elevation-lg` (from design system)
- Border: `border-[var(--border-muted)]`
- Corner radius: `rounded-[var(--radius-sm)]`

### Icons
Uses Lucide React icons matching the existing component library:
- Clock - Recent searches
- User - Colleagues
- FileText - Documents
- Newspaper - News
- TrendingUp - Trending items
- Search - Empty state

## 🔌 Integration

### In Header Component

```tsx
import { SearchSuggestionsDropdown } from '../ui/search-suggestions-dropdown';

function Input() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="relative">
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
      />
      
      <SearchSuggestionsDropdown
        isOpen={isDropdownOpen}
        query={searchQuery}
        onSuggestionClick={(suggestion) => {
          console.log('Selected:', suggestion);
          setIsDropdownOpen(false);
        }}
      />
    </div>
  );
}
```

## 🎯 Behavior

### Opening
- Dropdown opens when search input receives focus
- Displays default personalized content (recent, trending, etc.)

### Searching
- As user types, content can be filtered (implement in your logic)
- Shows empty state if no results match query
- Minimum 3 characters for search results (optional)

### Closing
- Click outside dropdown
- Press Escape key
- Select a suggestion
- Input loses focus (with delay to allow clicks)

### Keyboard Navigation (Future Enhancement)
- Arrow keys to navigate items
- Enter to select highlighted item
- Escape to close

## 📊 Data Structure

### Example Suggestion Objects

```tsx
// Recent Search
{
  id: 1,
  label: 'Výroční zpráva 2024',
  type: 'recent'
}

// Colleague
{
  id: 1,
  name: 'Jan Novák',
  department: 'IT oddělení',
  position: 'Senior Developer'
}

// Document
{
  id: 1,
  title: 'Výroční zpráva 2024',
  date: '15. 12. 2024',
  type: 'PDF'
}

// News Article
{
  id: 1,
  title: 'Nové benefity pro zaměstnance',
  date: '18. 12. 2024',
  category: 'HR'
}

// Trending Item
{
  id: 1,
  label: 'Vánoční večírek 2024',
  badge: 'Populární'
}
```

## 🔄 Customization

### Adding New Sections

```tsx
<SearchSuggestionSection title="Vaše projekty">
  {projects.map((project) => (
    <SearchSuggestionItem
      key={project.id}
      icon={<Folder className="w-4 h-4" />}
      label={project.name}
      subtitle={project.status}
      onClick={() => navigate(`/projects/${project.id}`)}
    />
  ))}
</SearchSuggestionSection>
```

### Custom Icons
Import any icon from lucide-react:
```tsx
import { Folder, Settings, Star, Calendar } from 'lucide-react';
```

### Styling Variations
Use className prop for one-off customizations:
```tsx
<SearchSuggestionItem
  className="bg-blue-50 border-l-2 border-blue-500"
  label="Featured Item"
/>
```

## ♿ Accessibility

- Semantic HTML structure
- Focus visible states on all interactive elements
- ARIA labels for screen readers (future enhancement)
- Keyboard navigation support (planned)
- Clear visual hierarchy

## 🚀 Performance

- Lazy loading of dropdown content
- Debounced search queries (implement in parent)
- Virtualized lists for large datasets (future)
- Optimized re-renders with React.memo (if needed)

## 📱 Responsive Design

Currently optimized for desktop. Mobile considerations:
- Full-width dropdown on mobile
- Touch-friendly item heights
- Simplified sections for smaller screens
- Consider bottom sheet on mobile (future)

## 🔗 Related Components

- **SearchInput** - Main search input component
- **MegaMenuContainer** - Similar dropdown pattern
- **DropdownMenuItem** - Similar item pattern
- **UserNavButton** - Similar dropdown trigger

## 🎓 Best Practices

1. **Keep data fresh** - Update suggestions based on user behavior
2. **Personalize** - Show relevant items for each user
3. **Limit items** - Show 3-5 items per section max
4. **Fast response** - Load data quickly or show skeleton states
5. **Clear hierarchy** - Use sections to organize content
6. **Consistent icons** - Match icon meanings across app

## 🐛 Troubleshooting

### Dropdown not showing
- Check `isOpen` prop is true
- Verify z-index (`z-[var(--z-dropdown)]`)
- Check parent overflow settings

### Positioning issues
- Parent must have `position: relative`
- Dropdown uses `absolute` positioning
- May need portal for complex layouts

### Clicks not registering
- Check pointer-events on overlays
- Verify click handlers are attached
- Check event propagation

## 📝 Future Enhancements

- [ ] Keyboard navigation (Arrow keys, Enter, Escape)
- [ ] ARIA attributes for screen readers
- [ ] Search result highlighting
- [ ] Category filtering
- [ ] Search history management
- [ ] Analytics tracking
- [ ] Mobile-optimized layout
- [ ] Loading states
- [ ] Error states
- [ ] Infinite scroll for large datasets

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Maintainer**: Design System Team
