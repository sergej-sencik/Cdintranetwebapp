# Global Layout System

## Overview

This document defines the global layout rules for the project to ensure consistent full-width layouts across all pages and prevent fixed-width containers that break responsive design.

## Problem Statement

Previously, components used fixed widths (e.g., `w-[1440px]`) which caused layout issues:
- Content didn't stretch to full viewport width
- Horizontal scrolling on smaller screens
- Inconsistent container behavior across components

## Solution: Global Layout Utilities

We've implemented three core utility classes in `/styles/globals.css` to solve this:

### 1. `.full-width-section`

**Purpose:** Ensures sections ALWAYS span 100% of viewport width

**Usage:** Apply to outer wrapper elements like headers, footers, and full-width background sections

**Properties:**
```css
.full-width-section {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 100% !important;
}
```

**Example:**
```tsx
<div className="full-width-section bg-white">
  {/* Content */}
</div>
```

**Use Cases:**
- Footer components
- Header components
- Full-width hero sections
- Background color sections

---

### 2. `.page-container`

**Purpose:** Creates a centered container with max-width constraint and horizontal padding

**Usage:** Apply to content that should be centered and constrained to 1280px

**Properties:**
```css
.page-container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 32px;
}
```

**Example:**
```tsx
<div className="page-container">
  <h1>Page Title</h1>
  <p>Constrained content...</p>
</div>
```

**Use Cases:**
- Main page content
- Article containers
- Form layouts
- Dashboard content

---

### 3. `.section-wrapper`

**Purpose:** Creates a full-width wrapper with centered, constrained inner content

**Usage:** Apply to sections that need full-width backgrounds but constrained content

**Properties:**
```css
.section-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.section-wrapper > * {
  width: 100%;
  max-width: 1280px;
}
```

**Example:**
```tsx
<div className="section-wrapper bg-blue-500">
  <div className="px-8 py-12">
    <h2>Section Title</h2>
    <p>Content is constrained but background is full-width</p>
  </div>
</div>
```

**Use Cases:**
- Feature sections with background colors
- Call-to-action sections
- Newsletter signup sections

---

## Layout Patterns

### Pattern 1: Full-Width Section with Constrained Content

```tsx
// Footer.tsx example
export function Footer() {
  return (
    <div className="full-width-section bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Constrained content */}
      </div>
    </div>
  );
}
```

### Pattern 2: Page Layout

```tsx
// Page component example
export function MyPage() {
  return (
    <>
      <Header /> {/* Full-width header */}
      
      <main className="page-container py-12">
        {/* Page content - constrained and centered */}
        <h1>Page Title</h1>
        <p>Content...</p>
      </main>
      
      <Footer /> {/* Full-width footer */}
    </>
  );
}
```

### Pattern 3: Alternating Full-Width Sections

```tsx
export function LandingPage() {
  return (
    <>
      <section className="section-wrapper bg-blue-500 text-white">
        <div className="py-20">
          <h2>Hero Section</h2>
        </div>
      </section>
      
      <section className="section-wrapper bg-white">
        <div className="py-16">
          <h2>Features Section</h2>
        </div>
      </section>
    </>
  );
}
```

---

## Migration Checklist

When creating or updating components, follow these rules:

### ✅ DO:
- Use `.full-width-section` for outer wrappers (headers, footers, sections)
- Use `max-w-[1280px]` for inner content containers
- Use `w-full` for responsive layouts
- Use `.page-container` for main content areas
- Use percentage-based widths (`w-full`, `w-1/2`, etc.)

### ❌ DON'T:
- Never use `w-[1440px]` or other fixed pixel widths on outer containers
- Never use `min-w-[1440px]` on containers
- Avoid fixed widths that prevent responsive behavior
- Don't use `max-w-screen-*` without `w-full`

---

## Component Examples

### ✅ CORRECT: Footer Component

```tsx
export function Footer() {
  return (
    <div className="full-width-section bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
}
```

### ❌ INCORRECT: Footer Component

```tsx
export function Footer() {
  return (
    // Fixed width breaks on smaller screens!
    <div className="w-[1440px] bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
}
```

### ✅ CORRECT: Header Component

```tsx
export function Header() {
  return (
    <div className="full-width-section bg-white border-b">
      <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
```

---

## Responsive Breakpoints

Our layout system works with these breakpoints:

- **Mobile:** 375px and up
- **Tablet Portrait:** 640px and up  
- **Tablet Landscape:** 768px and up
- **Desktop:** 1024px and up
- **Wide Desktop:** 1280px and up (max-width constraint)

The `.full-width-section` class ensures sections adapt to all screen sizes while maintaining the 1280px max-width constraint for content readability.

---

## Testing Checklist

Before committing layout changes, verify:

1. ✅ Section stretches full width on wide screens (1920px+)
2. ✅ Content is constrained to 1280px max-width
3. ✅ No horizontal scrolling on mobile (375px)
4. ✅ Proper padding on all screen sizes
5. ✅ Sections stack properly on tablet/mobile
6. ✅ Background colors extend full width
7. ✅ No fixed widths on outer containers

---

## Additional Resources

- **Container Utilities:** See `/styles/globals.css` lines 717-745
- **Example Components:** 
  - `/components/layout/Footer.tsx`
  - `/components/layout/Header.tsx`
- **Responsive Patterns:** See `/components/sections/` for section examples

---

## Questions?

If you're unsure which class to use:

1. **Is it an outer wrapper?** → Use `.full-width-section`
2. **Is it main content?** → Use `.page-container`
3. **Does it need full-width background with constrained content?** → Use `.section-wrapper`
4. **Is it an inner container?** → Use `max-w-[1280px] mx-auto`

---

*Last Updated: January 2025*
