import React from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import './Header.css';

export interface GlobalHeaderProps {
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

export const Header: React.FC<GlobalHeaderProps> = ({ 
  notificationCount, 
  userProfile, 
  navItems 
}) => {
  const { isDesktop } = useBreakpoint();
  
  return (
    <header className="header">
      {!isDesktop && (
        <MobileHeader 
          notificationCount={notificationCount}
          userProfile={userProfile}
        />
      )}
      {isDesktop && (
        <DesktopHeader 
          notificationCount={notificationCount}
          userProfile={userProfile}
          navItems={navItems}
        />
      )}
    </header>
  );
};
