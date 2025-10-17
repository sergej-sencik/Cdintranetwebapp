# Showcase Pages Troubleshooting Guide

## Issue: Changes Not Visible in Browser

If you're not seeing the updated showcase pages (Font Styles, Color Styles), here are the steps to resolve:

### 1. Hard Refresh Browser

The most common issue is browser caching. Try:

**Chrome/Edge/Firefox:**
- Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
- Mac: `Cmd + Shift + R`

**Safari:**
- Mac: `Cmd + Option + R`

### 2. Clear Build Cache

If using a bundler (Vite, Webpack, etc.):

```bash
# Stop the dev server
# Delete cache directories
rm -rf node_modules/.vite
rm -rf node_modules/.cache

# Restart dev server
npm run dev
```

### 3. Verify Files Were Updated

Check that these files have the new imports:

**FontStylesShowcase.tsx:**
```tsx
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseHeader, 
  ShowcaseSection,
  ShowcaseCard,
  useShowcaseScroll 
} from './ui/showcase';
```

**ColorStylesShowcase.tsx:**
```tsx
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseHeader, 
  ShowcaseSection,
  useShowcaseScroll 
} from './ui/showcase';
import { ShowcaseColorCard } from './ui/showcase-color-card';
```

### 4. Check Console for Errors

Open browser DevTools (F12) and check Console tab for:
- Import errors
- TypeScript compilation errors
- Runtime errors

### 5. Verify Component Files Exist

Check that all these files exist:

```
/components/ui/
├── showcase/
│   ├── index.ts
│   └── README.md
├── showcase-sidebar.tsx
├── showcase-layout.tsx
├── showcase-header.tsx
├── showcase-section.tsx
├── showcase-card.tsx
├── showcase-content.tsx
├── showcase-color-card.tsx
└── use-showcase-scroll.ts

/content/
└── showcase-content.ts
```

### 6. Test Individual Components

Create a test page to verify components work:

```tsx
// Test.tsx
import { ShowcaseSidebar } from './components/ui/showcase';

export function Test() {
  return (
    <ShowcaseSidebar
      title="Test"
      sections={[{ id: 'test', label: 'Test Section' }]}
      activeSection="test"
      onSectionClick={(id) => console.log(id)}
    />
  );
}
```

### 7. Check Import Paths

Verify the import paths are correct:

```tsx
// From FontStylesShowcase.tsx or ColorStylesShowcase.tsx
import { ShowcaseLayout } from './ui/showcase';  // ✅ Correct
import { showcaseContent } from '../content/showcase-content'; // ✅ Correct
```

### 8. Restart Development Server

Sometimes a simple restart helps:

```bash
# Stop server (Ctrl+C)
# Clear terminal
# Start again
npm run dev
```

### 9. Check TypeScript Compilation

Run TypeScript check:

```bash
npx tsc --noEmit
```

Look for any type errors in the showcase components.

### 10. Verify URL Routes

Make sure you're navigating to the correct URLs:

- Font Styles: `http://localhost:5173/fonts`
- Color Styles: `http://localhost:5173/colors`
- Components: `http://localhost:5173/components`

## Expected Behavior

### Font Styles Page (/fonts)
You should see:
- ✅ Consistent sidebar on the left
- ✅ "Font Styles" as sidebar title
- ✅ Navigation items: Headings, Card Titles, Body Text, CSS Variables
- ✅ Main content with ShowcaseCard components
- ✅ Each example in a white card with border

### Color Styles Page (/colors)
You should see:
- ✅ Consistent sidebar on the left
- ✅ "Color System" as sidebar title
- ✅ Navigation items: Brand Colors, Neutral Colors, Blue Palette, Semantic Colors, Status Colors
- ✅ Color swatches with copy buttons
- ✅ Grid layout for color cards

## Visual Comparison

### OLD Layout (Before Changes)
- Different sidebar structure between pages
- Inline div elements for cards
- Inconsistent spacing
- Hardcoded content

### NEW Layout (After Changes)
- Identical sidebar across all pages
- ShowcaseCard components
- Consistent spacing (space-y-12, space-y-8)
- Data from showcaseContent

## Still Not Working?

If none of the above works, try:

1. **Check file timestamps** - Ensure files were actually saved
2. **Check git status** - Verify changes are in your working directory
3. **Check file permissions** - Ensure files are writable
4. **Try incognito/private mode** - Rule out browser extensions
5. **Try different browser** - Rule out browser-specific issues

## Contact

If issue persists, provide:
- Browser and version
- Node.js version
- Build tool (Vite/Webpack/etc.)
- Console errors (screenshot)
- Network tab (screenshot showing which files loaded)

---

**Most Common Fix**: Hard refresh browser with `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
