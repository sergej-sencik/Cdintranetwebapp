# Navigation Components

Professional navigation components for wayfinding, tab navigation, and breadcrumb trails. All components follow the design system and are fully accessible.

## Components in This Category

### 1. HorizontalTabs (Primary Tabs)
**Location**: `/components/ui/horizontal-tabs.tsx`

Professional tab navigation with full state management, badge support, and accessibility features. Used for main page navigation and prominent content switching.

**Features**:
- ✅ Multiple states (default, hover, active, disabled)
- ✅ Badge support for notifications/counts
- ✅ Icon support from lucide-react
- ✅ Keyboard navigation (Arrow keys, Home, End)
- ✅ Fully accessible (ARIA attributes, screen readers)
- ✅ Design system compliant

**Quick Example**:
```tsx
import { HorizontalTabs } from './components/ui/horizontal-tabs';
import { Bell, Calendar } from 'lucide-react';

<HorizontalTabs
  tabs={[
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: 5 },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'archived', label: 'Archived', disabled: true }
  ]}
  defaultActiveTab="alerts"
  onTabChange={(tabId) => console.log('Active:', tabId)}
/>
```

**Documentation**: See [horizontal-tabs.md](./horizontal-tabs.md)

---

### 2. SecondaryTabs (Compact Tabs)
**Location**: `/components/ui/secondary-tabs.tsx`

Compact tab navigation designed for widgets and secondary content areas. Features bottom border indicators and optional count badges.

**Features**:
- ✅ Compact design (bottom border only, no full background)
- ✅ Count badges for notifications/saved items
- ✅ Multiple states (default, hover, active, disabled)
- ✅ Keyboard navigation (Arrow keys, Home, End)
- ✅ Fully accessible (ARIA attributes, screen readers)
- ✅ Perfect for sidebar widgets

**Quick Example**:
```tsx
import { SecondaryTabs } from './components/ui/secondary-tabs';

<SecondaryTabs
  tabs={[
    { id: 'recent', label: 'Recent' },
    { id: 'saved', label: 'Saved', count: 12 }
  ]}
  defaultActiveTab="recent"
  onTabChange={(tabId) => console.log('Active:', tabId)}
/>
```

**Documentation**: See [secondary-tabs.md](./secondary-tabs.md)

---

### 3. Breadcrumb (ShadCN)
**Location**: `/components/ui/breadcrumb.tsx`

Standard breadcrumb navigation for showing the current page's location in the site hierarchy.

**Features**:
- ✅ Automatic separator rendering
- ✅ Active page indication
- ✅ Link and text items
- ✅ Responsive design

**Quick Example**:
```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/news">News</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Article Title</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### 4. Tabs (ShadCN)
**Location**: `/components/ui/tabs.tsx`

Generic tab component with content panels. Built on Radix UI for maximum flexibility.

**Features**:
- ✅ Content panels tied to tabs
- ✅ Controlled or uncontrolled mode
- ✅ Customizable styling
- ✅ Accessible (Radix UI primitives)

**Quick Example**:
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p>Overview content here</p>
  </TabsContent>
  <TabsContent value="details">
    <p>Details content here</p>
  </TabsContent>
  <TabsContent value="settings">
    <p>Settings content here</p>
  </TabsContent>
</Tabs>
```

---

### 5. Navigation Menu (ShadCN)
**Location**: `/components/ui/navigation-menu.tsx`

Dropdown navigation menu for complex site navigation structures.

**Features**:
- ✅ Multi-level navigation
- ✅ Dropdown submenus
- ✅ Keyboard accessible
- ✅ Mobile responsive

---

### 6. Header Nav Button
**Location**: `/components/ui/header-nav-button.tsx`

Custom button component specifically designed for header navigation.

**Quick Example**:
```tsx
import { HeaderNavButton } from './components/ui/header-nav-button';

<HeaderNavButton
  label="Novinky"
  onClick={() => console.log('Clicked')}
/>
```

---

### 7. User Nav Button
**Location**: `/components/ui/user-nav-button.tsx`

Interactive user profile button with dropdown menu for account management. Displays user avatar, name, and role with access to profile settings and logout functionality.

