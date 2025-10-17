# DropdownMenuItem Component

## Overview

The `DropdownMenuItem` is a global, reusable component for dropdown menu items across the application. It provides consistent styling, hover effects, and icon support for all dropdown menus including MegaMenu and UserNavButton.

## Location

`/components/ui/dropdown-menu-item.tsx`

## Features

- ✅ **Light blue hover effect** - Uses `var(--color-blue-50)` for consistent branding
- ✅ **Color transitions** - Icon and text smoothly change to primary color on hover
- ✅ **Lucide icons** - Consistent icon styling with `strokeWidth: 1.5`
- ✅ **Link and button modes** - Works as `<a>` or `<button>` element
- ✅ **Destructive variant** - Special styling for dangerous actions (logout, delete)
- ✅ **Two size variants** - Compact (sm) for user menus, spacious (md) for mega menus
- ✅ **Global CSS variables** - All colors and spacings use design tokens
- ✅ **Fully accessible** - ARIA roles and keyboard navigation support
- ✅ **TypeScript** - Complete type safety

## Components

### DropdownMenuItem

Main component for menu items.

#### Props

```typescript
interface DropdownMenuItemProps {
  /** Icon name from lucide-react (string) or Icon component */
  icon?: string | LucideIcon;
  
  /** Display label text */
  label: string;
  
  /** Link href (renders as <a> element) */
  href?: string;
  
  /** Click handler (renders as <button> element) */
  onClick?: () => void;
  
  /** Visual variant */
  variant?: 'default' | 'destructive';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Icon size: 'sm' (18px) or 'md' (20px) */
  iconSize?: 'sm' | 'md';
  
  /** Text size: 'sm' (14px with line-height) or 'md' (14px) */
  textSize?: 'sm' | 'md';
}
```

### DropdownMenuDivider

Optional divider between menu items.

```typescript
<DropdownMenuDivider />
```

## Usage

### Basic Usage (As Link)

```tsx
import { DropdownMenuItem } from './components/ui/dropdown-menu-item';

<DropdownMenuItem 
  icon="newspaper" 
  label="All News" 
  href="/news" 
/>
```

### As Button with Click Handler

```tsx
<DropdownMenuItem 
  icon="user" 
  label="Edit Profile" 
  onClick={() => handleEditProfile()} 
/>
```

### Using Lucide Icon Component

```tsx
import { User } from 'lucide-react';

<DropdownMenuItem 
  icon={User} 
  label="Edit Profile" 
  onClick={() => handleEditProfile()} 
/>
```

### Destructive Variant

```tsx
import { LogOut } from 'lucide-react';

<DropdownMenuItem 
  icon={LogOut} 
  label="Logout" 
  onClick={() => handleLogout()}
  variant="destructive"
/>
```

### Size Variants

#### Mega Menu Style (Default - Spacious)

```tsx
<DropdownMenuItem 
  icon="newspaper" 
  label="All News" 
  href="#"
  iconSize="md"  // 20px icons, 12px padding
  textSize="md"
/>
```

#### User Menu Style (Compact)

```tsx
<DropdownMenuItem 
  icon="user" 
  label="Edit Profile" 
  onClick={() => {}}
  iconSize="sm"  // 18px icons, 10px/16px padding
  textSize="sm"  // 14px with line-height
/>
```

### With Divider

```tsx
import { DropdownMenuItem, DropdownMenuDivider } from './components/ui/dropdown-menu-item';

<>
  <DropdownMenuItem icon="user" label="Profile" onClick={() => {}} />
  <DropdownMenuItem icon="settings" label="Settings" onClick={() => {}} />
  <DropdownMenuDivider />
  <DropdownMenuItem icon="log-out" label="Logout" onClick={() => {}} variant="destructive" />
</>
```

## Icon Support

### String-based Icons (Kebab-case)

The component automatically converts kebab-case icon names to Lucide icon components:

```tsx
<DropdownMenuItem icon="user-plus" label="Add User" />
<DropdownMenuItem icon="log-out" label="Logout" />
<DropdownMenuItem icon="phone-call" label="Call" />
```

### Direct Icon Components

You can also pass Lucide icon components directly:

```tsx
import { User, Settings, LogOut } from 'lucide-react';

<DropdownMenuItem icon={User} label="Profile" />
<DropdownMenuItem icon={Settings} label="Settings" />
<DropdownMenuItem icon={LogOut} label="Logout" />
```

### Common Icons

