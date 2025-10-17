# Content System Documentation Index

Complete guide to the JSON-based content management system.

## 📚 Documentation Files

### 1. **README.md** - Main Documentation
- **What:** Complete system overview and API reference
- **For:** Everyone - start here!
- **Contains:**
  - System architecture and purpose
  - File structure explanation
  - Complete API reference (40+ functions)
  - Usage examples for all content types
  - Content structure reference
  - Update procedures
  - i18n guidelines
  - Best practices

### 2. **QUICK_REFERENCE.md** - Fast Lookup
- **What:** Quick lookup for common patterns
- **For:** Developers needing fast answers
- **Contains:**
  - Import statements
  - Common usage patterns
  - All available functions list
  - Performance tips
  - Code snippets

### 3. **MIGRATION_GUIDE.md** - Refactoring Guide
- **What:** Step-by-step migration instructions
- **For:** Developers updating existing code
- **Contains:**
  - Before/After comparisons
  - Static content migration
  - Dynamic content migration
  - Component examples
  - Testing checklist
  - Common issues and solutions

### 4. **USAGE_EXAMPLES.md** - Complete Examples
- **What:** Full component implementations
- **For:** Developers building new features
- **Contains:**
  - Simple component examples
  - Complex component examples
  - Layout components (Header, Footer)
  - Form components
  - Advanced patterns and hooks

### 5. **INDEX.md** - This File
- **What:** Navigation guide for all documentation
- **For:** Finding the right documentation
- **Contains:**
  - File descriptions
  - Quick navigation
  - When to use each guide

## 📁 Content Files

### **static-content.json** (1,500+ lines)
- All UI text and labels
- Navigation, buttons, forms
- Error messages, validation
- Accessibility labels
- Configuration settings

### **dynamic-content.json** (300+ lines)
- User profile data
- News articles (3 tabs)
- Events, videos
- Banners, notifications
- Real-time content

### **types.ts** (500+ lines)
- TypeScript type definitions
- Interface for every content type
- Type-safe content access
- Export all types

### **content-loader.ts** (400+ lines)
- Content access functions
- Static content getters
- Dynamic content getters
- Search and filter utilities
- Combined content helpers

## 🎯 Quick Navigation

### "I want to..."

#### ...learn the system
→ Start with **README.md**
- Understand architecture
- See examples
- Learn best practices

#### ...find a specific label
→ Go to **QUICK_REFERENCE.md**
- Fast pattern lookup
- Common use cases
- Code snippets

#### ...update existing code
→ Use **MIGRATION_GUIDE.md**
- Before/After examples
- Step-by-step instructions
- Testing checklist

#### ...build a new component
→ Check **USAGE_EXAMPLES.md**
- Complete implementations
- Real-world patterns
- Advanced techniques

#### ...understand content structure
→ Open **README.md** → Content Structure
- Static content namespaces
- Dynamic content structure
- JSON organization

#### ...add new content
→ **README.md** → Updating Content
- Add news article
- Add event
- Add banner slide
- Update labels

#### ...find type definitions
→ Open **types.ts**
- All TypeScript types
- Interface definitions
- Type exports

#### ...understand functions
→ **README.md** → API Reference or **content-loader.ts**
- 40+ helper functions
- Function descriptions
- Return types

## 📖 Learning Path

### Beginner
1. Read **README.md** → Purpose & Overview
2. Browse **QUICK_REFERENCE.md** → Common Patterns
3. Try examples from **QUICK_REFERENCE.md**

### Intermediate
1. Read **README.md** → API Reference
2. Study **USAGE_EXAMPLES.md** → Simple Components
3. Practice with **MIGRATION_GUIDE.md** examples

### Advanced
1. Read **USAGE_EXAMPLES.md** → Advanced Patterns
2. Study **content-loader.ts** implementation
3. Extend system with custom functions

## 🔍 Find Content By...

### By Component Type

**Buttons**
- File: `static-content.json` → `common.buttons`
- Function: `getButtonLabels()`
- Example: **QUICK_REFERENCE.md** → Buttons

**Navigation**
- File: `static-content.json` → `header.navigation`
- Function: `getNavigationLabels()`
- Example: **USAGE_EXAMPLES.md** → Header Component

**Forms**
- File: `static-content.json` → `forms`
- Function: `getFormLabels(formName)`
- Example: **USAGE_EXAMPLES.md** → Form Components

**News**
- File: `dynamic-content.json` → `news`
- Function: `getNews(tab)`
- Example: **USAGE_EXAMPLES.md** → News Section

**Events**
- File: `dynamic-content.json` → `events`
- Function: `getEvents()`
- Example: **USAGE_EXAMPLES.md** → Events Section

