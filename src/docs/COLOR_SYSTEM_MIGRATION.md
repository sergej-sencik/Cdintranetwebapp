# Color System Migration Guide

## Problem

Several components use hardcoded hex colors instead of design system CSS variables. This creates:
- ❌ Inconsistencies across the application
- ❌ Difficulty maintaining consistent theming
- ❌ Inability to support dark mode properly
- ❌ Code that's harder to update when design changes

## Solution

Use CSS variables from `/styles/globals.css` design system.

## Color Mapping Reference

### Hardcoded → Design System Variable

#### Brand Colors
```css
/* PRIMARY BLUE */
#009FDA → var(--color-brand-primary) or var(--primary)
#0097CF → var(--color-blue-500)
#008BBE → var(--color-blue-600) or var(--primary-hover)
#007DA8 → var(--color-blue-700)
#006E96 → var(--color-blue-700)
#006388 → var(--color-blue-800)

/* SECONDARY/NAVY BLUE */
#002664 → var(--color-brand-secondary) or var(--foreground)

/* SUCCESS/GREEN */
#00AF3F → var(--color-brand-accent) or var(--accent)
#009436 → var(--color-success-600) or var(--accent-hover)
#007D2E → var(--color-success-700) or var(--accent-active)
#067647 → var(--color-success-600)
```

#### Neutral/Gray Colors
```css
/* TEXT COLORS */
#252B37 → var(--color-gray-700) or var(--card-foreground)
#535862 → var(--color-gray-600) or var(--secondary)
#717680 → var(--color-gray-500) or var(--muted-foreground)

/* BORDERS */
#E9EAEB → var(--color-gray-200) or var(--border-muted)
#D5D7DA → var(--color-gray-300) or var(--border)

/* BACKGROUNDS */
#FFFFFF → var(--color-white) or var(--background)
#FAFAFA → var(--color-gray-50)
#F2F3F5 → var(--color-gray-100)
```

#### State Colors
```css
/* SUCCESS */
#ECFDF3 → var(--color-success-50)
#ABEFC6 → var(--color-success-200)

/* WARNING */
#FEF6EE → var(--color-warning-50)
#FED7AA → var(--color-warning-200)
#DC6803 → var(--color-warning-700)

/* BLUE TINTS */
#F2FBFF → var(--color-blue-50)
#E6F7FF → var(--color-blue-100) or var(--sidebar-accent)
#E3F7FF → var(--color-blue-100)
#A0E1F9 → var(--color-blue-200)
```

## How to Use Design System Colors

### Option 1: Tailwind Utility Classes (Recommended)

```tsx
// ❌ BEFORE - Hardcoded
<div className="bg-[#009FDA] text-[#FFFFFF]">

// ✅ AFTER - Design System
<div className="bg-primary text-primary-foreground">
```

### Option 2: CSS Variables in Tailwind

```tsx
// ❌ BEFORE - Hardcoded
<div className="bg-[#00AF3F] hover:bg-[#009436]">

// ✅ AFTER - Design System
<div className="bg-accent hover:bg-accent-hover">
```

### Option 3: Direct CSS Variables

```tsx
// ❌ BEFORE - Hardcoded
<div style={{ backgroundColor: '#ECFDF3', borderColor: '#ABEFC6', color: '#067647' }}>

// ✅ AFTER - Design System
<div style={{ 
  backgroundColor: 'var(--color-success-50)', 
  borderColor: 'var(--color-success-200)', 
  color: 'var(--color-success-600)' 
}}>
```

## Component-Specific Fixes

### custom-button.tsx

#### Primary (Green) Variant
```tsx
// ❌ BEFORE
bg-[#00af3f] text-white
hover:bg-[#009436]
active:bg-[#007d2e]
ring-[#00af3f]

// ✅ AFTER
bg-accent text-accent-foreground
hover:bg-accent-hover
active:bg-accent-active
ring-accent
```

#### Secondary (Blue) Variant
```tsx
// ❌ BEFORE
text-[#0097cf]
hover:text-[#007da8]
active:text-[#006388]

// ✅ AFTER
text-blue-500
hover:text-blue-700
active:text-blue-800
```

#### Outline Variant
```tsx
// ❌ BEFORE
border-[#009fda] text-[#009fda]
hover:bg-[#e3f7ff]
active:bg-[#a0e1f9]

// ✅ AFTER
border-primary text-primary
hover:bg-blue-100
active:bg-blue-200
```

