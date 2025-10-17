# České dráhy Intranet - Project Documentation

Welcome to the České dráhy intranet homepage project documentation.

## 📚 Documentation Structure

### Content System
Comprehensive JSON-based content management system documentation:
- **[Content System Overview](./content/README.md)** - Complete guide to the content system
- **[Quick Reference](./content/QUICK_REFERENCE.md)** - Fast lookup for common patterns
- **[Migration Guide](./content/MIGRATION_GUIDE.md)** - How to refactor existing code
- **[Usage Examples](./content/USAGE_EXAMPLES.md)** - Complete component implementations
- **[Content Index](./content/INDEX.md)** - Navigation guide for all content docs

### Design Guidelines
- **[Design Guidelines](./guidelines/Guidelines.md)** - Overall design system
- **[Content Card System](./guidelines/ContentCardSystem.md)** - Content card specifications
- **[Blog Post Card System](./guidelines/BlogPostCardSystem.md)** - Blog card specifications
- **[Border Radius System](./guidelines/BorderRadiusSystem.md)** - Border radius tokens

### Design Systems
- **[Sidebar Widget System](./SIDEBAR_SYSTEM.md)** - Complete sidebar component library
  - 🚀 **[Quick Start Guide](./SIDEBAR_QUICK_START.md)** - Get started in 5 minutes
  - Atomic components (ContactCard, FileItem, QuickLink, DepartmentBanner)
  - Pre-built widgets (MyDepartment, MyContacts, MyDocuments)
  - JSON-driven data structure
- **[Color System Migration](./COLOR_SYSTEM_MIGRATION.md)** - Color variable migration guide
- **[Layout System](./LAYOUT_SYSTEM.md)** - Global layout rules and utilities

### Component Documentation
- **[Banner Carousel](./components/banner-carousel.md)** - Banner carousel component guide

### Setup & Configuration
- **[Font Setup](./FONT_SETUP.md)** - Custom font configuration
- **[Attributions](./Attributions.md)** - Image and resource attributions

## 🏗️ Project Structure

```
/
├── content/              # Content management system
│   ├── static.json      # Static UI text (labels, buttons, etc.)
│   ├── dynamic.json     # Dynamic data (articles, events, etc.)
│   ├── types.ts         # TypeScript type definitions
│   ├── loader.ts        # Content loading utilities
│   └── index.ts         # Barrel export
│
├── components/
│   ├── features/        # Feature-based components
│   ├── custom/          # Project-specific UI components
│   ├── common/          # Shared utility components
│   └── ui/              # Shadcn UI components (organized)
│
├── lib/                 # Utilities and helpers
│   ├── utils.ts
│   └── hooks/
│
├── styles/              # Global and component styles
│   ├── globals.css
│   └── components/
│
└── docs/                # This documentation folder
```

## 🚀 Quick Start

### For Developers

1. **Start Here:** [Content System Overview](./content/README.md)
2. **Common Tasks:** [Quick Reference](./content/QUICK_REFERENCE.md)
3. **Updating Code:** [Migration Guide](./content/MIGRATION_GUIDE.md)

### For Content Managers

1. **Edit Content:** Open `/content/static.json` or `/content/dynamic.json`
2. **Add News:** Edit `/content/dynamic.json` → `news` section
3. **Update Labels:** Edit `/content/static.json` → find appropriate section

### For Designers

1. **Design System:** [Design Guidelines](./guidelines/Guidelines.md)
2. **Component Specs:** Check component-specific docs in `/docs/components/`

## 📖 Key Concepts

### Content Management

All text and data is managed through JSON files:
- **Static Content** (`/content/static.json`) - UI labels, buttons, navigation, forms
- **Dynamic Content** (`/content/dynamic.json`) - News, events, videos, user data

### Component Architecture

- **Feature Components** - Business logic (news sections, event lists, etc.)
- **Custom Components** - Project-specific UI (custom buttons, cards, etc.)
- **UI Components** - Reusable Shadcn components (buttons, dialogs, etc.)
- **Common Components** - Shared utilities (image fallback, etc.)

### Type Safety

TypeScript types ensure type-safe content access:
```tsx
import { getNews, type NewsArticle } from '../content';

const articles: NewsArticle[] = getNews('all');
```

