# 🚀 Responsive System - Quick Start Guide

## 📱 Breakpoints

```
Mobile:  320px - 767px
Tablet:  768px - 1023px
Desktop: 1024px+
```

---

## 🎯 Quick Usage

### 1. React Hook (Recommended)

```tsx
import { useBreakpoint } from '../hooks/useBreakpoint';

function MyComponent() {
  const { device, isMobile, isTablet, isDesktop } = useBreakpoint();
  
  if (isMobile) return <MobileView />;
  if (isTablet) return <TabletView />;
  return <DesktopView />;
}
```

### 2. CSS Utility Classes

```tsx
<div className="
  mobile:flex-col mobile:p-4
  tablet:flex-row tablet:p-6
  desktop:grid desktop:p-8
">
  {/* Content */}
</div>
```

### 3. Pre-built Classes

```tsx
{/* Responsive container with auto padding */}
<div className="responsive-container">
  
  {/* Responsive section spacing */}
  <section className="responsive-section">
    
    {/* Auto grid: 1 col mobile, 2 tablet, 3 desktop */}
    <div className="responsive-grid">
      <Card />
      <Card />
      <Card />
    </div>
  </section>
</div>
```

---

## 🎨 Common Patterns

### Hide/Show by Device

```tsx
{/* Show only on mobile */}
<div className="tablet:hidden desktop:hidden">Mobile Only</div>

{/* Hide on mobile */}
<div className="mobile:hidden">Tablet & Desktop</div>

{/* Show only on desktop */}
<div className="mobile:hidden tablet:hidden">Desktop Only</div>
```

### Responsive Layout

```tsx
<div className="
  flex
  mobile:flex-col
  tablet:flex-row
  desktop:grid desktop:grid-cols-3
">
  <Item />
  <Item />
  <Item />
</div>
```

### Responsive Spacing

```tsx
<section className="
  mobile:p-4 mobile:gap-4
  tablet:p-6 tablet:gap-6
  desktop:p-8 desktop:gap-8
">
  {/* Content */}
</section>
```

### Responsive Text Size

```tsx
<h1 className="
  mobile:text-xl
  tablet:text-2xl
  desktop:text-3xl
">
  Heading
</h1>
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
const className = deviceClass(device, {
  mobile: 'text-sm',
  tablet: 'text-base',
  desktop: 'text-lg'
});

// Container padding
const padding = getContainerPadding(device);
// Returns: 'px-4' (mobile), 'px-6' (tablet), 'px-8' (desktop)

// Section spacing
const spacing = getSectionSpacing(device);
// Returns: 'py-8' (mobile), 'py-12' (tablet), 'py-16' (desktop)

// Grid columns
const columns = getGridColumns(device);
// Returns: 1 (mobile), 2 (tablet), 3 (desktop)
```

---

## 📏 Design Tokens

### Container Widths
```css
Mobile:  100% (full width)
Tablet:  768px max
Desktop: 1280px max
```

### Spacing
```css
Mobile:  16px padding
Tablet:  24px padding
Desktop: 32px padding
```

### Touch Targets
```css
Mobile:  44px minimum (WCAG 2.1 AA)
Tablet:  44px minimum (WCAG 2.1 AA)
Desktop: 40px minimum
```

---

## ✅ Testing Checklist

- [ ] **320px** - Small mobile
- [ ] **375px** - iPhone (standard)
- [ ] **768px** - iPad portrait
- [ ] **1024px** - iPad landscape / Desktop
- [ ] **1280px** - Desktop standard
- [ ] **1920px** - Full HD desktop

---

## 🎯 Best Practices

1. ✅ **Mobile-first** - Start with mobile, enhance for larger
2. ✅ **Use hooks** - `useBreakpoint()` for dynamic behavior  
3. ✅ **Touch targets** - 44px minimum on mobile
4. ✅ **Test all sizes** - Don't skip breakpoints
5. ✅ **Progressive enhancement** - Add features as screen grows

---

## 📊 Available Utilities

### Display
```css
.mobile\:hidden    .tablet\:hidden    .desktop\:hidden
.mobile\:block     .tablet\:block     .desktop\:block
.mobile\:flex      .tablet\:flex      .desktop\:flex
.mobile\:grid      .tablet\:grid      .desktop\:grid
```

### Layout
```css
.mobile\:flex-col     .tablet\:flex-row     .desktop\:grid-cols-3
.mobile\:w-full       .tablet\:w-1/2        .desktop\:w-1/3
```

### Spacing
```css
.mobile\:p-4    .tablet\:p-6    .desktop\:p-8
.mobile\:px-4   .tablet\:px-6   .desktop\:px-8
.mobile\:gap-4  .tablet\:gap-6  .desktop\:gap-8
```

---

## 🔗 Import Paths

```typescript
// Hooks
import { useBreakpoint, useIsDevice } from '../hooks/useBreakpoint';

// Constants
import { BREAKPOINTS, MEDIA_QUERIES } from '../utils/breakpoints';

// Helpers
import { 
  deviceClass, 
  getContainerPadding,
  getSectionSpacing,
  getGridColumns 
} from '../utils/responsive';
```

---

## 🎉 You're Ready!

System configured. Start making components responsive! 🚀
