import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { NotificationBadge } from '../NotificationBadge';
import { SearchInput } from '../ui/search-input';
import { SearchSuggestionsDropdown } from '../ui/search-suggestions-dropdown';
import { MobileMenu } from './MobileMenu';
import imgAvatar from 'figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png';
import './MobileHeader.css';

// Logo Component (full version with text for mobile)
function Logo() {
  return (
    <a href="/" className="mobile-header__logo" aria-label="Home">
      <div className="mobile-header__logo-mark">
        <svg className="mobile-header__logo-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 50 32">
          <g id="Logomark">
            <g id="Union">
              <path d={svgPaths.p227b9a00} fill="var(--fill-0, #002664)" />
              <path d={svgPaths.p373e43f0} fill="var(--fill-0, #002664)" />
              <path d={svgPaths.p20376e00} fill="var(--fill-0, #002664)" />
            </g>
          </g>
        </svg>
      </div>
      <div className="mobile-header__logo-text">
        Intranet
      </div>
    </a>
  );
}

// User Avatar
function Avatar({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="mobile-header__avatar">
      <img alt="User profile" src={imageSrc || imgAvatar} />
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
      <div className="mobile-header__top">
        <button 
          className="mobile-header__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <Logo />

        <div className="mobile-header__actions">
          <button 
            className="mobile-header__search-toggle"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
            aria-expanded={isSearchOpen}
          >
            <svg className="mobile-header__icon" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p22fdb270} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
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
              size="md"
              className="border-0"
              value={searchQuery}
              onChange={(e) => {
                const value = typeof e === 'string' ? e : e.target.value;
                setSearchQuery(value);
              }}
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

      {/* Mobile Navigation Menu (slide-in) */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};
