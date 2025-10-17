import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Layout Props
 */
export interface ShowcaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Showcase Layout Component
 * 
 * Wrapper layout for showcase pages with consistent container and spacing.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseLayout>
 *   <ShowcaseSidebar />
 *   <ShowcaseContent />
 * </ShowcaseLayout>
 * ```
 */
export const ShowcaseLayout: React.FC<ShowcaseLayoutProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn('w-full max-w-[1280px] mx-auto px-8 pb-16', className)}>
      <div className="flex gap-8">
        {children}
      </div>
    </div>
  );
};

ShowcaseLayout.displayName = 'ShowcaseLayout';
