import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { CustomButton } from '../ui/custom-button';
import { NotificationBadge } from '../NotificationBadge';
import { SearchInput } from '../ui/search-input';
import { SearchSuggestionsDropdown } from '../ui/search-suggestions-dropdown';
import imgAvatar from 'figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png';
import './MobileHeader.css';

// Logo Component
function Logomark() {
  return (
    <div className="h-[28px] relative shrink-0 w-[43px]" data-name="Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 32">
        <g id="Logomark">
          <g id="Union">
            <path d={svgPaths.p227b9a00} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p373e43f0} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p20376e00} fill="var(--fill-0, #002664)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <Logomark />
      <div className="flex flex-col justify-center">
        <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[18px] leading-none text-[color:var(--color-blue-500)]">
          Intranet
        </p>
      </div>
    </a>
  );
}

// Hamburger Menu Icon
function Menu01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu-01">
          <path d="M3 12H21M3 6H21M3 18H21" id="Icon" stroke="var(--stroke-0, #252B37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

// Notifications Icon
function Bell01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bell-01">
          <path d={svgPaths.p3f75b400} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

// Search Icon
function SearchLg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search-lg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search-lg">
          <path d={svgPaths.p22fdb270} id="Icon" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

// User Avatar
function Avatar({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imageSrc || imgAvatar} />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

export interface MobileHeaderProps {
  notificationCount?: number;
  userProfile?: {
    name?: string;
    role?: string;
    avatarSrc?: string;
  };
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  notificationCount, 
  userProfile 
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const inputWrapperRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Handle clicks outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: any) => {
    console.log('Suggestion clicked:', suggestion);
    setIsDropdownOpen(false);
    if (suggestion.label) {
      setSearchQuery(suggestion.label);
    } else if (suggestion.name) {
      setSearchQuery(suggestion.name);
    } else if (suggestion.title) {
      setSearchQuery(suggestion.title);
    }
  };

  return (
    <div className="mobile-header">
      {/* Top Bar */}
      <div className="mobile-header__top-bar">
        <button 
          className="mobile-header__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu01 />
        </button>

        <Logo />

        <div className="mobile-header__actions">
          <button 
            className="mobile-header__search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <SearchLg />
          </button>
          
          <div className="mobile-header__notification">
            <NotificationBadge />
          </div>

          <button className="mobile-header__avatar-button" aria-label="User menu">
            <Avatar imageSrc={userProfile?.avatarSrc} />
          </button>
        </div>
      </div>

      {/* Search Bar (collapsible) */}
      {isSearchOpen && (
        <div className="mobile-header__search-bar" ref={inputWrapperRef}>
          <div className="mobile-header__search-input-wrapper">
            <SearchInput
              placeholder="Hledat..."
              onSearch={(value) => console.log('Search:', value)}
              showClearButton={true}
              size="sm"
              className="border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsDropdownOpen(true)}
            />
          </div>
          
          {/* Search Suggestions Dropdown */}
          <SearchSuggestionsDropdown
            ref={dropdownRef}
            isOpen={isDropdownOpen}
            query={searchQuery}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
      )}

      {/* Mobile Navigation Menu (collapsible) */}
      {isMenuOpen && (
        <nav className="mobile-header__nav">
          <a href="#novinky" className="mobile-header__nav-item">Novinky a média</a>
          <a href="#zamestnance" className="mobile-header__nav-item">Pro zaměstnance</a>
          <a href="#firma" className="mobile-header__nav-item">Naše firma</a>
          <a href="#dokumenty" className="mobile-header__nav-item">Dokumenty</a>
          <a href="#podpora" className="mobile-header__nav-item">Podpora</a>
          <a href="#aplikace" className="mobile-header__nav-item">Nástroje a aplikace</a>
          <a href="#telefon" className="mobile-header__nav-item">Telefonní seznam</a>
        </nav>
      )}
    </div>
  );
};
