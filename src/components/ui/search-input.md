# SearchInput Component

## Overview

The `SearchInput` is a comprehensive global component for search functionality across the application. It provides consistent styling, multiple states, keyboard shortcuts, and full accessibility support following frontend development best practices.

## Location

`/components/ui/search-input.tsx`

## Features

- ✅ **Search icon** - Lucide Search icon with consistent styling (`strokeWidth: 1.67`)
- ✅ **Multiple sizes** - Small (sm), Medium (md), Large (lg)
- ✅ **Focus states** - Border color transition with ring effect
- ✅ **Clear button** - Optional X button to clear input
- ✅ **Loading state** - Animated spinner replacing search icon
- ✅ **Disabled state** - Greyed out with reduced opacity
- ✅ **Invalid/Error state** - Red border with error message
- ✅ **Keyboard shortcuts** - Enter to search, Escape to clear
- ✅ **Icon positioning** - Left or right placement
- ✅ **Controlled/Uncontrolled** - Supports both modes
- ✅ **Full accessibility** - ARIA labels, roles, and descriptions
- ✅ **Global CSS variables** - All colors and spacings use design tokens
- ✅ **TypeScript** - Complete type safety

## Components

### SearchInput

Main search input component with all features.

#### Props

```typescript
interface SearchInputProps {
  /** Placeholder text */
  placeholder?: string;
  
  /** Current value (controlled mode) */
  value?: string;
  
  /** Default value (uncontrolled mode) */
  defaultValue?: string;
  
  /** Change handler with string value */
  onChange?: (value: string) => void;
  
  /** Search handler (triggered on Enter or button click) */
  onSearch?: (value: string) => void;
  
  /** Clear handler */
  onClear?: () => void;
  
  /** Show clear button when input has value */
  showClearButton?: boolean; // default: true
  
  /** Loading state */
  isLoading?: boolean; // default: false
  
  /** Disabled state */
  disabled?: boolean; // default: false
  
  /** Error/invalid state */
  isInvalid?: boolean; // default: false
  
  /** Error message */
  errorMessage?: string;
  
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'; // default: 'md'
  
  /** Additional CSS classes */
  className?: string;
  
  /** Icon position */
  iconPosition?: 'left' | 'right'; // default: 'left'
  
  /** Custom search icon */
  searchIcon?: React.ReactNode;
  
  /** ARIA label for accessibility */
  'aria-label'?: string; // default: 'Search'
  
  // Plus all standard HTML input props (except type and onChange)
}
```

### HeaderSearchInput

Specialized variant for header with border wrapper.

#### Props

```typescript
interface HeaderSearchInputProps extends Omit<SearchInputProps, 'size'> {
  /** Show border around the entire container */
  showBorder?: boolean; // default: true
}
```

## Usage

### Basic Usage

```tsx
import { SearchInput } from './components/ui/search-input';

<SearchInput 
  placeholder="Search..."
  onSearch={(value) => console.log('Searching for:', value)}
/>
```

### With Change Handler

```tsx
<SearchInput 
  placeholder="Search..."
  onChange={(value) => setSearchTerm(value)}
  onSearch={(value) => performSearch(value)}
/>
```

### Controlled Mode

```tsx
const [searchValue, setSearchValue] = useState('');

<SearchInput 
  value={searchValue}
  onChange={setSearchValue}
  onSearch={(value) => performSearch(value)}
  placeholder="Type to search..."
/>
```

### Uncontrolled Mode

```tsx
<SearchInput 
  defaultValue="initial search"
  onSearch={(value) => performSearch(value)}
  placeholder="Search..."
/>
```

### With Clear Button

```tsx
<SearchInput 
  placeholder="Search..."
  showClearButton={true}
  onClear={() => console.log('Search cleared')}
  onSearch={(value) => performSearch(value)}
/>
```

### Size Variants

```tsx
{/* Small */}
<SearchInput size="sm" placeholder="Small search..." />

{/* Medium (default) */}
<SearchInput size="md" placeholder="Medium search..." />

{/* Large */}
<SearchInput size="lg" placeholder="Large search..." />
```