**Features**:
- ✅ User avatar with fallback initials
- ✅ Hover states with elevation
- ✅ Click-to-open dropdown menu
- ✅ Click outside to close
- ✅ Keyboard navigation (Escape to close)
- ✅ Menu items: Edit Profile, Settings, Logout (Czech labels)
- ✅ Uses content from static JSON
- ✅ Global design token integration
- ✅ Fully accessible (ARIA, keyboard support)

**Quick Example**:
```tsx
import { UserNavButton } from './components/ui/user-nav-button';

<UserNavButton
  name="Jan Novotný"
  role="Technik kolejových vozidel"
  avatarSrc="/path/to/avatar.png"
  onEditProfile={() => console.log('Edit profile')}
  onSettings={() => console.log('Settings')}
  onLogout={() => console.log('Logout')}
/>
```

**Props**:
- `name` (optional): User's display name (default: "Jan Novotný")
- `role` (optional): User's job role/position (default: "Technik kolejových vozidel")
- `avatarSrc` (optional): URL to user's avatar image (shows initials if not provided)
- `onEditProfile` (optional): Callback when "Upravit profil" is clicked
- `onSettings` (optional): Callback when "Nastavení" is clicked
- `onLogout` (optional): Callback when "Odhlásit se" is clicked
- `className` (optional): Additional CSS classes

**Menu Items** (from `/data/static-content.json`):
- 👤 **Upravit profil** (Edit Profile) - Opens profile editing page
- ⚙️ **Nastavení** (Settings) - Opens settings page
- 🚪 **Odhlásit se** (Logout) - Logs user out (destructive variant)

**States**:
- **Default**: White background, subtle border
- **Hover**: Elevated with shadow, stronger border
- **Active/Open**: Chevron rotates 180°, dropdown appears
- **Focus**: Ring outline for keyboard navigation

**Accessibility**:
- Role: `button` with `aria-haspopup="menu"`
- Dropdown role: `menu` with `role="menuitem"` for each option
- Keyboard support: Enter/Space to open, Escape to close
- Screen reader friendly labels

---

## When to Use Each Component