Available icon names include:
- **User**: `user`, `user-plus`, `user-cog`
- **Actions**: `settings`, `log-out`, `edit`, `trash`
- **Content**: `newspaper`, `calendar`, `book`, `file`
- **Communication**: `phone`, `phone-call`, `mail`, `message`
- **Navigation**: `arrow-right`, `chevron-right`, `external-link`
- And many more from lucide-react library

## Styling

### CSS Variables Used

```css
/* Colors */
--foreground              /* Default text color */
--foreground-muted        /* Icon color */
--primary                 /* Hover text/icon color */
--color-blue-50           /* Hover background (default) */
--destructive             /* Destructive variant text */
--color-error-50          /* Destructive hover background */
--border                  /* Divider color */

/* Layout */
--radius-sm               /* Border radius (4px) */

/* Animation */
--transition-base         /* Transition duration (200ms) */

/* Focus */
--ring                    /* Focus ring color */
```

### Size Specifications

#### Icon Sizes
- `sm`: 18px × 18px (user menus)
- `md`: 20px × 20px (mega menus)

#### Padding
- `sm`: 16px horizontal, 10px vertical
- `md`: 12px all sides

#### Text
- `sm`: 14px with 20px line-height
- `md`: 14px standard

## Variants

### Default Variant

```tsx
<DropdownMenuItem 
  icon="newspaper" 
  label="News" 
  href="#" 
/>
```

**Styling:**
- Text: `var(--foreground)`
- Icon: `var(--foreground-muted)`
- Hover background: `var(--color-blue-50)`
- Hover text/icon: `var(--primary)`

### Destructive Variant

```tsx
<DropdownMenuItem 
  icon="log-out" 
  label="Logout" 
  onClick={() => {}}
  variant="destructive"
/>
```

**Styling:**
- Text: `var(--destructive)`
- Icon: `var(--destructive)`
- Hover background: `var(--color-error-50)`
- Hover text/icon: `var(--destructive)` (no change)

## Examples

### Example 1: Mega Menu Column

```tsx
<div className="space-y-1">
  <DropdownMenuItem 
    icon="newspaper" 
    label="Všechny novinky" 
    href="/news" 
    iconSize="md"
  />
  <DropdownMenuItem 
    icon="zap" 
    label="Aktuálně z ČD" 
    href="/news/current" 
    iconSize="md"
  />
  <DropdownMenuItem 
    icon="map-pin" 
    label="Z regionů" 
    href="/news/regions" 
    iconSize="md"
  />
</div>
```

### Example 2: User Menu

```tsx
import { User, Settings, LogOut } from 'lucide-react';

<div className="bg-white border rounded-lg p-1">
  <DropdownMenuItem 
    icon={User} 
    label="Upravit profil" 
    onClick={handleEditProfile}
    iconSize="sm"
    textSize="sm"
  />
  <DropdownMenuItem 
    icon={Settings} 
    label="Nastavení" 
    onClick={handleSettings}
    iconSize="sm"
    textSize="sm"
  />
  <DropdownMenuDivider />
  <DropdownMenuItem 
    icon={LogOut} 
    label="Odhlásit se" 
    onClick={handleLogout}
    variant="destructive"
    iconSize="sm"
    textSize="sm"
  />
</div>
```

### Example 3: Mixed Content

```tsx
<div className="space-y-1">
  {/* Standard items */}
  <DropdownMenuItem icon="home" label="Dashboard" href="/dashboard" />
  <DropdownMenuItem icon="users" label="Team" href="/team" />
  
  {/* Divider */}
  <DropdownMenuDivider />
  
  {/* Button actions */}
  <DropdownMenuItem icon="settings" label="Settings" onClick={openSettings} />
  <DropdownMenuItem icon="help-circle" label="Help" onClick={openHelp} />
  
  {/* Divider */}
  <DropdownMenuDivider />
  
  {/* Destructive action */}
  <DropdownMenuItem 
    icon="log-out" 
    label="Sign Out" 
    onClick={signOut}
    variant="destructive"
  />
</div>
```

## Integration

### In MegaMenu

The MegaMenu component uses DropdownMenuItem for all standard menu items:

```tsx
// components/ui/mega-menu.tsx
<ul className="space-y-1">
  {column.items.map((item, itemIndex) => (
    <li key={itemIndex}>
      <DropdownMenuItem
        icon={item.icon}
        label={item.text}
        href={item.href}
        iconSize="md"
        textSize="sm"
      />
    </li>
  ))}
</ul>
```

### In UserNavButton

The UserNavButton uses DropdownMenuItem for profile actions:

