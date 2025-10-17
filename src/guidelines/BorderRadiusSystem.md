# Border Radius Design System

## Overview
This project uses a standardized two-tier border radius system for consistent UI design across all components.

## Border Radius Variables

### CSS Variables (defined in `/styles/globals.css`)
```css
--radius-sm: 4px;  /* Small radius for compact elements */
--radius-lg: 8px;  /* Large radius for bigger elements */
```

### Tailwind Mappings
```css
--color-radius-sm: var(--radius-sm);
--color-radius-lg: var(--radius-lg);
```

## Usage Rules

### When to use `--radius-sm` (4px)
Use this for **smaller UI elements** or elements with any side dimension **less than or equal to 120px**:

- ✅ Buttons (all sizes: sm, md, lg)
- ✅ Navigation items
- ✅ Input fields
- ✅ Badges
- ✅ Small cards
- ✅ Menu items
- ✅ Dropdown items
- ✅ Pills and tags
- ✅ Icon buttons

**Example:**
```tsx
<button style={{ borderRadius: 'var(--radius-sm)' }}>
  Click me
</button>
```

### When to use `--radius-lg` (8px)
Use this for **larger UI elements** with **minimum side dimension greater than 120px**:

- ✅ Large cards
- ✅ Featured content blocks
- ✅ Modal dialogs
- ✅ Panels and containers
- ✅ Image cards
- ✅ Promo blocks
- ✅ CTA sections
- ✅ Large hero sections

**Example:**
```tsx
<div 
  className="p-6 border border-gray-200"
  style={{ borderRadius: 'var(--radius-lg)' }}
>
  Large content card
</div>
```

## Implementation Examples

### HeaderNavButton Component
```tsx
<button
  className="px-[6px] py-[8px] ..."
  style={{ borderRadius: 'var(--radius-sm)' }}
>
  Navigation Item
</button>
```

### CustomButton Component
All button sizes use `--radius-sm`:
```tsx
<button
  className={buttonVariants({ variant, size })}
  style={{ borderRadius: 'var(--radius-sm)' }}
>
  Button Text
</button>
```

### MegaMenu Featured Card
```tsx
<a 
  href={link} 
  className="block overflow-hidden border"
  style={{ borderRadius: 'var(--radius-lg)' }}
>
  <img src={image} alt="Featured" />
  <div className="p-4">Content</div>
</a>
```

### MegaMenu Item Links
```tsx
<a 
  href="#" 
  className="flex items-center gap-3 p-3"
  style={{ borderRadius: 'var(--radius-sm)' }}
>
  Menu Item
</a>
```

## Components Using Radius System

### Currently Implemented
- ✅ `/components/ui/header-nav-button.tsx` - uses `--radius-sm`
- ✅ `/components/ui/custom-button.tsx` - uses `--radius-sm`
- ✅ `/components/MegaMenu.tsx`:
  - Featured cards: `--radius-lg`
  - Promo blocks: `--radius-lg`
  - CTA blocks: `--radius-lg`
  - Icon containers: `--radius-lg`
  - Menu item links: `--radius-sm`

### Best Practices

1. **Always use CSS variables** instead of hardcoded values:
   ```tsx
   // ✅ GOOD
   style={{ borderRadius: 'var(--radius-sm)' }}
   
   // ❌ BAD
   className="rounded-[4px]"
   style={{ borderRadius: '4px' }}
   ```

2. **Measure the smallest dimension** to determine which radius to use:
   ```tsx
   // Element is 100px × 200px → smallest side is 100px → use --radius-sm
   // Element is 200px × 300px → smallest side is 200px → use --radius-lg
   ```

3. **Consistency is key**: If similar elements exist in the UI, they should use the same radius value.

4. **No other radius values**: Only use these two defined values. No custom radius values should be introduced.

## Migration Guide

If you need to update an existing component:

1. Find any `rounded-*` Tailwind classes or inline `borderRadius` styles
2. Replace with appropriate CSS variable:
   ```tsx
   // Before
   className="rounded-md"
   
   // After
   style={{ borderRadius: 'var(--radius-sm)' }}
   ```

3. Determine if element should use `sm` or `lg` based on size rules
4. Test visual consistency with rest of UI

## Design Tokens Reference

| Variable | Value | Use Case |
|----------|-------|----------|
| `--radius-sm` | 4px | Small elements (≤120px) |
| `--radius-lg` | 8px | Large elements (>120px) |

---

*Last updated: 2025-01-13*