**Errors**
- File: `static-content.json` → `errors`
- Function: `getErrorMessages(type)`
- Example: **QUICK_REFERENCE.md** → Error Messages

### By Task

**Display a button**
→ **QUICK_REFERENCE.md** → Buttons

**Show section title**
→ **QUICK_REFERENCE.md** → Section Headers

**Render navigation**
→ **USAGE_EXAMPLES.md** → Header Component

**Build a form**
→ **USAGE_EXAMPLES.md** → Form Components

**Create carousel**
→ **USAGE_EXAMPLES.md** → Banner Carousel

**Add accessibility**
→ **QUICK_REFERENCE.md** → Accessibility

**Handle errors**
→ **USAGE_EXAMPLES.md** → Error Message Component

**Search content**
→ **README.md** → Search & Filter Functions

## 🛠️ Reference Tables

### Function Categories

| Category | Functions | Documentation |
|----------|-----------|---------------|
| Static Content | 14 functions | README.md → Static Content Getters |
| Dynamic Content | 8 functions | README.md → Dynamic Content Getters |
| Search & Filter | 6 functions | README.md → Search and Filter |
| Combined | 6 functions | README.md → Combined Content |
| Utilities | 3 functions | README.md → Utilities |

### Content Namespaces

| Namespace | File | Contains |
|-----------|------|----------|
| `common` | static-content.json | Buttons, labels, validation |
| `header` | static-content.json | Navigation, search, user menu |
| `footer` | static-content.json | Footer sections, legal |
| `navigation` | static-content.json | Mega menu, breadcrumbs |
| `sections` | static-content.json | Section labels, tabs |
| `forms` | static-content.json | Form fields, placeholders |
| `accessibility` | static-content.json | ARIA, screen reader |
| `errors` | static-content.json | Error messages |
| `news` | dynamic-content.json | Articles (3 tabs) |
| `events` | dynamic-content.json | Upcoming events |
| `videos` | dynamic-content.json | Latest videos |
| `banners` | dynamic-content.json | Carousel slides |
| `user` | dynamic-content.json | User profile |

### Documentation Sizes

| File | Lines | Type | Read Time |
|------|-------|------|-----------|
| README.md | ~500 | Guide | 15 min |
| QUICK_REFERENCE.md | ~300 | Reference | 5 min |
| MIGRATION_GUIDE.md | ~400 | Guide | 10 min |
| USAGE_EXAMPLES.md | ~600 | Examples | 20 min |
| INDEX.md | ~200 | Navigation | 3 min |
| static-content.json | ~1500 | Data | - |
| dynamic-content.json | ~300 | Data | - |
| types.ts | ~500 | Code | - |
| content-loader.ts | ~400 | Code | - |

## 💡 Tips

### First Time Users
1. Start with **README.md** → Overview
2. Copy examples from **QUICK_REFERENCE.md**
3. Experiment with small changes

### Daily Usage
- Keep **QUICK_REFERENCE.md** open
- Bookmark common patterns
- Use IDE autocomplete with types

### Updating Content
- Edit JSON files directly
- Follow existing structure
- Test changes immediately

### Adding Features
- Study **USAGE_EXAMPLES.md**
- Check **types.ts** for interfaces
- Extend **content-loader.ts** if needed

## 🚀 Getting Started (5 Minutes)

```tsx
// 1. Import what you need
import { getButtonLabels, getNews } from './data/content-loader';

// 2. Load content
const buttons = getButtonLabels();
const articles = getNews('all');

// 3. Use in JSX
<button>{buttons.viewAll}</button>
{articles.map(article => (
  <ArticleCard key={article.id} {...article} />
))}
```

That's it! 🎉

## 📞 Support

### Found an Error?
- Check **MIGRATION_GUIDE.md** → Common Issues
- Review examples in **USAGE_EXAMPLES.md**
- Contact development team

### Need New Feature?
- Discuss with team
- Update **types.ts** if needed
- Add to **content-loader.ts**
- Document in **README.md**

### Content Updates?
- Edit **static-content.json** or **dynamic-content.json**
- Follow existing structure
- Update `meta.lastUpdated`
- Test immediately

## 🎓 Training Resources

### Video Tutorials (Future)
- [ ] System overview (10 min)
- [ ] Basic usage (15 min)
- [ ] Advanced patterns (20 min)
- [ ] Content updates (5 min)

### Workshops (Future)
- [ ] Introduction to content system
- [ ] Building components with content
- [ ] i18n implementation
- [ ] Content management

---

**Version:** 1.0.0  
**Last Updated:** October 13, 2025  
**Maintained by:** České dráhy IT Team

**Start Here:** [README.md](./README.md)