```tsx
// components/ui/user-nav-button.tsx
<DropdownMenuItem
  icon={User}
  label="Upravit profil"
  onClick={() => handleMenuItemClick(onEditProfile)}
  iconSize="sm"
  textSize="sm"
/>
<DropdownMenuItem
  icon={Settings}
  label="Nastavení"
  onClick={() => handleMenuItemClick(onSettings)}
  iconSize="sm"
  textSize="sm"
/>
<DropdownMenuDivider />
<DropdownMenuItem
  icon={LogOut}
  label="Odhlásit se"
  onClick={() => handleMenuItemClick(onLogout)}
  variant="destructive"
  iconSize="sm"
  textSize="sm"
/>
```

## Accessibility

### ARIA Roles

```tsx
<DropdownMenuItem 
  // ... props
  role="menuitem"  // Automatically applied
/>
```

### Keyboard Navigation

- **Focus management**: Built-in focus ring on keyboard navigation
- **Tab navigation**: Natural tab order
- **Enter/Space**: Activates button or follows link
- **Escape**: Handled by parent dropdown component

### Screen Readers

- Semantic HTML (`<a>` or `<button>`)
- Clear label text
- Icon is decorative (not announced)
- Role="menuitem" for proper context

## Best Practices

### 1. Choose the Right Mode

```tsx
// ✅ Use href for navigation
<DropdownMenuItem icon="home" label="Dashboard" href="/dashboard" />

// ✅ Use onClick for actions
<DropdownMenuItem icon="save" label="Save" onClick={handleSave} />
```

### 2. Use Appropriate Sizes

```tsx
// ✅ Mega menu - spacious
<DropdownMenuItem icon="news" label="News" iconSize="md" />

// ✅ User menu - compact
<DropdownMenuItem icon="user" label="Profile" iconSize="sm" textSize="sm" />
```

### 3. Destructive Actions

```tsx
// ✅ Always use destructive variant for dangerous actions
<DropdownMenuItem 
  icon="trash" 
  label="Delete Account" 
  onClick={deleteAccount}
  variant="destructive"
/>
```

### 4. Icon Consistency

```tsx
// ✅ Use consistent icon style throughout
import { User, Settings } from 'lucide-react';
<DropdownMenuItem icon={User} label="Profile" />
<DropdownMenuItem icon={Settings} label="Settings" />

// OR use string-based icons consistently
<DropdownMenuItem icon="user" label="Profile" />
<DropdownMenuItem icon="settings" label="Settings" />
```

### 5. Group Related Items

```tsx
// ✅ Use dividers to group related actions
<DropdownMenuItem icon="edit" label="Edit" onClick={edit} />
<DropdownMenuItem icon="duplicate" label="Duplicate" onClick={duplicate} />
<DropdownMenuDivider />
<DropdownMenuItem icon="trash" label="Delete" onClick={del} variant="destructive" />
```

## Troubleshooting

### Icon Not Showing

**Problem:** Icon doesn't appear

**Solution:** Check icon name spelling and case

```tsx
// ❌ Wrong
<DropdownMenuItem icon="UserPlus" label="Add" />

// ✅ Correct (kebab-case)
<DropdownMenuItem icon="user-plus" label="Add" />

// ✅ Or use component
import { UserPlus } from 'lucide-react';
<DropdownMenuItem icon={UserPlus} label="Add" />
```

### Hover Effect Not Working

**Problem:** Light blue background doesn't appear on hover

**Solution:** Ensure CSS variables are defined in globals.css

```css
:root {
  --color-blue-50: #F2FBFF;  /* Light blue hover */
  --primary: #009FDA;        /* Primary text color */
}
```

### Wrong Size

**Problem:** Menu items look too big or small

**Solution:** Use correct size variant

```tsx
// For mega menus (default)
<DropdownMenuItem icon="news" label="News" iconSize="md" />

// For user/compact menus
<DropdownMenuItem icon="user" label="Profile" iconSize="sm" textSize="sm" />
```

## Related Components

- **MegaMenu** - Uses DropdownMenuItem for menu columns
- **UserNavButton** - Uses DropdownMenuItem for user actions
- **NotificationBadge** - Similar dropdown pattern
- **CustomButton** - For primary actions

## Future Enhancements

- [ ] Keyboard shortcuts display
- [ ] Icon on right side option
- [ ] Badge/count indicator
- [ ] Disabled state
- [ ] Loading state
- [ ] Nested submenu support
- [ ] Tooltip on hover
- [ ] Dark mode optimization

## Notes

- Always use Lucide icons for consistency
- Icon `strokeWidth` is hardcoded to 1.5 for visual consistency
- Component automatically handles both link and button semantics
- Focus rings are styled with global `--ring` variable
- Transitions use global `--transition-base` (200ms)
