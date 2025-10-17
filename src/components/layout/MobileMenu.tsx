import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  href?: string;
  hasSubItems?: boolean;
  subItems?: Array<{
    text: string;
    href: string;
    icon?: string;
  }>;
}

// Navigation items with subsections matching the mega menu data
const menuItems: MenuItem[] = [
  {
    label: 'Novinky a média',
    hasSubItems: true,
    subItems: [
      { text: 'Všechny novinky', href: '#', icon: 'newspaper' },
      { text: 'Aktuálně z ČD', href: '#', icon: 'zap' },
      { text: 'Z regionů', href: '#', icon: 'map-pin' },
      { text: 'Magazíny a tisk', href: '#', icon: 'book-open' },
      { text: 'Tiskové zprávy', href: '#', icon: 'rss' },
      { text: 'Kalendář akcí', href: '#', icon: 'calendar' },
    ]
  },
  {
    label: 'Pro zaměstnance',
    hasSubItems: true,
    subItems: [
      { text: 'Přehled všech benefitů', href: '#', icon: 'star' },
      { text: 'Režijní jízdenky', href: '#', icon: 'ticket' },
      { text: 'Mzda a výplatnice', href: '#', icon: 'wallet' },
      { text: 'Volná místa v ČD', href: '#', icon: 'briefcase' },
      { text: 'Vzdělávání a kurzy', href: '#', icon: 'book' },
      { text: 'Zdraví a bezpečnost', href: '#', icon: 'shield' },
    ]
  },
  {
    label: 'Naše firma',
    hasSubItems: true,
    subItems: [
      { text: 'Základní informace', href: '#', icon: 'info' },
      { text: 'Naše hodnoty a kultura', href: '#', icon: 'heart' },
      { text: 'Vedení společnosti', href: '#', icon: 'landmark' },
      { text: 'Historie Českých drah', href: '#', icon: 'clock' },
      { text: 'Organizační struktura', href: '#', icon: 'network' },
    ]
  },
  {
    label: 'Dokumenty',
    hasSubItems: true,
    subItems: [
      { text: 'Etický kodex', href: '#', icon: 'scale' },
      { text: 'Bezpečnostní politika', href: '#', icon: 'shield' },
      { text: 'Interní směrnice', href: '#', icon: 'gavel' },
      { text: 'Technické manuály', href: '#', icon: 'file-cog' },
      { text: 'HR formuláře', href: '#', icon: 'file-text' },
    ]
  },
  {
    label: 'Podpora',
    hasSubItems: true,
    subItems: [
      { text: 'Nahlásit IT problém', href: '#', icon: 'laptop' },
      { text: 'Žádost o software/hardware', href: '#', icon: 'mouse-pointer' },
      { text: 'Návody a znalostní báze', href: '#', icon: 'help-circle' },
      { text: 'Řešení problémů (FAQ)', href: '#', icon: 'life-buoy' },
      { text: 'Telefony a spojení', href: '#', icon: 'phone' },
    ]
  },
  {
    label: 'Nástroje a aplikace',
    href: '#aplikace',
    hasSubItems: false,
  },
  {
    label: 'Telefonní seznam',
    href: '#telefon',
    hasSubItems: false,
  },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Reset expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems(new Set());
    }
  }, [isOpen]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="mobile-menu-overlay" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <nav 
        className="mobile-menu"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mobile-menu__header">
          <h2>Menu</h2>
          <button 
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <ul className="mobile-menu__list">
          {menuItems.map((item, index) => (
            <li key={index} className="mobile-menu__item">
              {item.hasSubItems ? (
                <>
                  <button
                    className="mobile-menu__item-button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expandedItems.has(index)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`mobile-menu__chevron ${expandedItems.has(index) ? 'mobile-menu__chevron--expanded' : ''}`}
                      size={20}
                    />
                  </button>
                  {expandedItems.has(index) && (
                    <ul className="mobile-menu__subitems">
                      {item.subItems?.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href={subItem.href} 
                            onClick={onClose}
                            className="mobile-menu__subitem-link"
                          >
                            {subItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a 
                  href={item.href} 
                  onClick={onClose}
                  className="mobile-menu__item-link"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
