/**
 * ============================================
 * MegaMenu Component
 * ============================================
 * 
 * Global mega menu dropdown component for navigation.
 * Displays multi-column layout with:
 * - Standard menu columns with icons and links
 * - Featured cards with images
 * - Promotional cards with accent styling
 * - CTA cards with gradient backgrounds
 * 
 * Features:
 * - Hover-based interaction (150ms delay)
 * - Responsive grid layout
 * - Icon support via lucide-react
 * - Uses global CSS variables and design tokens
 * - Supports multiple column types
 * 
 * Usage:
 * ```tsx
 * <MegaMenuContainer>
 *   <HeaderNavButton>Menu 1</HeaderNavButton>
 *   <HeaderNavButton>Menu 2</HeaderNavButton>
 * </MegaMenuContainer>
 * ```
 */

import React, { useState } from 'react';
import { 
  Newspaper, Zap, MapPin, Users, BookOpen, Rss, Lightbulb, Award,
  Calendar, Building, GraduationCap, Star, Ticket, PiggyBank, Wallet,
  Briefcase, Book, TrendingUp, Shield, HardHat, UserPlus, Info, Heart,
  Landmark, Clock, Network, Scale, Gavel, FileText, Presentation,
  File, Sparkles, BarChart, Laptop, MousePointer, HelpCircle, ShieldCheck,
  LifeBuoy, EyeOff, Phone, Wrench, CalendarCheck, UserCog, BookCopy,
  Search, PhoneCall, Headphones, Grid, Construction, List
} from 'lucide-react';
import { DropdownMenuItem } from './dropdown-menu-item';

// ============================================
// TYPES & INTERFACES
// ============================================

interface MenuItem {
  text: string;
  icon: string;
  href?: string;
}

interface MenuColumn {
  title?: string;
  items?: MenuItem[];
  type?: 'featured' | 'promo' | 'cta';
  // For featured
  description?: string;
  image?: string;
  link?: string;
  // For promo and CTA
  icon?: string;
  // For CTA
  subtitle?: string;
  phone?: string;
}

export interface MegaMenuData {
  columns: MenuColumn[];
}

interface MegaMenuProps {
  menuIndex: number;
  menuData?: Record<number, MegaMenuData>;
  onClose: () => void;
}

interface MegaMenuContainerProps {
  children: React.ReactNode;
  menuData?: Record<number, MegaMenuData>;
}

// ============================================
// ICON MAPPING
// ============================================

const iconMap: Record<string, any> = {
  'newspaper': Newspaper,
  'zap': Zap,
  'map-pin': MapPin,
  'users': Users,
  'book-open': BookOpen,
  'rss': Rss,
  'lightbulb': Lightbulb,
  'award': Award,
  'calendar': Calendar,
  'building': Building,
  'graduation-cap': GraduationCap,
  'star': Star,
  'ticket': Ticket,
  'piggy-bank': PiggyBank,
  'wallet': Wallet,
  'briefcase': Briefcase,
  'book': Book,
  'trending-up': TrendingUp,
  'shield': Shield,
  'hard-hat': HardHat,
  'user-plus': UserPlus,
  'info': Info,
  'heart': Heart,
  'landmark': Landmark,
  'clock': Clock,
  'network': Network,
  'scale': Scale,
  'gavel': Gavel,
  'file-text': FileText,
  'presentation': Presentation,
  'file': File,
  'sparkles': Sparkles,
  'bar-chart': BarChart,
  'laptop': Laptop,
  'mouse-pointer': MousePointer,
  'help-circle': HelpCircle,
  'shield-check': ShieldCheck,
  'life-buoy': LifeBuoy,
  'eye-off': EyeOff,
  'phone': Phone,
  'wrench': Wrench,
  'calendar-check': CalendarCheck,
  'user-cog': UserCog,
  'book-copy': BookCopy,
  'search': Search,
  'phone-call': PhoneCall,
  'headset': Headphones,
  'grid': Grid,
  'file-cog': FileText,
  'construction': Construction,
  'list': List,
};

// ============================================
// DEFAULT MENU DATA (Example)
// ============================================

export const defaultMegaMenusData: Record<number, MegaMenuData> = {
  0: { // Example menu
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
        type: 'featured',
        title: 'Modernizace flotily pokračuje',
        description: 'Podívejte se na naše nejnovější vozidla',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop',
        link: '#'
      }
    ]
  }
};

