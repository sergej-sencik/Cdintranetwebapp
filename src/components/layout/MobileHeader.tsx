import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { NotificationBadge } from '../NotificationBadge';
import { UserNavButton } from '../ui/user-nav-button';
import { SearchInput } from '../ui/search-input';
import { SearchSuggestionsDropdown } from '../ui/search-suggestions-dropdown';
import { MobileMenu } from './MobileMenu';
import { Logo as BrandLogo } from '../brand/Logo';
import './MobileHeader.css';

// Logo Component
function Logo() {
  return (
    <BrandLogo as="a" href="/" variant="full" height={28} className="mobile-header__logo" />
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
            <NotificationBadge count={notificationCount} />
          </div>

          <UserNavButton
            name={userProfile?.name}
            role={userProfile?.role}
            avatarSrc={userProfile?.avatarSrc}
            onEditProfile={() => console.log('Edit profile')}
            onSettings={() => console.log('Settings')}
            onLogout={() => console.log('Logout')}
            variant="mobile"
            className="flex-shrink-0"
          />
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