### Use HorizontalTabs (Primary) when:
- ✅ Switching between different views/content on the same page
- ✅ Need to show notification counts with badges
- ✅ Want a prominent, full-width navigation
- ✅ Content categories are of equal importance
- ✅ Need custom design system colors (#009fda blue)
- ✅ Want icons in tabs for visual context

**Example Use Cases**:
- News/Events/Videos sections toggle
- Inbox/Drafts/Sent message views
- Dashboard tabs (Overview/Statistics/Settings)

---

### Use SecondaryTabs (Compact) when:
- ✅ Inside sidebar widgets or compact spaces
- ✅ Need count indicators (e.g., "Saved (12)")
- ✅ Secondary content filtering within a section
- ✅ Want a lighter, less prominent tab design
- ✅ Don't need icons (text and counts only)

**Example Use Cases**:
- Widget filtering (Recent/Saved documents)
- Contact lists (My Department/Saved contacts)
- Compact navigation in sidebars
- Secondary content organization

---

### Use Breadcrumb when:
- ✅ Showing hierarchical location in the site
- ✅ Deep navigation structures (Home > Category > Subcategory > Page)
- ✅ Allowing users to navigate back up the hierarchy
- ✅ Need SEO benefits (structured data)

**Example Use Cases**:
- Article pages (Home > News > Category > Article)
- Product pages (Home > Shop > Category > Product)
- Documentation pages (Docs > Components > Navigation > Breadcrumb)

---

### Use Tabs (ShadCN) when:
- ✅ Need content panels that change with tab selection
- ✅ Want a more generic/flexible tab system
- ✅ Don't need custom colors (use theme colors)
- ✅ Prefer ShadCN's styling and behavior

**Example Use Cases**:
- Settings panels (General / Security / Privacy)
- Profile sections (About / Posts / Photos)
- Form sections (Personal Info / Contact / Preferences)

---

### Use Navigation Menu when:
- ✅ Complex multi-level site navigation
- ✅ Dropdown menus with submenus
- ✅ Desktop-focused navigation
- ✅ Main site header navigation

**Example Use Cases**:
- Main site navigation header
- Mega menus with categories
- Admin panel navigation

---

## Comparison Table

| Feature | HorizontalTabs | SecondaryTabs | Breadcrumb | Tabs (ShadCN) | Nav Menu |
|---------|---------------|---------------|------------|---------------|----------|
| **Purpose** | Main navigation | Widget filtering | Location trail | Content panels | Site navigation |
| **Visual Style** | Full background | Bottom border | Links | Rounded tabs | Dropdown |
| **Size** | Large (48px) | Compact (36px) | Inline | Medium | Medium |
| **Badges/Counts** | ✅ Badge prop | ✅ Count prop | ❌ No | ❌ No | ❌ No |
| **Icons** | ✅ Yes | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Disabled State** | ✅ Yes | ✅ Yes | N/A | ✅ Yes | ❌ No |
| **Custom Colors** | ✅ #009fda | ✅ Blue/Gray | ✅ Customizable | ✅ Theme | ✅ Theme |
| **Keyboard Nav** | ✅ Full | ✅ Full | ✅ Links | ✅ Full | ✅ Full |
| **Content Panels** | ❌ Manual | ❌ Manual | N/A | ✅ Built-in | ❌ No |
| **Best For** | Page sections | Widgets | Hierarchy | Settings | Menus |
| **Mobile Ready** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Accessibility** | ✅ Full ARIA | ✅ Full ARIA | ✅ Semantic | ✅ Radix UI | ✅ Radix UI |

---

## Design System Integration

All navigation components follow the design system defined in `/styles/globals.css`:

### Colors
```css
--color-primary-blue: #009fda;
--color-gray-700: #252b37;
--color-gray-500: #6b7280;
--color-gray-50: #f9fafb;
```

### Typography
```css
--font-primary: 'CD_Fedra_Pro', sans-serif;
--font-secondary: 'Roboto', sans-serif;
```

### Spacing
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

---

## Accessibility Guidelines

All navigation components follow WCAG 2.1 Level AA standards:

1. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Logical tab order
   - Skip links where appropriate

2. **Screen Readers**
   - Proper ARIA labels and roles
   - Semantic HTML structure
   - Clear focus indicators

3. **Visual**
   - Sufficient color contrast (minimum 4.5:1)
   - Focus indicators visible
   - Text not too small (minimum 14px)

4. **Motion**
   - Respect `prefers-reduced-motion`
   - Smooth, predictable transitions
   - No auto-playing animations

---

## Best Practices

### Do's ✅
- Use semantic HTML where possible
- Provide clear, concise labels
- Maintain consistent navigation patterns
- Test keyboard navigation
- Ensure proper focus management
- Use badges sparingly (only for important notifications)
- Keep tab labels short and descriptive

### Don'ts ❌
- Don't nest navigation components unnecessarily
- Don't use too many tabs (5-7 max recommended)
- Don't disable tabs without explanation
- Don't rely solely on color to convey information
- Don't use navigation for destructive actions
- Don't auto-switch tabs without user action

---

## Testing Checklist

When implementing navigation components, verify:

- [ ] Keyboard navigation works (Tab, Arrow keys, Enter)
- [ ] Focus indicators are visible
- [ ] Screen reader announces current state correctly
- [ ] Disabled items are not interactive
- [ ] Badges update correctly
- [ ] Icons render properly
- [ ] Mobile responsive design works
- [ ] Colors match design system
- [ ] Typography is consistent
- [ ] No console errors or warnings

---

## Related Documentation

- [HorizontalTabs Full Documentation](./horizontal-tabs.md)
- [Design System Colors](/docs/COLOR_SYSTEM_MIGRATION.md)
- [Layout System](/docs/LAYOUT_SYSTEM.md)
- [Component Guidelines](/guidelines/Guidelines.md)

---

## Support & Feedback

For questions or issues with navigation components:
1. Check component-specific documentation
2. Review ComponentsShowcase examples
3. Consult design system documentation
4. Test with the interactive demos

---

**Last Updated**: 2025-10-15