// ============================================
// MEGA MENU COMPONENT
// ============================================

export function MegaMenu({ menuIndex, menuData = defaultMegaMenusData, onClose }: MegaMenuProps) {
  const currentMenuData = menuData[menuIndex];
  
  if (!currentMenuData) return null;

  return (
    <div 
      className="
        absolute top-full left-0 w-full 
        bg-[var(--background)] 
        shadow-[var(--elevation-lg)] 
        border border-[var(--border)] 
        z-[var(--z-dropdown)] 
        overflow-hidden
        rounded-[var(--radius-sm)]
      "
    >
      <div className="max-w-[1280px] mx-auto px-[var(--spacing-8)] py-[var(--spacing-8)]">
        <div 
          className="grid gap-[var(--spacing-8)]" 
          style={{ gridTemplateColumns: `repeat(${currentMenuData.columns.length}, 1fr)` }}
        >
          {currentMenuData.columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {/* Featured Card */}
              {column.type === 'featured' && (
                <a 
                  href={column.link} 
                  className="
                    block overflow-hidden 
                    border border-[var(--border)] 
                    bg-[var(--background)] 
                    hover:shadow-[var(--elevation-md)] 
                    transition-all duration-[var(--transition-base)]
                    rounded-[var(--radius-sm)]
                  "
                >
                  <img 
                    src={column.image} 
                    alt={column.title} 
                    className="w-full h-40 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[var(--foreground)] text-[16px] mb-2">
                      {column.title}
                    </h3>
                    <p className="text-[14px] text-[var(--foreground-muted)] mb-3">
                      {column.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[var(--primary)] text-[14px] font-medium">
                      Číst více
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </a>
              )}
              
              {/* Promo Card */}
              {column.type === 'promo' && (
                <a 
                  href={column.link} 
                  className="
                    block p-6 
                    border border-[var(--primary)] 
                    bg-[var(--color-blue-50)] 
                    hover:shadow-[var(--elevation-md)] 
                    transition-all duration-[var(--transition-base)]
                    rounded-[var(--radius-sm)]
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--background)] rounded-[var(--radius-sm)]">
                      {iconMap[column.icon!] && (() => {
                        const Icon = iconMap[column.icon!];
                        return <Icon className="w-5 h-5 text-[var(--foreground-muted)]" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[var(--foreground)] text-[16px] mb-2">
                        {column.title}
                      </h3>
                      <p className="text-[14px] text-[var(--foreground-muted)] mb-3">
                        {column.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[var(--primary)] text-[14px] font-medium">
                        Přejít
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              )}
              
              {/* CTA Card */}
              {column.type === 'cta' && (
                <div 
                  className="
                    p-6 
                    border-2 border-[var(--accent)] 
                    bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] 
                    text-white
                    rounded-[var(--radius-sm)]
                  "
                >
                  <div className="flex items-center gap-3 mb-4">
                    {iconMap[column.icon!] && (() => {
                      const Icon = iconMap[column.icon!];
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                    <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[18px]">
                      {column.title}
                    </h3>
                  </div>
                  <p className="text-[14px] mb-2 opacity-90">{column.subtitle}</p>
                  <p className="text-[24px] mb-3">{column.phone}</p>
                  <p className="text-[14px] opacity-90">{column.description}</p>
                </div>
              )}
              
              {/* Standard Menu Column */}
              {!column.type && column.items && (
                <>
                  {column.title && (
                    <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[var(--foreground)] text-[16px] mb-3">
                      {column.title}
                    </h3>
                  )}
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// MEGA MENU CONTAINER (with hover logic)
// ============================================

export function MegaMenuContainer({ children, menuData }: MegaMenuContainerProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuIndex: number) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setActiveMenu(menuIndex);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
    setMenuTimeout(timeout);
  };

  const handleMenuMouseEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
  };

  return (
    <div 
      className="relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex items-center justify-center gap-4">
        {React.Children.map(children, (child, index) => (
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {child}
          </div>
        ))}
      </div>
      {activeMenu !== null && (
        <div onMouseEnter={handleMenuMouseEnter}>
          <MegaMenu menuIndex={activeMenu} menuData={menuData} onClose={() => {}} />
        </div>
      )}
    </div>
  );
}

export default MegaMenu;
