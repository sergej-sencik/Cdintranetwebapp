# MegaMenu Quick Reference

## Import

```tsx
import { MegaMenuContainer, MegaMenu, defaultMegaMenusData, type MegaMenuData } from './components/ui/mega-menu';
```

## Basic Setup

```tsx
const menuData = {
  0: {
    columns: [
      {
        title: 'Section',
        items: [
          { text: 'Link 1', icon: 'newspaper', href: '#' },
          { text: 'Link 2', icon: 'calendar', href: '#' }
        ]
      }
    ]
  }
};

<MegaMenuContainer menuData={menuData}>
  <HeaderNavButton>Menu 1</HeaderNavButton>
  <HeaderNavButton>Menu 2</HeaderNavButton>
</MegaMenuContainer>
```

## Column Types

### Standard Menu
```tsx
{
  title: 'Title',
  items: [
    { text: 'Item', icon: 'icon-name', href: '#' }
  ]
}
```

### Featured Card
```tsx
{
  type: 'featured',
  title: 'Title',
  description: 'Text',
  image: 'url',
  link: '#'
}
```

### Promo Card
```tsx
{
  type: 'promo',
  title: 'Title',
  description: 'Text',
  icon: 'icon-name',
  link: '#'
}
```

### CTA Card
```tsx
{
  type: 'cta',
  title: 'Title',
  subtitle: 'Subtitle',
  phone: '+420 800 123 456',
  description: 'Text',
  icon: 'icon-name'
}
```

## Key Features

- ✅ Hover-based with 150ms delay
- ✅ Multi-column grid layout
- ✅ Multiple column types
- ✅ Global CSS variables
- ✅ Icon support (lucide-react)
- ✅ TypeScript interfaces

## CSS Variables

- `--background`, `--foreground`
- `--border`, `--primary`, `--accent`
- `--elevation-lg`, `--z-dropdown`
- `--spacing-8`, `--radius-sm`
- `--transition-base`

## Common Icons

`newspaper`, `calendar`, `users`, `building`, `star`, `phone`, `search`, `grid`, `shield`, `book`, `heart`, `clock`

## Tips

1. Keep 2-4 columns per menu
2. Use meaningful icons
3. Optimize featured images
4. Test hover timing
5. Define data at app level
