import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Content Props
 */
export interface ShowcaseContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Showcase Content Component
 * 
 * Main content area wrapper for showcase pages with consistent spacing.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseContent>
 *   <ShowcaseHeader />
 *   <ShowcaseSection>...</ShowcaseSection>
 * </ShowcaseContent>
 * ```
 */
export const ShowcaseContent: React.FC<ShowcaseContentProps> = ({
  children,
  className
}) => {
  return (
    <main className={cn('flex-1 space-y-12', className)}>
      {children}
    </main>
  );
};

ShowcaseContent.displayName = 'ShowcaseContent';
