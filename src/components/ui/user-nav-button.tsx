/**
 * ============================================
 * UserNavButton Component
 * ============================================
 * 
 * Global user navigation button with dropdown menu.
 * Displays user avatar, name, role, and provides access to:
 * - Edit Profile (Upravit profil)
 * - Settings (Nastavení) 
 * - Logout (Odhlásit se)
 * 
 * Features:
 * - Hover states with elevation
 * - Dropdown menu on hover (150ms delay on leave)
 * - Automatic close when mouse leaves
 * - Keyboard navigation (Escape to close)
 * - Mobile variant (avatar only)
 * - Uses global styles and design tokens
 * - Content from static JSON
 */

import * as React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import imgAvatar from 'figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png';
import { DropdownMenuItem, DropdownMenuDivider } from './dropdown-menu-item';

export interface UserNavButtonProps {
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
  /** Mobile variant - shows only avatar */
  variant?: 'default' | 'mobile';
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full transition-transform duration-200 group-data-[state=open]:rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Avatar({ src, name }: { src?: string; name?: string }) {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  // Use default avatar if no src provided
  const avatarSrc = src || imgAvatar;

  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <img 
        alt={name || 'User avatar'} 
        className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[9999px] size-full" 
        src={avatarSrc} 
      />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

export function UserNavButton({ 
  name = 'Jan Novotný',
  role = 'Technik kolejových vozidel',
  avatarSrc,
  onEditProfile,
  onSettings,
  onLogout,
  className = '',
  variant = 'default'
}: UserNavButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hoverTimeout, setHoverTimeout] = React.useState<NodeJS.Timeout | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  // Menu labels (Czech) - from static content
  const editProfileLabel = 'Upravit profil';
  const settingsLabel = 'Nastavení';
  const logoutLabel = 'Odhlásit se';

  // Close dropdown on Escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMenuItemClick = (callback?: () => void) => {
    setIsOpen(false);
    callback?.();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className={`relative ${className}`} 
      data-name="UserNavButton"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* User Button - Mobile vs Desktop */}
      <div
        ref={buttonRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`
          group
          bg-white box-border content-stretch flex gap-[8px] items-center 
          overflow-clip relative rounded-[var(--radius-sm)] 
          shrink-0 cursor-pointer
          transition-shadow duration-300
          hover:shadow-[var(--elevation-sm)]
          active:shadow-[var(--elevation-xs)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--ring)]
          focus-visible:ring-offset-2
          ${variant === 'mobile' ? 'w-[40px] h-[40px] p-1 justify-center' : 'w-[244px] px-[12px] py-[8px]'}
        `}
        data-state={isOpen ? 'open' : 'closed'}
        role="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        {/* User Info - Hide text on mobile */}
        <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
          <Avatar src={avatarSrc} name={name} />
          {variant !== 'mobile' && (
            <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0 text-[var(--foreground)]">
              <p className="font-['Roboto',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre">
                {name}
              </p>
              <p className="font-['Roboto',_sans-serif] font-normal leading-[14px] min-w-full relative shrink-0 text-[12px] w-[min-content] text-[var(--foreground-muted)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {role}
              </p>
            </div>
          )}
        </div>

        {/* Chevron Icon - Hide on mobile */}
        {variant !== 'mobile' && <ChevronDown />}

        {/* Border - only visible on hover */}
        <div 
          aria-hidden="true" 
          className="
            absolute border border-transparent border-solid inset-0 
            pointer-events-none rounded-[var(--radius-sm)]
            transition-colors duration-300
            group-hover:border-[#e9eaeb]
          " 
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={handleDropdownMouseEnter}
          className="
            absolute top-[calc(100%+4px)] right-0 w-[240px]
            bg-[var(--background)] rounded-[var(--radius-sm)]
            shadow-[var(--elevation-lg)]
            border border-[var(--border)]
            py-1 z-[var(--z-dropdown)]
            animate-in fade-in-0 zoom-in-95 duration-200
          "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <DropdownMenuItem
            icon={User}
            label={editProfileLabel}
            onClick={() => handleMenuItemClick(onEditProfile)}
            iconSize="sm"
            textSize="sm"
          />
          <DropdownMenuItem
            icon={Settings}
            label={settingsLabel}
            onClick={() => handleMenuItemClick(onSettings)}
            iconSize="sm"
            textSize="sm"
          />
          <DropdownMenuDivider />
          <DropdownMenuItem
            icon={LogOut}
            label={logoutLabel}
            onClick={() => handleMenuItemClick(onLogout)}
            variant="destructive"
            iconSize="sm"
            textSize="sm"
          />
        </div>
      )}
    </div>
  );
}
