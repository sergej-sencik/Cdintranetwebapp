/**
 * ============================================
 * DropdownMenuItem Component
 * ============================================
 * 
 * Global dropdown menu item button for use in all dropdown menus.
 * Provides consistent styling, hover effects, and icon support.
 * 
 * Features:
 * - Light blue background on hover (var(--color-blue-50))
 * - Icon and text color change to primary on hover
 * - Lucide icons with consistent styling
 * - Support for links and buttons
 * - Destructive variant for logout/delete actions
 * - Fully accessible with ARIA roles
 * - Uses global CSS variables and design tokens
 * 
 * Usage:
 * ```tsx
 * // As a link
 * <DropdownMenuItem 
 *   icon="newspaper" 
 *   label="All News" 
 *   href="#" 
 * />
 * 
 * // As a button
 * <DropdownMenuItem 
 *   icon="user" 
 *   label="Edit Profile" 
 *   onClick={() => console.log('clicked')} 
 * />
 * 
 * // Destructive variant
 * <DropdownMenuItem 
 *   icon="log-out" 
 *   label="Logout" 
 *   onClick={handleLogout}
 *   variant="destructive"
 * />
 * ```
 */

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

// ============================================
// TYPES & INTERFACES
// ============================================

export interface DropdownMenuItemProps {
  /** Icon name from lucide-react library */
  icon?: string | LucideIcon;
  /** Display label text */
  label: string;
  /** Link href (for anchor element) */
  href?: string;
  /** Click handler (for button element) */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'default' | 'destructive';
  /** Additional CSS classes */
  className?: string;
  /** Icon size (default: 20px for standard items, 18px for user menu) */
  iconSize?: 'sm' | 'md';
  /** Text size (default: 14px) */
  textSize?: 'sm' | 'md';
}

// ============================================
// ICON COMPONENT
// ============================================

interface DropdownIconProps {
  icon: string | LucideIcon;
  size?: 'sm' | 'md';
  variant?: 'default' | 'destructive';
}

function DropdownIcon({ icon, size = 'md', variant = 'default' }: DropdownIconProps) {
  // If icon is already a component, use it directly
  if (typeof icon !== 'string') {
    const IconComponent = icon;
    return (
      <IconComponent 
        className={`
          flex-shrink-0 transition-colors duration-[var(--transition-base)]
          ${size === 'sm' ? 'w-[18px] h-[18px]' : 'w-5 h-5'}
          ${variant === 'destructive' 
            ? 'text-[var(--destructive)] group-hover:text-[var(--destructive)]' 
            : 'text-[var(--foreground-muted)] group-hover:text-[var(--primary)]'
          }
        `}
        strokeWidth={1.5}
      />
    );
  }

  // Convert kebab-case to PascalCase for icon lookup
  const iconName = icon
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const IconComponent = (Icons as any)[iconName] as LucideIcon;

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react library`);
    return null;
  }

  return (
    <IconComponent 
      className={`
        flex-shrink-0 transition-colors duration-[var(--transition-base)]
        ${size === 'sm' ? 'w-[18px] h-[18px]' : 'w-5 h-5'}
        ${variant === 'destructive' 
          ? 'text-[var(--destructive)] group-hover:text-[var(--destructive)]' 
          : 'text-[var(--foreground-muted)] group-hover:text-[var(--primary)]'
        }
      `}
      strokeWidth={1.5}
    />
  );
}

// ============================================
// DROPDOWN MENU ITEM COMPONENT
// ============================================

export function DropdownMenuItem({
  icon,
  label,
  href,
  onClick,
  variant = 'default',
  className = '',
  iconSize = 'md',
  textSize = 'sm',
}: DropdownMenuItemProps) {
  // Base classes for both link and button variants
  const baseClasses = `
    flex items-center gap-3
    transition-colors duration-[var(--transition-base)]
    group
    rounded-[var(--radius-sm)]
    ${variant === 'destructive'
      ? 'text-[var(--destructive)] hover:bg-[var(--color-error-50)] hover:text-[var(--destructive)]'
      : 'text-[var(--foreground)] hover:bg-[var(--color-blue-50)] hover:text-[var(--primary)]'
    }
    ${className}
  `.trim();

  // Padding based on context
  const paddingClasses = iconSize === 'sm' 
    ? 'px-4 py-2.5'  // User menu style (smaller, more compact)
    : 'p-3';          // Mega menu style (more spacious)

  // Text styling
  const textClasses = `
    font-['Roboto',_sans-serif] 
    font-normal 
    transition-colors duration-[var(--transition-base)]
    ${textSize === 'sm' ? 'text-[14px] leading-[20px]' : 'text-[14px]'}
    ${variant === 'destructive'
      ? 'text-[var(--destructive)] group-hover:text-[var(--destructive)]'
      : 'text-[var(--foreground)] group-hover:text-[var(--primary)]'
    }
  `.trim();

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${paddingClasses}`}
        role="menuitem"
      >
        {icon && <DropdownIcon icon={icon} size={iconSize} variant={variant} />}
        <span className={textClasses}>
          {label}
        </span>
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses} ${paddingClasses}
        w-full text-left
        focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2
        first:rounded-t-[var(--radius-sm)]
        last:rounded-b-[var(--radius-sm)]
      `}
      role="menuitem"
      type="button"
    >
      {icon && <DropdownIcon icon={icon} size={iconSize} variant={variant} />}
      <span className={textClasses}>
        {label}
      </span>
    </button>
  );
}

// ============================================
// DIVIDER COMPONENT (Optional)
// ============================================

export function DropdownMenuDivider() {
  return (
    <div 
      className="
        h-px bg-[var(--border)] 
        my-1
      " 
      role="separator" 
      aria-orientation="horizontal"
    />
  );
}

export default DropdownMenuItem;
