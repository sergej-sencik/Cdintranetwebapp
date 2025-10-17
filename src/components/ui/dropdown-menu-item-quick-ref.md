# DropdownMenuItem Quick Reference

## Import

```tsx
import { DropdownMenuItem, DropdownMenuDivider } from './components/ui/dropdown-menu-item';
```

## Basic Patterns

### As Link
```tsx
<DropdownMenuItem icon="newspaper" label="News" href="/news" />
```

### As Button
```tsx
<DropdownMenuItem icon="user" label="Profile" onClick={handleClick} />
```

### With Lucide Component
```tsx
import { User } from 'lucide-react';
<DropdownMenuItem icon={User} label="Profile" onClick={handleClick} />
```

## Variants

### Default (Light Blue Hover)
```tsx
<DropdownMenuItem icon="home" label="Dashboard" href="/" />
```

### Destructive (Red)
```tsx
<DropdownMenuItem 
  icon="log-out" 
  label="Logout" 
  onClick={logout}
  variant="destructive"
/>
```

## Sizes

### Mega Menu (Spacious)
```tsx
<DropdownMenuItem 
  icon="newspaper" 
  label="News" 
  href="#"
  iconSize="md"  // 20px icons, p-3
/>
```

### User Menu (Compact)
```tsx
<DropdownMenuItem 
  icon="user" 
  label="Profile" 
  onClick={() => {}}
  iconSize="sm"  // 18px icons, px-4 py-2.5
  textSize="sm"  // 14px/20px line-height
/>
```

## With Divider

```tsx
<DropdownMenuItem icon="edit" label="Edit" onClick={edit} />
<DropdownMenuItem icon="copy" label="Copy" onClick={copy} />
<DropdownMenuDivider />
<DropdownMenuItem icon="trash" label="Delete" onClick={del} variant="destructive" />
```

## Common Icons

### User Actions
- `user` - Profile
- `settings` - Settings  
- `log-out` - Logout

### Content
- `newspaper` - News
- `calendar` - Calendar
- `book` - Documents
- `file` - Files

### Communication
- `phone` - Phone
- `mail` - Email
- `message-square` - Messages

### Navigation
- `home` - Home
- `arrow-right` - Next
- `external-link` - External

## Full Menu Example

```tsx
import { User, Settings, LogOut } from 'lucide-react';
import { DropdownMenuItem, DropdownMenuDivider } from './components/ui/dropdown-menu-item';

<div className="bg-white border rounded-lg p-1">
  <DropdownMenuItem 
    icon={User} 
    label="Edit Profile" 
    onClick={handleEdit}
    iconSize="sm"
    textSize="sm"
  />
  <DropdownMenuItem 
    icon={Settings} 
    label="Settings" 
    onClick={handleSettings}
    iconSize="sm"
    textSize="sm"
  />
  <DropdownMenuDivider />
  <DropdownMenuItem 
    icon={LogOut} 
    label="Logout" 
    onClick={handleLogout}
    variant="destructive"
    iconSize="sm"
    textSize="sm"
  />
</div>
```

## CSS Variables

- `--color-blue-50` - Hover background
- `--primary` - Hover text/icon color
- `--foreground` - Default text
- `--foreground-muted` - Default icon
- `--destructive` - Destructive color
- `--color-error-50` - Destructive hover bg
- `--border` - Divider color
- `--radius-sm` - Border radius
- `--transition-base` - Animation duration

## Props Cheat Sheet

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string \| LucideIcon` | - | Icon name or component |
| `label` | `string` | **required** | Display text |
| `href` | `string` | - | Link URL (renders `<a>`) |
| `onClick` | `() => void` | - | Click handler (renders `<button>`) |
| `variant` | `'default' \| 'destructive'` | `'default'` | Visual style |
| `iconSize` | `'sm' \| 'md'` | `'md'` | Icon size |
| `textSize` | `'sm' \| 'md'` | `'sm'` | Text size |
| `className` | `string` | `''` | Additional classes |

## Tips

1. **Use `href` for links, `onClick` for actions**
2. **Match sizes**: `iconSize="sm"` + `textSize="sm"` for compact menus
3. **Always use `destructive` variant for dangerous actions**
4. **Group related items with dividers**
5. **Prefer icon components over strings for better type safety**
