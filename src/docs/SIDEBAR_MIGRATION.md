# Sidebar Widget System Migration Guide

## Overview

This guide helps you migrate from the old hardcoded sidebar components (`ActivityFeed`, `Contacts`, `Contacts1`) to the new modular, reusable sidebar widget system.

## Before & After Comparison

### ❌ Old Way (Hardcoded)

```tsx
// Hardcoded components with inline data
function Ritgh() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[384px]">
      <ActivityFeed />
      <Contacts />
      <Contacts1 />
    </div>
  );
}
```

**Problems:**
- Hardcoded data scattered across components
- Not reusable
- Difficult to maintain
- No type safety
- Can't easily customize

### ✅ New Way (Component System)

```tsx
import { RightSidebar } from '../components/ui/sidebar-right';

function Ritgh() {
  return <RightSidebar />;
}
```

**Benefits:**
- ✅ Data-driven from JSON
- ✅ Fully reusable components
- ✅ Type-safe with TypeScript
- ✅ Easy to customize
- ✅ Consistent design patterns

---

## Migration Steps

### Step 1: Update Imports

**Replace these imports:**
```tsx
// ❌ Remove these
import { ActivityFeed } from '../old/ActivityFeed';
import { Contacts } from '../old/Contacts';
import { Contacts1 } from '../old/Contacts1';
```

**With this import:**
```tsx
// ✅ Add this
import { RightSidebar } from '../components/ui/sidebar-right';
```

### Step 2: Replace Component Usage

**Replace old component structure:**
```tsx
// ❌ Old code
<div className="content-stretch flex flex-col gap-[32px]...">
  <ActivityFeed />
  <Contacts />
  <Contacts1 />
</div>
```

**With new component:**
```tsx
// ✅ New code
<RightSidebar />
```

### Step 3: Move Data to TypeScript File

If you had custom data, move it to `/content/sidebar-widgets.ts`:

**Old inline data:**
```tsx
// ❌ Hardcoded in component
const contacts = [
  { name: "John Doe", phone: "123", ... }
];
```

**New TypeScript data:**
```typescript
// ✅ In /content/sidebar-widgets.ts
export const sidebarWidgets = {
  myContacts: {
    contacts: [
      { name: "John Doe", phone: "123", ... }
    ]
  }
};
```

### Step 4: Remove Old Files

After migration is complete and tested, remove old files:

```bash
# Remove old component files
rm -rf components/old-sidebar/
```

---

## Component Mapping

### Old → New Component Mapping

| Old Component | New Component | Data Source |
|---------------|---------------|-------------|
| `ActivityFeed` | `MyDepartmentWidget` | `sidebar-widgets.json` → `myDepartment` |
| `Contacts` | `MyContactsWidget` | `sidebar-widgets.json` → `myContacts` |
| `Contacts1` | `MyDocumentsWidget` | `sidebar-widgets.json` → `myDocuments` |

### Detailed Mapping

#### ActivityFeed → MyDepartmentWidget

**Old structure (ActivityFeed):**
- Department banner with image
- Key contacts list
- Quick links
- CTA button

**New equivalent:**
```tsx
<MyDepartmentWidget
  title="Muj odbor"
  banner={{ image, departmentName, location }}
  keyContacts={{ title, contacts: [...] }}
  quickLinks={{ title, links: [...] }}
  cta={{ text, href }}
/>
```

**Data location:** `/content/sidebar-widgets.ts` → `myDepartment`

#### Contacts → MyContactsWidget

**Old structure (Contacts):**
- Title
- Tabs (Můj odbor, Uložené)
- Contact cards
- View all link

**New equivalent:**
```tsx
<MyContactsWidget
  title="Moje kontakty"
  tabs={[...]}
  contacts={[...]}
  viewAll={{ text, href }}
/>
```

**Data location:** `/content/sidebar-widgets.ts` → `myContacts`

#### Contacts1 → MyDocumentsWidget

**Old structure (Contacts1):**
- Title
- Tabs (Nedávné, Uložené)
- File items
- View all link

**New equivalent:**
```tsx
<MyDocumentsWidget
  title="Moje dokumenty"
  tabs={[...]}
  files={[...]}
  viewAll={{ text, href }}
/>
```

**Data location:** `/content/sidebar-widgets.ts` → `myDocuments`

---

## Data Migration

### Migrating Contact Data

**Old format (hardcoded in component):**
```tsx
const contacts = [
  {
    avatar: imgAvatar3,
    name: "Miroslav Černý",
    position: "Technik kolejových vozidel",
    phone: "+420 725 123 456"
  }
];
```

**New format (in TypeScript):**
```typescript
{
  myContacts: {
    contacts: [
      {
        id: "contact-1",
        name: "Miroslav Černý",
        position: "Technik kolejových vozidel",
        phone: "+420 725 123 456",
        avatar: "figma:asset/..."
      }
    ]
  }
}
```

### Migrating File Data

**Old format:**
```tsx
const files = [
  {
    type: "PDF",
    name: "Servisní manuál",
    date: "Dnes, 14:31"
  }
];
```

