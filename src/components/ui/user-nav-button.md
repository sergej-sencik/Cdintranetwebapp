# UserNavButton Component

Professional user profile button with dropdown menu for account management in the header.

---

## 📍 Location
`/components/ui/user-nav-button.tsx`

---

## 🎯 Purpose

Provides a consistent, accessible user profile menu in the application header. Users can access their profile settings, account preferences, and logout functionality through an intuitive dropdown interface.

---

## ✨ Features

- ✅ **User Information Display**: Shows avatar, name, and job role
- ✅ **Hover States**: Elevated shadow and border on hover for visual feedback
- ✅ **Dropdown Menu**: Click to reveal menu with account options
- ✅ **Avatar Fallback**: Displays initials if no avatar image provided
- ✅ **Click Outside**: Automatically closes dropdown when clicking outside
- ✅ **Keyboard Navigation**: Full keyboard support (Enter, Space, Escape)
- ✅ **Czech Labels**: Menu items use Czech language from JSON
- ✅ **Global Styles**: Uses design tokens from `/styles/globals.css`
- ✅ **Accessible**: ARIA attributes and semantic HTML
- ✅ **Animations**: Smooth transitions and dropdown animations

---

## 📦 Import

```tsx
import { UserNavButton } from './components/ui/user-nav-button';
```

---

## 🔧 Props

```typescript
interface UserNavButtonProps {
  /** User's display name */
  name?: string;
  /** User's job role/position */
  role?: string;
  /** User's avatar image URL */
  avatarSrc?: string;
  /** Callback when Edit Profile is clicked */
  onEditProfile?: () => void;
  /** Callback when Settings is clicked */
  onSettings?: () => void;
  /** Callback when Logout is clicked */
  onLogout?: () => void;
  /** Additional CSS classes */
  className?: string;
}
```

### Default Values
- `name`: "Jan Novotný"
- `role`: "Technik kolejových vozidel"
- `avatarSrc`: Original Figma avatar image (imported from design)

---

## 📝 Usage Examples

### Basic Usage

```tsx
import { UserNavButton } from './components/ui/user-nav-button';

export function Header() {
  return (
    <header>
      <UserNavButton />
    </header>
  );
}
```

### With Custom User Data

```tsx
import { UserNavButton } from './components/ui/user-nav-button';

export function Header() {
  const user = {
    name: "Marie Nováková",
    role: "Vedoucí týmu IT",
    avatarSrc: "/avatars/marie.jpg"
  };

  return (
    <header>
      <UserNavButton
        name={user.name}
        role={user.role}
        avatarSrc={user.avatarSrc}
      />
    </header>
  );
}
```

### With Event Handlers

```tsx
import { UserNavButton } from './components/ui/user-nav-button';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/profile/edit');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleLogout = async () => {
    await logoutUser();
    router.push('/login');
  };

  return (
    <header>
      <UserNavButton
        name="Jan Dvořák"
        role="Strojvedoucí"
        avatarSrc="/avatars/jan.jpg"
        onEditProfile={handleEditProfile}
        onSettings={handleSettings}
        onLogout={handleLogout}
      />
    </header>
  );
}
```

### Without Custom Avatar (Uses Default)

```tsx
<UserNavButton
  name="Petr Svoboda"
  role="Administrátor systému"
  // No avatarSrc provided - will use default Figma avatar image
/>
```

---

## 🎨 Menu Items

The dropdown menu contains three items, with labels loaded from `/data/static-content.json`:

### 1. Edit Profile (Upravit profil)
- **Icon**: User icon from lucide-react
- **Action**: Opens profile editing page
- **Style**: Default (blue on hover)

### 2. Settings (Nastavení)
- **Icon**: Settings icon from lucide-react
- **Action**: Opens settings page
- **Style**: Default (blue on hover)

### 3. Logout (Odhlásit se)
- **Icon**: LogOut icon from lucide-react
- **Action**: Logs user out of the system
- **Style**: Destructive (red text, light red background on hover)
- **Separator**: Preceded by a divider line

---

## 🎭 States

### Default State
```
┌─────────────────────────────────┐
│ 👤  Jan Novotný            ▼   │
│     Technik kolejových vozidel  │
└─────────────────────────────────┘
```
- White background
- Transparent border (invisible)
- Chevron pointing down
- Clean, modern appearance

