import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Section Content Props
 */
export interface ShowcaseSectionContentProps {
  /** Content to display */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * Showcase Section Content Component
 * 
 * Standard wrapper for showcase section content with consistent vertical spacing.
 * Always uses space-y-8 (32px) between child elements for uniform presentation.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseSection id="buttons" title="Buttons" description="Button variants">
 *   <ShowcaseSectionContent>
 *     <ShowcaseCard title="Primary">...</ShowcaseCard>
 *     <ShowcaseCard title="Secondary">...</ShowcaseCard>
 *   </ShowcaseSectionContent>
 * </ShowcaseSection>
 * ```
 */
export const ShowcaseSectionContent: React.FC<ShowcaseSectionContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('space-y-8', className)}>
      {children}
    </div>
  );
};

ShowcaseSectionContent.displayName = 'ShowcaseSectionContent';