**New format:**
```typescript
{
  myDocuments: {
    files: [
      {
        id: "file-1",
        name: "Servisní manuál",
        type: "PDF" as const,
        date: "Dnes, 14:31",
        href: "#"
      }
    ]
  }
}
```

---

## Advanced Migration Scenarios

### Scenario 1: Custom Styling

If you had custom styling on the old sidebar:

**Old way:**
```tsx
<div className="custom-sidebar-style">
  <ActivityFeed />
</div>
```

**New way:**
```tsx
<RightSidebar className="custom-sidebar-style" />
```

### Scenario 2: Event Handlers

If you had custom event handlers:

**Old way:**
```tsx
<ActivityFeed onContactClick={handleClick} />
```

**New way:**
```tsx
<MyContactsWidget
  contacts={contacts}
  // Handle clicks in JSON href or add custom onClick
/>
```

### Scenario 3: Conditional Rendering

If you conditionally rendered widgets:

**Old way:**
```tsx
{showContacts && <Contacts />}
```

**New way (Option 1 - Conditional sidebar):**
```tsx
{showSidebar && <RightSidebar />}
```

**New way (Option 2 - Individual widgets):**
```tsx
<div className="space-y-8">
  <MyDepartmentWidget {...data} />
  {showContacts && <MyContactsWidget {...data} />}
  <MyDocumentsWidget {...data} />
</div>
```

### Scenario 4: Dynamic Data Loading

If you loaded data dynamically:

**Old way:**
```tsx
useEffect(() => {
  fetch('/api/contacts').then(data => setContacts(data));
}, []);

<Contacts contacts={contacts} />
```

**New way:**
```tsx
import { useState, useEffect } from 'react';
import { MyContactsWidget } from './components/ui/my-contacts-widget';

function DynamicSidebar() {
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    fetch('/api/contacts').then(data => setContacts(data));
  }, []);

  return (
    <MyContactsWidget
      title="My Contacts"
      tabs={[{ id: 'all', label: 'All' }]}
      contacts={contacts}
      viewAll={{ text: "View All", href: "#" }}
    />
  );
}
```

---

## Testing Checklist

After migration, verify:

- [ ] All widgets render correctly
- [ ] Data displays as expected
- [ ] Links and buttons work
- [ ] Tabs switch properly
- [ ] Badges display correctly
- [ ] File type icons show
- [ ] Avatar images load
- [ ] Initials generate correctly
- [ ] Hover states work
- [ ] Mobile responsive
- [ ] TypeScript compiles without errors
- [ ] No console errors

---

## Rollback Plan

If you need to rollback:

1. **Revert code changes:**
   ```bash
   git checkout previous-commit -- /imports/Home-1-22881.tsx
   ```

2. **Keep old files:**
   - Don't delete old component files until migration is verified
   - Keep a backup branch with old code

3. **Gradual migration:**
   - Migrate one widget at a time
   - Test each widget before moving to next
   - Use feature flags to toggle between old/new

---

## Common Issues & Solutions

### Issue 1: Images Not Loading

**Problem:** Avatar or banner images don't appear

**Solution:**
- Check image paths in JSON are correct
- Verify images exist in the correct location
- Use `figma:asset/...` format for Figma imports

### Issue 2: TypeScript Errors

**Problem:** Type errors when using components

**Solution:**
```tsx
// ✅ Import types
import type { ContactCardProps } from './components/ui/contact-card';

// ✅ Use correct type
const contact: ContactCardProps = {
  name: "John Doe",
  position: "Manager",
  phone: "123"
};
```

### Issue 3: Styling Differences

**Problem:** New components look different from old ones

**Solution:**
- Review `/docs/SIDEBAR_SYSTEM.md` for styling details
- Check global CSS variables are loaded
- Verify Tailwind classes are compiling

### Issue 4: Data Not Updating

**Problem:** Changes to data file don't reflect in UI

**Solution:**
- Restart development server
- Clear browser cache
- Verify TypeScript syntax is valid
- Check file is saved

---

## Performance Optimization

After migration, consider these optimizations:

### 1. Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const RightSidebar = lazy(() => import('./components/ui/sidebar-right'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RightSidebar />
    </Suspense>
  );
}
```

### 2. Memoization

```tsx
import { memo } from 'react';

const MemoizedContactCard = memo(ContactCard);
```

### 3. Virtual Scrolling

For large lists (100+ items), implement virtual scrolling using `react-window` or similar.

---

## Next Steps

1. ✅ Complete migration
2. ✅ Test thoroughly
3. ✅ Update documentation
4. ✅ Remove old files
5. ✅ Deploy changes

---

## Support

**Need help?**
- 📚 **Documentation:** [SIDEBAR_SYSTEM.md](./SIDEBAR_SYSTEM.md)
- 🚀 **Quick Start:** [SIDEBAR_QUICK_START.md](./SIDEBAR_QUICK_START.md)
- 💬 **Questions:** Contact the development team

---

**Migration Guide Version:** 1.0.0  
**Last Updated:** January 15, 2025