### Hover State
```
┌─────────────────────────────────┐
│ 👤  Jan Novotný            ▼   │ ← Shadow elevation + border
│     Technik kolejových vozidel  │
└─────────────────────────────────┘
```
- Enhanced shadow (matches LinkCard hover effect)
- Border becomes visible (#e9eaeb - subtle gray)
- Smooth 300ms transition
- Consistent with LinkCard component styling
- Clear visual feedback for interactivity

### Open State
```
┌─────────────────────────────────┐
│ 👤  Jan Novotný            ▲   │ ← Chevron rotated
│     Technik kolejových vozidel  │
└─────────────────────────────────┘
    ┌───────────────────────┐
    │ 👤 Upravit profil    │
    │ ⚙️ Nastavení         │
    ├───────────────────────┤
    │ 🚪 Odhlásit se       │ ← Red text
    └───────────────────────┘
```
- Chevron rotates 180° to point up
- Dropdown menu appears below
- Menu has shadow and border
- Fade-in and scale animation

### Focus State (Keyboard)
```
┌═════════════════════════════════┐ ← Blue ring
║ 👤  Jan Novotný            ▼   ║
║     Technik kolejových vozidel  ║
└═════════════════════════════════┘
```
- 2px blue ring outline
- 2px offset for visibility

---

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Focus the button |
| `Enter` or `Space` | Open/close dropdown |
| `Escape` | Close dropdown (when open) |
| `Tab` (when open) | Navigate through menu items |
| `Enter` (on menu item) | Activate menu item |

---

## 🎨 Design Tokens Used

The component uses global CSS variables from `/styles/globals.css`:

### Colors
```css
--color-white: #FFFFFF
--foreground: var(--color-brand-secondary)
--foreground-muted: var(--color-gray-600)
--border: var(--color-gray-300)
--muted: var(--color-gray-50)
--destructive: var(--color-error-500)
--color-error-50: #FEF2F2
--color-blue-100: #E6F7FF
--color-blue-700: #006E96
--ring: var(--primary)

/* Hover border color (matches LinkCard) */
#e9eaeb
```

### Shadows
```css
--elevation-xs: 0px 1px 2px 0px rgba(10, 13, 18, 0.05)
--elevation-lg: 0px 10px 15px -3px rgba(10, 13, 18, 0.05)

/* Hover shadow (matches LinkCard) */
0px 4px 12px 0px rgba(10,13,18,0.1), 0px 2px 4px -1px rgba(10,13,18,0.08)
```

### Border Radius
```css
--radius-sm: 4px
--radius-md: 8px
```

### Z-Index
```css
--z-dropdown: 1000
```

### Transitions
```css
/* Button uses 300ms for shadow and border transitions (matches LinkCard) */
transition-shadow duration-300
transition-colors duration-300
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📊 Content Source

Menu labels are loaded from `/data/static-content.json`:

```json
{
  "header": {
    "userMenu": {
      "profile": "Můj profil",
      "settings": "Nastavení",
      "logout": "Odhlásit se"
    }
  }
}
```

This ensures consistency across the application and easy localization.

---

## ♿ Accessibility

### ARIA Attributes
```tsx
<div
  role="button"
  aria-haspopup="menu"
  aria-expanded={isOpen}
  tabIndex={0}
>
  {/* Button content */}
</div>

<div role="menu" aria-orientation="vertical">
  <button role="menuitem">Upravit profil</button>
  <button role="menuitem">Nastavení</button>
  <button role="menuitem">Odhlásit se</button>
</div>
```

### Screen Reader Support
- Button announces as "User menu button"
- Expanded state announced when opened
- Each menu item announces its label
- Focus management returns to button on close

### Keyboard Support
- Full keyboard navigation
- Escape key closes dropdown
- Tab key navigates through items
- Enter activates selected item

### Visual Accessibility
- High contrast text (meets WCAG AA)
- Clear focus indicators (2px blue ring)
- Touch targets meet 44px minimum
- No reliance on color alone for logout (icon + text)

---

## 🎯 Best Practices

### Do's ✅
- Use in application header for consistent user access
- Provide all three callbacks (onEditProfile, onSettings, onLogout)
- Load user data from authentication context
- Update avatar when user changes profile picture
- Handle logout errors gracefully
- Show loading state during logout

### Don'ts ❌
- Don't use multiple instances on the same page
- Don't omit the logout handler (critical functionality)
- Don't use for non-user-related actions
- Don't nest inside other dropdowns
- Don't remove the visual separation before logout
- Don't make logout action instant (confirm first)

---

## 🧪 Testing Checklist

When implementing UserNavButton:

- [ ] Button displays user name and role correctly
- [ ] Avatar image loads (or shows initials as fallback)
- [ ] Hover state shows elevation and border change
- [ ] Click opens dropdown menu
- [ ] Click outside closes dropdown
- [ ] Escape key closes dropdown
- [ ] Each menu item is clickable
- [ ] Logout item shows destructive styling (red)
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicator is visible
- [ ] Screen reader announces menu state
- [ ] Chevron rotates when opened
- [ ] Dropdown animates smoothly
- [ ] Menu items trigger correct callbacks
- [ ] Touch targets are at least 44px

---

## 🔄 Component Hierarchy

```
UserNavButton/
├── Button Container
│   ├── User Info Section
│   │   ├── Avatar (with fallback initials)
│   │   └── Name & Role
│   ├── Chevron Icon (animated)
│   └── Border (hover-aware)
└── Dropdown Menu (conditional)
    ├── Edit Profile MenuItem
    ├── Settings MenuItem
    ├── Separator
    └── Logout MenuItem (destructive)
```

---

## 🎨 Styling Customization

### Adding Custom Classes

```tsx
<UserNavButton
  className="mr-4"
  name="Jan Novák"
  role="Developer"
/>
```

### Overriding Styles

```css
/* In your CSS file */
[data-name="UserNavButton"] {
  /* Custom button width */
  width: 280px;
}

[data-name="UserNavButton"] button[role="menuitem"] {
  /* Custom menu item padding */
  padding: 12px 16px;
}
```

---

## 🚀 Integration Example

Complete integration in Header component:

```tsx
import { UserNavButton } from './components/ui/user-nav-button';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

export function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/profile/edit');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleLogout = async () => {
    const confirmed = confirm('Opravdu se chcete odhlásit?');
    if (confirmed) {
      await logout();
      router.push('/login');
    }
  };

  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <Navigation />
      <UserNavButton
        name={user?.name}
        role={user?.position}
        avatarSrc={user?.avatar}
        onEditProfile={handleEditProfile}
        onSettings={handleSettings}
        onLogout={handleLogout}
      />
    </header>
  );
}
```

---

## 📚 Related Components

- **HeaderNavButton** - Navigation buttons for header menu items
- **Avatar** - User avatar component (ShadCN)
- **DropdownMenu** - Generic dropdown menu component (ShadCN)
- **NotificationBadge** - Badge for notification count in header

---

## 🔗 Related Documentation

- [Navigation Components Overview](/components/ui/navigation-components.md)
- [Header Component](/components/layout/Header.tsx)
- [Static Content JSON](/data/static-content.json)
- [Design System](/styles/globals.css)

---

## 📝 Changelog

### Version 1.3.0 (Current)
- ✅ **Width reduced**: 264px → 244px (20px reduction)
- ✅ **Hover styling matches LinkCard**: Consistent design language
  - Shadow: `0px 4px 12px 0px rgba(10,13,18,0.1), 0px 2px 4px -1px rgba(10,13,18,0.08)`
  - Border: `#e9eaeb` (subtle gray)
  - Transition: 300ms duration
- ✅ **Professional polish**: Unified hover effects across components

### Version 1.2.0
- ✅ Border now only visible on hover (transparent by default)
- ✅ Maintains clean default appearance
- ✅ Enhanced hover feedback with both shadow and border
- ✅ Smooth transitions for professional feel

### Version 1.1.0
- ✅ Updated to use original Figma avatar image as default
- ✅ Removed gray border in default state for cleaner look
- ✅ Maintained hover states with shadow elevation
- ✅ Avatar now always displays (using default image)

### Version 1.0.0
- ✅ Initial implementation
- ✅ Full keyboard navigation
- ✅ Click outside to close
- ✅ Czech language labels from JSON
- ✅ Avatar with initials fallback
- ✅ Hover and focus states
- ✅ Accessible ARIA attributes
- ✅ Design token integration

---

**Last Updated**: 2025-10-16  
**Version**: 1.3.0  
**Component Status**: ✅ Production Ready  
**Accessibility**: WCAG 2.1 Level AA Compliant  
**Design Consistency**: ✅ Matches LinkCard hover effects
