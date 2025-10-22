import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { CustomButton } from '../ui/custom-button';
import { HeaderNavButton } from '../ui/header-nav-button';
import { UserNavButton } from '../ui/user-nav-button';
import { MegaMenuContainer, type MegaMenuData } from '../ui/mega-menu';
import { NotificationBadge } from '../NotificationBadge';
import { SearchInput } from '../ui/search-input';
import { SearchSuggestionsDropdown } from '../ui/search-suggestions-dropdown';
import { Logo as BrandLogo } from '../brand/Logo';
import imgAvatar from 'figma:asset/6bfd89ee2dda2c5201ce92bce759705f5ff2b894.png';
import './DesktopHeader.css';

/**
 * Enhanced scroll behavior hook with smooth show/hide transitions
 */
function useShowOnScrollUp() {
  const [show, setShow] = React.useState(true);
  const lastScrollRef = React.useRef(0);
  const tickingRef = React.useRef(false);
  const directionRef = React.useRef<'up' | 'down'>('up');

  React.useEffect(() => {
    const threshold = 14;  // fewer flips on fast flicks
    const topZone = 20;    // always show near top
    
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const current = window.scrollY || 0;
        const delta = current - lastScrollRef.current;
        const newDir = delta > 0 ? 'down' : 'up';

        if (current < topZone) {
          setShow(true);
        } else if (Math.abs(delta) > threshold && newDir !== directionRef.current) {
          setShow(newDir === 'up');
          directionRef.current = newDir;
        }

        lastScrollRef.current = current;
        tickingRef.current = false;
      });
    };

    // Initialize state near top
    if (window.scrollY < topZone) setShow(true);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return show;
}

// Logo Component
function Logo() {
  return (
    <BrandLogo as="a" href="/" height={32} className="relative shrink-0" />
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[17.625px] items-center relative shrink-0" data-name="Content">
      <Logo />
    </div>
  );
}

// Search Component
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

function Input() {
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
    // You can navigate or perform search here
    if (suggestion.label) {
      setSearchQuery(suggestion.label);
    } else if (suggestion.name) {
      setSearchQuery(suggestion.name);
    } else if (suggestion.title) {
      setSearchQuery(suggestion.title);
    }
  };

  return (
    <div 
      ref={inputWrapperRef}
      className="bg-white relative rounded-[4px] shrink-0 w-full" 
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <SearchInput
          placeholder="Hledejte kolegu, dokument nebo novinku..."
          onSearch={(value) => console.log('Search:', value)}
          showClearButton={false}
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
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      
      {/* Search Suggestions Dropdown */}
      <SearchSuggestionsDropdown
        ref={dropdownRef}
        isOpen={isDropdownOpen}
        query={searchQuery}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[400px]" data-name="Select">
      <InputWithLabel />
    </div>
  );
}

// Notifications & Profile
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

function Actions({ notificationCount }: { notificationCount?: number }) {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Actions">
      <NotificationBadge />
    </div>
  );
}

// User Profile
function Avatar({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[9999px] size-full" src={imageSrc || imgAvatar} />
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

interface UserProfileProps {
  name?: string;
  role?: string;
  avatarSrc?: string;
}

function Frame2({ name = 'Jan Novotný', role = 'Technik kolejových vozidel' }: UserProfileProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0 text-[#252b37]">
      <p className="font-['Roboto:Semibold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre">{name}</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[14px] min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {role}
      </p>
    </div>
  );
}

function Input1({ name, role, avatarSrc }: UserProfileProps) {
  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    // TODO: Navigate to profile edit page
  };

  const handleSettings = () => {
    console.log('Settings clicked');
    // TODO: Navigate to settings page
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // TODO: Handle logout
  };

  return (
    <UserNavButton
      name={name}
      role={role}
      avatarSrc={avatarSrc}
      onEditProfile={handleEditProfile}
      onSettings={handleSettings}
      onLogout={handleLogout}
    />
  );
}

function Content3({ notificationCount, userProfile }: { notificationCount?: number; userProfile?: UserProfileProps }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Actions notificationCount={notificationCount} />
      <Input1 {...userProfile} />
    </div>
  );
}