### Loading State

```tsx
<SearchInput 
  isLoading={true}
  placeholder="Searching..."
  disabled={true} // Typically disabled while loading
/>
```

### Invalid State with Error

```tsx
<SearchInput 
  isInvalid={true}
  errorMessage="Please enter at least 3 characters"
  placeholder="Search..."
/>
```

### Disabled State

```tsx
<SearchInput 
  disabled={true}
  placeholder="Search is disabled"
/>
```

### Icon Positioning

```tsx
{/* Icon on left (default) */}
<SearchInput iconPosition="left" placeholder="Search..." />

{/* Icon on right */}
<SearchInput iconPosition="right" placeholder="Search..." />
```

### Custom Search Icon

```tsx
import { Filter } from 'lucide-react';

<SearchInput 
  searchIcon={<Filter className="w-5 h-5" />}
  placeholder="Filter results..."
/>
```

### Header Variant

```tsx
import { HeaderSearchInput } from './components/ui/search-input';

<HeaderSearchInput 
  placeholder="Hledejte kolegu, dokument nebo novinku..."
  onSearch={(value) => performGlobalSearch(value)}
/>
```

## Keyboard Shortcuts

### Enter Key
- **Action**: Triggers search
- **Calls**: `onSearch(currentValue)`
- **Behavior**: Does not blur input, allows immediate continued typing

### Escape Key
- **Action**: Clears input and blurs
- **Calls**: `onChange('')`, `onClear()`
- **Behavior**: Removes focus from input field

## States

### 1. Default State
- White background (`var(--input-background)`)
- Gray border (`var(--input-border)`)
- Gray search icon (`var(--foreground-muted)`)
- Placeholder text in gray

### 2. Focus State
- Blue border (`var(--input-border-focus)`)
- Ring effect (`var(--ring)` with 20% opacity)
- Search icon turns blue (`var(--primary)`)
- Smooth transition (200ms)

### 3. Filled State (with value)
- Same as default
- Clear button (X) appears on right
- Hover on X changes color

### 4. Hover State (Clear Button)
- X icon changes from muted to foreground color
- Smooth color transition

### 5. Loading State
- Search icon replaced with spinning loader
- Input typically disabled
- Cursor shows wait state

### 6. Invalid State
- Red border (`var(--destructive)`)
- Red ring effect (20% opacity)
- Red search icon
- Error message below input

### 7. Disabled State
- 50% opacity
- Not-allowed cursor
- Muted background
- All interactions disabled

## Size Specifications

### Small (sm)
- **Height**: 32px (h-8)
- **Padding**: 12px horizontal, 6px vertical
- **Text**: 13px
- **Icon**: 16px × 16px

### Medium (md) - Default
- **Height**: 40px (h-10)
- **Padding**: 12px horizontal, 8px vertical
- **Text**: 14px
- **Icon**: 20px × 20px

### Large (lg)
- **Height**: 48px (h-12)
- **Padding**: 16px horizontal, 12px vertical
- **Text**: 16px
- **Icon**: 24px × 24px

## CSS Variables Used

### Colors
```css
--input-background         /* Input background (white) */
--input-border            /* Default border color */
--input-border-focus      /* Focus border color (primary) */
--foreground              /* Text color */
--foreground-muted        /* Placeholder and icon color */
--primary                 /* Focus state color */
--primary-foreground      /* Selection text color */
--destructive             /* Error state color */
--muted                   /* Disabled background */
--ring                    /* Focus ring color */
```

### Layout
```css
--radius-input            /* Border radius (4px) */
```

### Animation
```css
--transition-base         /* Transition duration (200ms) */
```

## Accessibility

### ARIA Support
```tsx
<SearchInput 
  aria-label="Search documents"
  aria-invalid={isInvalid}
  aria-describedby="search-error"
/>
```

### Features
- ✅ Proper `aria-label` for screen readers
- ✅ `aria-invalid` for error state
- ✅ `aria-describedby` links to error message
- ✅ Error message has `role="alert"`
- ✅ Clear button has descriptive `aria-label`
- ✅ Semantic HTML (`<input type="text">`)
- ✅ Focus visible outline
- ✅ Keyboard navigation support

