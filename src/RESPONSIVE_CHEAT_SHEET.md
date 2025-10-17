# 📋 Responsive Design - Cheat Sheet

## 🎯 Quick Reference

### Breakpoints
```
📱 Mobile:  320px - 767px
📱 Tablet:  768px - 1023px
🖥️ Desktop: 1024px+
```

---

## 🪝 React Hook

```tsx
import { useBreakpoint } from '../hooks/useBreakpoint';

const { device, isMobile, isTablet, isDesktop, width } = useBreakpoint();
```

---

## 🎨 CSS Classes

### Display
```css
.mobile\:hidden    .tablet\:hidden    .desktop\:hidden
.mobile\:block     .tablet\:block     .desktop\:block
.mobile\:flex      .tablet\:flex      .desktop\:flex
```

### Layout
```css
.mobile\:flex-col     .tablet\:flex-row     .desktop\:grid
.mobile\:w-full       .tablet\:w-1/2        .desktop\:w-1/3
```

### Spacing
```css
.mobile\:p-4 .mobile\:gap-4
.tablet\:p-6 .tablet\:gap-6
.desktop\:p-8 .desktop\:gap-8
```

### Pre-built
```css
.responsive-container  /* Auto container with padding */
.responsive-section    /* Auto section spacing */
.responsive-grid       /* Auto 1/2/3 column grid */
```

---

## 🛠️ Helper Functions

```tsx
import { 
  deviceClass,
  getContainerPadding,
  getSectionSpacing,
  getGridColumns 
} from '../utils/responsive';

const { device } = useBreakpoint();

// Conditional classes
deviceClass(device, {
  mobile: 'text-sm',
  tablet: 'text-base',
  desktop: 'text-lg'
})

// Pre-built helpers
getContainerPadding(device)  // 'px-4', 'px-6', 'px-8'
getSectionSpacing(device)    // 'py-8', 'py-12', 'py-16'
getGridColumns(device)       // 1, 2, 3
```

---

## 📏 Design Tokens

### Container
```
Mobile:  100% width, 16px padding
Tablet:  768px max, 24px padding
Desktop: 1280px max, 32px padding
```

### Spacing
```
Section:  32px / 48px / 64px
Grid Gap: 16px / 24px / 32px
```

### Touch Targets
```
Mobile:  44px minimum (WCAG)
Tablet:  44px minimum (WCAG)
Desktop: 40px minimum
```

---

## 💡 Common Patterns

### Pattern 1: Responsive Grid
```tsx
<div className="
  grid gap-4
  mobile:grid-cols-1
  tablet:grid-cols-2
  desktop:grid-cols-3
">
```

### Pattern 2: Conditional Render
```tsx
{isMobile && <MobileView />}
{isDesktop && <DesktopView />}
```

### Pattern 3: Hide/Show
```tsx
<div className="mobile:hidden">Desktop Only</div>
<div className="desktop:hidden">Mobile Only</div>
```

### Pattern 4: Responsive Container
```tsx
<div className="responsive-container">
  <section className="responsive-section">
    <div className="responsive-grid">
      {/* Cards */}
    </div>
  </section>
</div>
```

---

## 🔍 Debug

```tsx
import { BreakpointDebugger } from '../components/BreakpointDebugger';

<BreakpointDebugger position="bottom-right" />
```

---

## ✅ Testing Points

- [ ] 320px (Small mobile)
- [ ] 375px (iPhone)
- [ ] 768px (Tablet)
- [ ] 1024px (Desktop)
- [ ] 1280px (Desktop standard)

---

## 🚀 Quick Start

1. Import hook: `import { useBreakpoint } from '../hooks/useBreakpoint'`
2. Get device: `const { device, isMobile } = useBreakpoint()`
3. Apply classes: `className="mobile:flex-col desktop:flex-row"`
4. Test at breakpoints: 320px, 768px, 1024px

---

**📘 Full Docs:** `/RESPONSIVE_SYSTEM_SETUP.md`