// Top Header Container
function Container({ notificationCount, userProfile }: { notificationCount?: number; userProfile?: UserProfileProps }) {
  return (
    <div className="h-[72px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex h-[72px] items-center justify-between max-w-inherit px-[32px] py-0 relative w-full">
          <Content />
          <Select />
          <Content3 notificationCount={notificationCount} userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigationMain({ notificationCount, userProfile }: { notificationCount?: number; userProfile?: UserProfileProps }) {
  return (
    <div 
      className="cd-topbar bg-white content-stretch flex flex-col items-center relative shrink-0 w-full z-[10]" 
      data-name="Header navigation / Main"
      aria-label="Primary header"
    >
      <Container notificationCount={notificationCount} userProfile={userProfile} />
    </div>
  );
}

// Navigation Menu
interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  hasDropdown?: boolean;
}

interface HeaderNavigationProps {
  navItems?: NavItem[];
}

// Mega Menu Data for Header Navigation
const megaMenusData: Record<number, MegaMenuData> = {
  0: { // Novinky a média
    columns: [
      {
        title: 'Aktuality',
        items: [
          { text: 'Všechny novinky', icon: 'newspaper', href: '#' },
          { text: 'Aktuálně z ČD', icon: 'zap', href: '#' },
          { text: 'Z regionů', icon: 'map-pin', href: '#' },
          { text: 'Příběhy zaměstnanců', icon: 'users', href: '#' }
        ]
      },
      {
        title: 'Média a Tipy',
        items: [
          { text: 'Magazíny a tisk', icon: 'book-open', href: '#' },
          { text: 'Tiskové zprávy', icon: 'rss', href: '#' },
          { text: 'Naše tipy', icon: 'lightbulb', href: '#' },
          { text: 'Soutěže', icon: 'award', href: '#' }
        ]
      },
      {
        title: 'Kalendář akcí',
        items: [
          { text: 'Všechny akce', icon: 'calendar', href: '#' },
          { text: 'Firemní akce', icon: 'building', href: '#' },
          { text: 'Školení a workshopy', icon: 'graduation-cap', href: '#' }
        ]
      },
      {
        type: 'featured',
        title: 'Modernizace flotily pokračuje',
        description: 'Podívejte se na naše nejnovější vozidla',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop',
        link: '#'
      }
    ]
  },
  1: { // Pro zaměstnance
    columns: [
      {
        title: 'Benefity a odměny',
        items: [
          { text: 'Přehled všech benefitů', icon: 'star', href: '#' },
          { text: 'Režijní jízdenky', icon: 'ticket', href: '#' },
          { text: 'Příspěvky a slevy', icon: 'piggy-bank', href: '#' },
          { text: 'Mzda a výplatnice', icon: 'wallet', href: '#' }
        ]
      },
      {
        title: 'Kariéra a rozvoj',
        items: [
          { text: 'Volná místa v ČD', icon: 'briefcase', href: '#' },
          { text: 'Vzdělávání a kurzy', icon: 'book', href: '#' },
          { text: 'Kariérní cesta a rozvoj', icon: 'trending-up', href: '#' }
        ]
      },
      {
        title: 'Praktické informace',
        items: [
          { text: 'Zdraví a bezpečnost', icon: 'shield', href: '#' },
          { text: 'Pracovní prostředky', icon: 'hard-hat', href: '#' },
          { text: 'Pro nové zaměstnance', icon: 'user-plus', href: '#' }
        ]
      }
    ]
  },
  2: { // Naše firma
    columns: [
      {
        title: 'O společnosti',
        items: [
          { text: 'Základní informace', icon: 'info', href: '#' },
          { text: 'Naše hodnoty a kultura', icon: 'heart', href: '#' },
          { text: 'Vedení společnosti', icon: 'landmark', href: '#' },
          { text: 'Historie Českých drah', icon: 'clock', href: '#' }
        ]
      },
      {
        title: 'Struktura a pravidla',
        items: [
          { text: 'Organizační struktura', icon: 'network', href: '#' },
          { text: 'Pravidla a etika', icon: 'book-open', href: '#' },
          { text: 'Etický kodex', icon: 'scale', href: '#' }
        ]
      },
      {
        type: 'promo',
        title: 'Odbory a jednotky',
        description: 'Kompletní přehled všech odborů a jednotek společnosti',
        icon: 'building',
        link: '#'
      }
    ]
  },
  3: { // Dokumenty
    columns: [
      {
        title: 'Pravidla a kodexy',
        items: [
          { text: 'Etický kodex', icon: 'scale', href: '#' },
          { text: 'Bezpečnostní politika', icon: 'shield', href: '#' },
          { text: 'Interní směrnice', icon: 'gavel', href: '#' }
        ]
      },
      {
        title: 'Provozní dokumentace',
        items: [
          { text: 'Technické manuály', icon: 'file-cog', href: '#' },
          { text: 'Provozní postupy', icon: 'construction', href: '#' },
          { text: 'Checklisty a protokoly', icon: 'list', href: '#' }
        ]
      },
      {
        title: 'Šablony a vzory',
        items: [
          { text: 'HR formuláře', icon: 'file-text', href: '#' },
          { text: 'Šablony prezentací', icon: 'presentation', href: '#' },
          { text: 'Žádosti a hlášení', icon: 'file', href: '#' }
        ]
      },
      {
        title: 'Rychlé odkazy',
        items: [
          { text: 'Nejnověji přidané', icon: 'sparkles', href: '#' },
          { text: 'Nejčastěji stahované', icon: 'bar-chart', href: '#' }
        ]
      }
    ]
  },
  4: { // Podpora
    columns: [
      {
        title: 'IT Podpora',
        items: [
          { text: 'Nahlásit IT problém', icon: 'laptop', href: '#' },
          { text: 'Žádost o software/hardware', icon: 'mouse-pointer', href: '#' },
          { text: 'Návody a znalostní báze', icon: 'help-circle', href: '#' },
          { text: 'Kybernetická bezpečnost', icon: 'shield-check', href: '#' }
        ]
      },
      {
        title: 'Interní servis a hlášení',
        items: [
          { text: 'Řešení problémů (FAQ)', icon: 'life-buoy', href: '#' },
          { text: 'Hlášení podvodů', icon: 'eye-off', href: '#' },
          { text: 'Telefony a spojení', icon: 'phone', href: '#' }
        ]
      },
      {
        type: 'cta',
        title: 'IT Helpdesk',
        subtitle: 'Nonstop podpora',
        phone: '+420 800 123 456',
        description: 'Volejte kdykoliv při problémech s IT',
        icon: 'headset'
      }
    ]
  },
  5: { // Nástroje a aplikace
    columns: [
      {
        title: 'Moje oblíbené nástroje',
        items: [
          { text: 'Systém údržby AVIS', icon: 'wrench', href: '#' },
          { text: 'E-learningový portál', icon: 'graduation-cap', href: '#' },
          { text: 'Rezervace zasedacích místností', icon: 'calendar-check', href: '#' }
        ]
      },
      {
        title: 'Klíčové firemní systémy',
        items: [
          { text: 'Zaměstnanecký portál (HR)', icon: 'user-cog', href: '#' },
          { text: 'IS NORMIS (Technické normy)', icon: 'book-copy', href: '#' },
          { text: 'Docházkový systém', icon: 'clock', href: '#' }
        ]
      },
      {
        type: 'promo',
        title: 'Katalog aplikací',
        description: 'Objevte všechny firemní nástroje a aplikace na jednom místě',
        icon: 'grid',
        link: '#'
      }
    ]
  },
  6: { // Kontakty
    columns: [
      {
        title: 'Rychlý přístup',
        items: [
          { text: 'Kontakty mého odboru', icon: 'users', href: '#' },
          { text: 'Všechny kontakty (filtrovat)', icon: 'search', href: '#' }
        ]
      },
      {
        title: 'Užitečné odkazy',
        items: [
          { text: 'Organizační struktura', icon: 'network', href: '#' },
          { text: 'Seznam pracovišť', icon: 'building', href: '#' },
          { text: 'Důležité linky', icon: 'phone-call', href: '#' }
        ]
      }
    ]
  }
};

function Container1({ navItems }: HeaderNavigationProps) {
  // Default navigation items with dropdown indicators
  const defaultNavItems = [
    { label: 'Novinky a média', hasDropdown: true },
    { label: 'Pro zaměstnance', hasDropdown: true },
    { label: 'Naše firma', hasDropdown: true },
    { label: 'Dokumenty', hasDropdown: true },
    { label: 'Podpora', hasDropdown: true },
    { label: 'Nástroje a aplikace', hasDropdown: false },
    { label: 'Telefonní seznam', hasDropdown: false },
  ];

  const items = navItems || defaultNavItems;

  return (
    <div className="h-[46px] max-w-[1280px] mx-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[46px] items-center justify-center max-w-inherit px-[32px] py-0 relative w-full">
          <MegaMenuContainer menuData={megaMenusData}>
            {items.map((item, index) => (
              <HeaderNavButton 
                key={index}
                onClick={item.onClick}
                hasDropdown={'hasDropdown' in item ? item.hasDropdown : true}
              >
                {item.label}
              </HeaderNavButton>
            ))}
          </MegaMenuContainer>
        </div>
      </div>
    </div>
  );
}

function HeaderNavigation({ navItems }: HeaderNavigationProps) {
  return (
    <div 
      className="cd-bluebar-fixed bg-[#009fda] content-stretch flex flex-col items-center justify-center overflow-visible relative shrink-0 w-full z-[9]" 
      data-name="Header navigation"
    >
      <Container1 navItems={navItems} />
    </div>
  );
}

// Main DesktopHeader Export
export interface DesktopHeaderProps {
  notificationCount?: number;
  userProfile?: {
    name?: string;
    role?: string;
    avatarSrc?: string;
  };
  navItems?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    hasDropdown?: boolean;
  }>;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ 
  notificationCount = 4, 
  userProfile, 
  navItems 
}) => {
  const showTopBar = useShowOnScrollUp();

  React.useEffect(() => {
    // Toggle class on <html> for CSS-only animations and lower specificity
    const root = document.documentElement;
    if (showTopBar) {
      root.classList.add('cd-topbar-visible');
      root.classList.remove('cd-topbar-hidden');
    } else {
      root.classList.add('cd-topbar-hidden');
      root.classList.remove('cd-topbar-visible');
    }

    // Announce visibility changes for screen readers
    const live = document.getElementById('cd-topbar-live');
    if (live) live.textContent = showTopBar ? 'Header shown' : 'Header hidden';
  }, [showTopBar]);

  return (
    <>
      <HeaderNavigationMain notificationCount={notificationCount} userProfile={userProfile} />
      <HeaderNavigation navItems={navItems} />
    </>
  );
};