### Screen Reader Announcements
- Input label announced on focus
- Error messages announced when invalid
- Clear button announced as "Clear search"
- Loading state communicated via disabled attribute

## Integration Examples

### Header Search (Current Implementation)

```tsx
// In /components/layout/Header.tsx
import { SearchInput } from '../ui/search-input';

<div className="bg-white rounded-[4px] w-full border border-[var(--border)]">
  <SearchInput
    placeholder="Hledejte kolegu, dokument nebo novinku..."
    onSearch={(value) => console.log('Search:', value)}
    showClearButton={false}
    size="md"
    className="border-0"
  />
</div>
```

### Search Page with Filters

```tsx
const [searchTerm, setSearchTerm] = useState('');
const [isSearching, setIsSearching] = useState(false);

const handleSearch = async (value: string) => {
  setIsSearching(true);
  try {
    const results = await fetchSearchResults(value);
    setResults(results);
  } finally {
    setIsSearching(false);
  }
};

<SearchInput
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
  isLoading={isSearching}
  size="lg"
  placeholder="Search articles, documents, and more..."
/>
```

### Form Validation

```tsx
const [searchTerm, setSearchTerm] = useState('');
const [error, setError] = useState('');

const handleSearch = (value: string) => {
  if (value.length < 3) {
    setError('Please enter at least 3 characters');
    return;
  }
  setError('');
  performSearch(value);
};

<SearchInput
  value={searchTerm}
  onChange={(value) => {
    setSearchTerm(value);
    if (error) setError(''); // Clear error on typing
  }}
  onSearch={handleSearch}
  isInvalid={!!error}
  errorMessage={error}
  placeholder="Search..."
/>
```

### Debounced Search

```tsx
import { useState, useEffect } from 'react';

const [searchTerm, setSearchTerm] = useState('');
const [debouncedTerm, setDebouncedTerm] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedTerm(searchTerm);
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm]);

useEffect(() => {
  if (debouncedTerm) {
    performSearch(debouncedTerm);
  }
}, [debouncedTerm]);

<SearchInput
  value={searchTerm}
  onChange={setSearchTerm}
  placeholder="Type to search (auto-search after 500ms)..."
/>
```

## Best Practices

### 1. Always Provide Placeholder
```tsx
// ✅ Good - Descriptive placeholder
<SearchInput placeholder="Search by name, email, or department..." />

// ❌ Bad - No context
<SearchInput />
```

### 2. Handle Search Properly
```tsx
// ✅ Good - Validate before searching
const handleSearch = (value: string) => {
  if (!value.trim()) return;
  performSearch(value.trim());
};

// ❌ Bad - No validation
const handleSearch = (value: string) => {
  performSearch(value);
};
```

### 3. Use Appropriate Size
```tsx
// ✅ Good - Large for prominent search
<SearchInput size="lg" /> // Main search page

// ✅ Good - Medium for headers
<SearchInput size="md" /> // Header search

// ✅ Good - Small for filters
<SearchInput size="sm" /> // Filter inputs
```

### 4. Show Loading State
```tsx
// ✅ Good - Show loading during async search
const [isLoading, setIsLoading] = useState(false);

<SearchInput
  isLoading={isLoading}
  disabled={isLoading}
  onSearch={async (value) => {
    setIsLoading(true);
    await performSearch(value);
    setIsLoading(false);
  }}
/>
```

### 5. Provide Clear Feedback
```tsx
// ✅ Good - Clear error messages
<SearchInput
  isInvalid={true}
  errorMessage="No results found. Try different keywords."
/>

// ❌ Bad - Generic error
<SearchInput isInvalid={true} errorMessage="Error" />
```

## Advanced Usage

### With Autocomplete Dropdown

