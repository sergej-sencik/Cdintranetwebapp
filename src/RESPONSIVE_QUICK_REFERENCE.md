# Responsive Design Quick Reference

## Breakpoints Cheat Sheet

```
Mobile First Approach:
═══════════════════════════════════════════════════════════════

< 375px     │ Too small (edge case)
────────────┼────────────────────────────────────────────────
375px - 639px  │ Mobile (default, no prefix)
────────────┼────────────────────────────────────────────────
640px - 767px  │ sm: Large Mobile / Small Tablet
────────────┼────────────────────────────────────────────────
768px - 1023px │ md: Tablet
────────────┼────────────────────────────────────────────────
1024px - 1279px│ lg: Desktop
────────────┼────────────────────────────────────────────────
1280px - 1535px│ xl: Large Desktop
────────────┼────────────────────────────────────────────────
1536px+     │ 2xl: Extra Large Desktop
═══════════════════════════════════════════════════════════════
```

## Common Responsive Patterns

### 📱 Layout Stacking
```tsx
// Mobile: Vertical stack
// Desktop: Horizontal layout
<div className="flex flex-col lg:flex-row gap-6">
  <div className="w-full lg:w-1/3">Sidebar</div>
  <div className="w-full lg:w-2/3">Content</div>
</div>
```

### 📐 Grid Systems
```tsx
// 1 col mobile → 2 col tablet → 3 col desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>

// 1 col mobile → 2 col tablet → 4 col desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### 📦 Container Sizing
```tsx
// Full width on mobile, constrained on desktop
<div className="w-full max-w-[1280px] mx-auto px-4 lg:px-8">
  Content
</div>

// Responsive width
<div className="w-full md:w-3/4 lg:w-1/2">
  Content
</div>
```

### 🎨 Spacing
```tsx
// Responsive padding
<div className="p-4 md:p-6 lg:p-8">

// Responsive margin
<div className="my-4 md:my-6 lg:my-8">

// Responsive gap
<div className="gap-3 md:gap-4 lg:gap-6">
```

### 👁️ Visibility
```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">Mobile only</div>

// Show only on tablet
<div className="hidden md:block lg:hidden">Tablet only</div>
```

### 🖼️ Images
```tsx
// Responsive aspect ratio
<div className="aspect-video w-full">
  <img src={src} className="w-full h-full object-cover" />
</div>

// Different sizes
<div className="w-16 md:w-24 lg:w-32">
  <img src={src} className="w-full h-auto" />
</div>
```

### 📝 Typography
```tsx
// Use CSS variables (preferred)
<h1 className="text-h1">Heading</h1>

// Or responsive Tailwind classes
<p className="text-sm md:text-base lg:text-lg">
  Responsive text
</p>
```

## Component-Specific Patterns

### Header Component
```tsx
<header>
  {/* Logo - always visible */}
  <Logo />
  
  {/* Search - responsive width */}
  <Search className="w-full lg:w-[400px]" />
  
  {/* User profile - hide on mobile */}
  <UserProfile className="hidden lg:flex" />
  
  {/* Mobile menu - hide on desktop */}
  <MobileMenu className="lg:hidden" />
</header>
```

### Card Component
```tsx
<div className="w-full">
  {/* Responsive image */}
  <div className="aspect-video w-full">
    <img className="w-full h-full object-cover" />
  </div>
  
  {/* Responsive padding */}
  <div className="p-4 md:p-6">
    <h3 className="text-h4">Title</h3>
    <p className="text-sm md:text-base">Description</p>
  </div>
</div>
```

### Sidebar Layout
```tsx
<div className="flex flex-col lg:flex-row gap-6">
  {/* Sidebar */}
  <aside className="w-full lg:w-64">
    {/* Desktop sidebar */}
    <div className="hidden lg:block sticky top-4">
      <Navigation />
    </div>
    
    {/* Mobile tabs */}
    <div className="lg:hidden">
      <HorizontalTabs />
    </div>
  </aside>
  
  {/* Main content */}
  <main className="flex-1 min-w-0">
    {children}
  </main>
</div>
```

### Form Layout
```tsx
<form className="space-y-4">
  {/* Full width on mobile, grid on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input label="First Name" />
    <Input label="Last Name" />
  </div>
  
  {/* Full width input */}
  <Input label="Email" className="w-full" />
  
  {/* Button group - stack on mobile, inline on desktop */}
  <div className="flex flex-col sm:flex-row gap-3">
    <Button>Submit</Button>
    <Button variant="secondary">Cancel</Button>
  </div>
</form>
```

## Testing Checklist

### Desktop (1280px+)
- [ ] All features visible and accessible
- [ ] Multi-column layouts render correctly
- [ ] Mega menu works properly
- [ ] Sidebar navigation visible
- [ ] Proper spacing and white space

### Tablet (768px - 1023px)
- [ ] Columns collapse appropriately (4 → 2)
- [ ] Touch targets are large enough (44x44px min)
- [ ] Simplified navigation if needed
- [ ] Readable text without zooming

### Mobile (< 768px)
- [ ] Single column layout
- [ ] Hamburger menu accessible
- [ ] No horizontal scroll
- [ ] All content reachable
- [ ] Touch-friendly buttons
- [ ] Readable text size
- [ ] Images scale properly

### Edge Cases
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13/14)
- [ ] 414px (iPhone Plus models)
- [ ] 820px (iPad in portrait)
- [ ] 1024px (iPad in landscape)
- [ ] In-between sizes (e.g., 900px)

## Common Pitfalls to Avoid

❌ **Don't:**
- Use fixed widths without responsive alternatives
- Forget to test in-between breakpoints
- Use `display: none` when content should be accessible
- Ignore touch target sizes on mobile
- Use horizontal scroll (except for carousels)
- Use tiny text on mobile (< 14px)
- Nest too many responsive utilities (gets confusing)

✅ **Do:**
- Use mobile-first approach
- Test on real devices
- Use semantic HTML
- Ensure keyboard navigation works
- Make touch targets minimum 44x44px
- Use aspect ratios for images
- Keep container widths fluid
- Use CSS variables for consistency

## Debugging Tips

### Check Current Breakpoint
```tsx
import { useResponsive } from './use-responsive';

function DebugBreakpoint() {
  const { breakpoint, width } = useResponsive();
  
  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded">
      {breakpoint} ({width}px)
    </div>
  );
}
```

### Tailwind Debug Screens
Add this to your layout temporarily:
```tsx
<div className="fixed bottom-0 left-0 bg-black text-white p-2 text-xs">
  <div className="sm:hidden">XS (< 640px)</div>
  <div className="hidden sm:block md:hidden">SM (≥ 640px)</div>
  <div className="hidden md:block lg:hidden">MD (≥ 768px)</div>
  <div className="hidden lg:block xl:hidden">LG (≥ 1024px)</div>
  <div className="hidden xl:block 2xl:hidden">XL (≥ 1280px)</div>
  <div className="hidden 2xl:block">2XL (≥ 1536px)</div>
</div>
```

## Quick Commands

### Test Specific Width in Chrome DevTools
```
Ctrl/Cmd + Shift + M → Toggle device toolbar
Ctrl/Cmd + Shift + C → Inspect element
```

### Common Test Widths
- 375px - iPhone SE
- 390px - iPhone 12/13/14
- 428px - iPhone 14 Plus
- 768px - iPad Portrait
- 1024px - iPad Landscape
- 1280px - Desktop
- 1920px - Full HD

---

**Pro Tip**: Always test at 375px, 768px, 1024px, and 1280px minimum!
