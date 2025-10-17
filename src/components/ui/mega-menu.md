# MegaMenu Component

## Overview

The `MegaMenu` is a global navigation dropdown component that displays multi-column layouts with various content types including standard menu items, featured cards, promotional cards, and call-to-action sections.

## Location

`/components/ui/mega-menu.tsx`

## Features

- **Hover-based interaction** with 150ms delay
- **Multi-column responsive grid** layout
- **Multiple column types:**
  - Standard menu columns with icons and links
  - Featured cards with images
  - Promotional cards with accent styling
  - CTA cards with gradient backgrounds
- **Icon support** via lucide-react
- **Global CSS variables** and design tokens
- **TypeScript** interfaces for type safety

## Components

### MegaMenu

The main dropdown component that renders the menu content.

#### Props

```typescript
interface MegaMenuProps {
  menuIndex: number;              // Index of menu to display
  menuData?: Record<number, MegaMenuData>;  // Menu data structure
  onClose: () => void;            // Close callback
}
```

### MegaMenuContainer

Wrapper component that manages hover state and menu visibility.

#### Props

```typescript
interface MegaMenuContainerProps {
  children: React.ReactNode;      // HeaderNavButton components
  menuData?: Record<number, MegaMenuData>;  // Menu data structure
}
```

## Data Structure

### MegaMenuData

```typescript
interface MegaMenuData {
  columns: MenuColumn[];
}
```

### MenuColumn

```typescript
interface MenuColumn {
  // Common
  title?: string;
  
  // For standard menu columns
  items?: MenuItem[];
  
  // For special column types
  type?: 'featured' | 'promo' | 'cta';
  
  // For featured and promo
  description?: string;
  image?: string;        // Only for 'featured'
  link?: string;
  icon?: string;         // Icon name from lucide-react
  
  // For CTA only
  subtitle?: string;
  phone?: string;
}
```

### MenuItem

```typescript
interface MenuItem {
  text: string;          // Display text
  icon: string;          // Icon name from lucide-react
  href?: string;         // Link URL
}
```

## Usage

### Basic Usage

```tsx
import { MegaMenuContainer } from './components/ui/mega-menu';
import { HeaderNavButton } from './components/ui/header-nav-button';

// Define your menu data
const menuData = {
  0: {
    columns: [
      {
        title: 'Section Title',
        items: [
          { text: 'Menu Item 1', icon: 'newspaper', href: '#' },
          { text: 'Menu Item 2', icon: 'zap', href: '#' }
        ]
      }
    ]
  }
};

// Use in your component
<MegaMenuContainer menuData={menuData}>
  <HeaderNavButton>Menu 1</HeaderNavButton>
  <HeaderNavButton>Menu 2</HeaderNavButton>
  <HeaderNavButton>Menu 3</HeaderNavButton>
</MegaMenuContainer>
```

### Column Types

#### 1. Standard Menu Column

```typescript
{
  title: 'Menu Title',
  items: [
    { text: 'Item 1', icon: 'newspaper', href: '#' },
    { text: 'Item 2', icon: 'calendar', href: '#' }
  ]
}
```

#### 2. Featured Card

```typescript
{
  type: 'featured',
  title: 'Featured Title',
  description: 'Description text',
  image: 'https://example.com/image.jpg',
  link: '#'
}
```

#### 3. Promotional Card

```typescript
{
  type: 'promo',
  title: 'Promo Title',
  description: 'Description text',
  icon: 'building',
  link: '#'
}
```

#### 4. CTA Card

```typescript
{
  type: 'cta',
  title: 'CTA Title',
  subtitle: 'Subtitle',
  phone: '+420 800 123 456',
  description: 'Call to action text',
  icon: 'headset'
}
```

## Styling

### CSS Variables Used

- `--background` - Background color
- `--foreground` - Text color
- `--foreground-muted` - Muted text color
- `--border` - Border color
- `--primary` - Primary/link color
- `--accent` - Accent color for CTA
- `--accent-hover` - Accent hover color
- `--color-blue-50` - Light blue background
- `--elevation-lg` - Shadow elevation
- `--elevation-md` - Medium shadow
- `--z-dropdown` - Z-index for dropdowns
- `--spacing-8` - Spacing (32px)
- `--radius-sm` - Border radius (4px)
- `--transition-base` - Transition duration (200ms)

### Custom Styling

The component uses Tailwind CSS classes and can be customized via:

1. **CSS Variables** - Change global design tokens in `styles/globals.css`
2. **Column grid** - Automatically adjusts based on number of columns
3. **Hover states** - Built-in transitions and hover effects

## Icons

Icons are sourced from `lucide-react`. Available icon names include:

- `newspaper`, `zap`, `map-pin`, `users`, `book-open`
- `calendar`, `building`, `star`, `ticket`, `briefcase`
- `shield`, `phone`, `search`, `network`, `grid`
- And many more...

See the `iconMap` in the component for the full list.

## Accessibility

- **ARIA roles** and labels (to be enhanced)
- **Keyboard navigation** support (to be enhanced)
- **Focus management** (to be enhanced)
- **Screen reader** support (to be enhanced)

## Examples

### Example 1: News Menu

```typescript
const newsMenu = {
  0: {
    columns: [
      {
        title: 'Aktuality',
        items: [
          { text: 'Všechny novinky', icon: 'newspaper', href: '#' },
          { text: 'Z regionů', icon: 'map-pin', href: '#' }
        ]
      },
      {
        type: 'featured',
        title: 'Novinky měsíce',
        description: 'Nejdůležitější události',
        image: 'https://example.com/featured.jpg',
        link: '#'
      }
    ]
  }
};
```

### Example 2: Support Menu with CTA

```typescript
const supportMenu = {
  0: {
    columns: [
      {
        title: 'IT Podpora',
        items: [
          { text: 'Nahlásit problém', icon: 'laptop', href: '#' },
          { text: 'Návody', icon: 'help-circle', href: '#' }
        ]
      },
      {
        type: 'cta',
        title: 'IT Helpdesk',
        subtitle: 'Nonstop podpora',
        phone: '+420 800 123 456',
        description: 'Volejte kdykoliv',
        icon: 'headset'
      }
    ]
  }
};
```

## Best Practices

1. **Keep column count reasonable** - 2-4 columns work best
2. **Use meaningful icons** - Choose icons that represent the content
3. **Optimize images** - Use appropriately sized images for featured cards
4. **Consistent structure** - Keep similar menus with similar structures
5. **Test hover delays** - Ensure 150ms delay feels natural
6. **Provide fallback data** - Use `defaultMegaMenusData` as reference

## Integration

The MegaMenu is integrated with:

- **Header component** (`/components/layout/Header.tsx`)
- **HeaderNavButton** for trigger elements
- **Global CSS** variables and design system
- **Responsive breakpoints** (planned enhancement)

## Future Enhancements

- [ ] Mobile responsive layout
- [ ] Enhanced keyboard navigation
- [ ] Animation improvements
- [ ] Dynamic loading of menu data
- [ ] Search within mega menu
- [ ] Recently viewed items
- [ ] Customizable column widths
- [ ] Dark mode support

## Related Components

- `HeaderNavButton` - Navigation trigger buttons
- `MobileNav` - Mobile navigation alternative
- `UserNavButton` - User profile dropdown
- `NotificationBadge` - Notification dropdown

## Notes

- The component uses a 150ms hover delay to prevent accidental menu closures
- Menu data should be defined at the application level
- Icons must be registered in the `iconMap`
- The component automatically manages z-index layering