#### Ghost/Icon/Close Variants
```tsx
// ❌ BEFORE
text-[#535862]
text-[#717680]

// ✅ AFTER
text-secondary (or text-gray-600)
text-muted-foreground (or text-gray-500)
```

### Card Components (event-card, notification-card, blog-post-card)

#### Borders and Shadows
```tsx
// ❌ BEFORE
border-[#e9eaeb]
shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]
hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)]

// ✅ AFTER
border-border-muted (or border-gray-200)
shadow-sm (or elevation-sm)
hover:shadow-hover (or hover:elevation-hover)
```

#### Text Colors
```tsx
// ❌ BEFORE
text-[#002664]  /* Titles */
text-[#535862]  /* Body text */
text-[#0097cf]  /* Links/accents */
text-[#717680]  /* Icons */

// ✅ AFTER
text-foreground (or text-brand-secondary)
text-gray-600 (or text-secondary)
text-blue-500 (or text-primary)
text-gray-500 (or text-muted-foreground)
```

## Tailwind Config Shortcuts

With our design system, you can use these semantic class names:

### Backgrounds
- `bg-background` → White (light mode) / Gray-900 (dark mode)
- `bg-card` → White card background
- `bg-muted` → Subtle gray background
- `bg-primary` → Brand primary blue
- `bg-accent` → Brand accent green

### Text
- `text-foreground` → Navy blue (primary text)
- `text-muted-foreground` → Gray (secondary text)
- `text-primary` → Brand blue (links)
- `text-accent` → Brand green

### Borders
- `border-border` → Standard border (gray-300)
- `border-border-muted` → Subtle border (gray-200)
- `border-primary` → Primary blue border

### Shadows
- `shadow-sm` → Subtle shadow
- `shadow-md` → Medium shadow
- `shadow-lg` → Large shadow
- `shadow-hover` → Hover state shadow

Or use elevation classes:
- `elevation-sm`, `elevation-md`, `elevation-lg`, `elevation-hover`

## Migration Checklist

For each component with hardcoded colors:

- [ ] Identify all hex color codes
- [ ] Map to design system variables
- [ ] Replace with Tailwind utilities or CSS variables
- [ ] Test in light mode
- [ ] Test hover/active/focus states
- [ ] Verify accessibility (contrast ratios)
- [ ] Test dark mode compatibility (if applicable)

## Files Needing Updates

### High Priority (Custom Components)
- [x] `/components/ui/custom-button.tsx` - Multiple hardcoded colors
- [x] `/components/ui/event-card.tsx` - Card colors, text, badges
- [x] `/components/ui/notification-card.tsx` - Card colors, icons
- [x] `/components/ui/blog-post-card.tsx` - Card colors, shadows

### Medium Priority
- [ ] Any other card components
- [ ] Custom form inputs
- [ ] Modal/dialog components

### Low Priority
- [ ] One-off inline styles
- [ ] Figma-imported components (if they need updates)

## Benefits After Migration

✅ **Consistency** - All colors follow the same system
✅ **Maintainability** - Change once in globals.css, updates everywhere
✅ **Dark Mode Ready** - Design system supports automatic theme switching
✅ **Accessibility** - Design system colors have proper contrast ratios
✅ **Type Safety** - TypeScript autocomplete for color classes
✅ **Performance** - CSS variables are faster than inline styles

## Design System Color Tokens Available

### Semantic Tokens (Use These First)
```css
--primary, --primary-hover, --primary-active
--secondary, --secondary-hover, --secondary-active
--accent, --accent-hover, --accent-active
--destructive, --destructive-hover, --destructive-active
--background, --foreground
--card, --card-foreground
--border, --border-muted, --border-strong
--muted, --muted-foreground
```

### Color Palettes (Use When Semantic Tokens Don't Fit)
```css
/* Blues: --color-blue-50 through --color-blue-900 */
/* Grays: --color-gray-50 through --color-gray-900 */
/* Success: --color-success-50 through --color-success-900 */
/* Warning: --color-warning-50 through --color-warning-900 */
/* Error: --color-error-50 through --color-error-900 */
```

### Brand Colors
```css
--color-brand-primary (#009FDA)
--color-brand-secondary (#002664)
--color-brand-accent (#00AF3F)
```

---

**Next Steps:** Fix all components listed above to use design system colors.