## 🎯 Common Tasks

### Update UI Text

1. Open `/content/static.json`
2. Find the appropriate section (e.g., `common.buttons`)
3. Update the text value
4. Save - no code changes needed!

### Add News Article

1. Open `/content/dynamic.json`
2. Go to `news.all` (or `department`/`region`)
3. Add new article object with all required fields
4. Save - appears immediately!

### Add New Component

1. Determine component type (feature/custom/common)
2. Create in appropriate folder
3. Add to `index.ts` barrel export
4. Import and use in parent component

### Update Styles

1. Global styles: Edit `/styles/globals.css`
2. Component styles: Create in `/styles/components/`
3. Follow existing patterns and tokens

## 🔧 Development Workflow

### Adding Features

1. Design feature components
2. Create in `/components/features/`
3. Use content system for all text/data
4. Add appropriate TypeScript types
5. Create barrel exports
6. Document if complex

### Updating Content

1. Edit JSON files directly
2. Follow existing structure
3. Validate JSON syntax
4. Test changes immediately
5. No build/deployment needed for text changes

### Refactoring Code

1. Read [Migration Guide](./content/MIGRATION_GUIDE.md)
2. Update imports to use content system
3. Remove hardcoded text/data
4. Add TypeScript types
5. Test thoroughly

## 📞 Getting Help

### Documentation

- **Content Questions:** See `/docs/content/`
- **Design Questions:** See `/docs/guidelines/`
- **Setup Issues:** See setup guides in `/docs/`

### Common Issues

1. **TypeScript Errors:** Check type imports from `/content/types`
2. **Content Not Loading:** Verify JSON syntax in content files
3. **Import Errors:** Ensure using correct paths (`/content` not `/data`)

## 🌟 Best Practices

### Content Management

- ✅ Use content loader functions, never import JSON directly
- ✅ Add TypeScript types for new content structures
- ✅ Keep content files organized and well-formatted
- ✅ Update `lastUpdated` in meta when editing
- ✅ Validate JSON syntax before committing

### Component Development

- ✅ Use feature-based organization
- ✅ Create barrel exports for clean imports
- ✅ Follow Atomic Design principles
- ✅ Add TypeScript types
- ✅ Use semantic HTML and ARIA labels
- ✅ Make components responsive by default

### Code Quality

- ✅ No hardcoded text or data in components
- ✅ Use content system for all text
- ✅ Proper TypeScript typing
- ✅ Consistent code formatting
- ✅ Clear, descriptive naming
- ✅ Add comments for complex logic

## 📊 Project Stats

- **Total Components:** 70+
- **Content Items:** 500+ (static) + 30+ (dynamic)
- **Documentation Pages:** 10+
- **Languages:** TypeScript, TSX, CSS
- **Framework:** React
- **Styling:** Tailwind CSS v4.0
- **UI Library:** Shadcn/ui

## 🎓 Learning Resources

### For New Developers

1. Read [Content System Overview](./content/README.md)
2. Browse [Usage Examples](./content/USAGE_EXAMPLES.md)
3. Study existing components
4. Start with small changes

### For Content Contributors

1. Understand JSON structure
2. Read content documentation
3. Make test changes
4. Verify in browser

### For Designers

1. Review design guidelines
2. Understand component system
3. Check Figma integration
4. Follow design tokens

## 🔄 Recent Updates

- **2025-10-14:** Major project restructuring completed
- **2025-10-13:** Content system implemented with static/dynamic separation
- **2025-10-13:** Banner carousel with auto-play functionality added
- **2025-10-13:** Comprehensive component documentation created

## 🚦 Project Status

- ✅ **Content System:** Complete and documented
- ✅ **Component Library:** 70+ components organized
- ✅ **Responsive Design:** Full mobile/tablet/desktop support
- ✅ **Type Safety:** Complete TypeScript coverage
- ✅ **Documentation:** Comprehensive guides available
- 🔄 **i18n:** Structure ready, implementation pending
- 🔄 **CMS Integration:** Future enhancement

---

**Version:** 1.0.0  
**Last Updated:** October 14, 2025  
**Maintained by:** České dráhy IT Team