```tsx
const [suggestions, setSuggestions] = useState([]);
const [showDropdown, setShowDropdown] = useState(false);

<div className="relative">
  <SearchInput
    value={searchTerm}
    onChange={(value) => {
      setSearchTerm(value);
      fetchSuggestions(value).then(setSuggestions);
      setShowDropdown(true);
    }}
    onSearch={performSearch}
  />
  {showDropdown && suggestions.length > 0 && (
    <div className="absolute top-full left-0 w-full bg-white border rounded-md mt-1">
      {suggestions.map(suggestion => (
        <button
          key={suggestion.id}
          onClick={() => {
            setSearchTerm(suggestion.text);
            setShowDropdown(false);
            performSearch(suggestion.text);
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          {suggestion.text}
        </button>
      ))}
    </div>
  )}
</div>
```

### With Recent Searches

```tsx
const [recentSearches, setRecentSearches] = useState<string[]>([]);

const handleSearch = (value: string) => {
  // Add to recent searches
  setRecentSearches(prev => [value, ...prev.filter(s => s !== value)].slice(0, 5));
  performSearch(value);
};

<div>
  <SearchInput onSearch={handleSearch} />
  {recentSearches.length > 0 && (
    <div className="mt-2">
      <p className="text-sm text-gray-500">Recent searches:</p>
      <div className="flex gap-2 mt-1">
        {recentSearches.map(term => (
          <button
            key={term}
            onClick={() => performSearch(term)}
            className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )}
</div>
```

## Styling Customization

### Custom Class Names

```tsx
<SearchInput
  className="shadow-lg"
  placeholder="Search..."
/>
```

### Custom Container

```tsx
<div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
  <SearchInput
    className="shadow-md"
    placeholder="Enhanced search..."
  />
</div>
```

## Troubleshooting

### Issue: Clear Button Not Showing

**Problem:** Clear button doesn't appear even with value

**Solution:** Check `showClearButton` prop

```tsx
// ✅ Correct
<SearchInput showClearButton={true} />

// ❌ Wrong - explicitly disabled
<SearchInput showClearButton={false} />
```

### Issue: onSearch Not Firing

**Problem:** Search handler not called on Enter

**Solution:** Make sure event isn't prevented elsewhere

```tsx
// ✅ Correct
<SearchInput onSearch={(value) => console.log(value)} />

// Check parent form doesn't prevent default
<form onSubmit={(e) => e.preventDefault()}>
  <SearchInput onSearch={handleSearch} />
</form>
```

### Issue: Focus Ring Not Visible

**Problem:** Focus state doesn't show ring

**Solution:** Ensure CSS variables are defined

```css
:root {
  --ring: #009FDA;
  --input-border-focus: #009FDA;
}
```

## Migration from Old Input

### Before (Header.tsx)
```tsx
<div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
  <SearchLg />
  <p className="...">Hledejte kolegu, dokument nebo novinku...</p>
</div>
```

### After
```tsx
<SearchInput
  placeholder="Hledejte kolegu, dokument nebo novinku..."
  onSearch={(value) => console.log('Search:', value)}
  showClearButton={false}
  size="md"
  className="border-0"
/>
```

### Benefits
- ✅ Consistent styling across all search inputs
- ✅ Built-in states (focus, disabled, loading, error)
- ✅ Keyboard shortcuts (Enter, Escape)
- ✅ Full accessibility
- ✅ Type-safe props
- ✅ Easy to maintain
- ✅ Reusable everywhere

## Related Components

- **Input** (`/components/ui/input.tsx`) - Basic text input (ShadCN)
- **DropdownMenuItem** - For dropdown search results
- **CustomButton** - For search buttons
- **HeaderNavButton** - For header navigation

## Future Enhancements

- [ ] Voice search support
- [ ] Search history with localStorage
- [ ] Advanced filters integration
- [ ] Search suggestions API
- [ ] Mobile optimized keyboard
- [ ] Search analytics tracking
- [ ] Fuzzy search support
- [ ] Multi-language search

## Notes

- Component uses `forwardRef` for ref forwarding
- Supports both controlled and uncontrolled modes automatically
- Icon stroke width is 1.67 for consistency with design system
- All transitions use global `--transition-base` (200ms)
- Clear button only shows when `showClearButton={true}` AND input has value
- Loading state automatically replaces search icon with spinner
- Error messages have proper ARIA attributes for accessibility
