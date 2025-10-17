import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Section Props
 */
export interface ShowcaseSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Showcase Section Component
 * 
 * Reusable section component for showcase pages with consistent spacing and headers.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseSection
 *   id="buttons"
 *   title="Buttons"
 *   description="Button components and variants"
 * >
 *   <ButtonExamples />
 * </ShowcaseSection>
 * ```
 */
export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  id,
  title,
  description,
  children,
  className
}) => {
  return (
    <section id={id} className={cn('space-y-6', className)}>
      <div>
        <h2 className="text-h2 mb-2 text-foreground">{title}</h2>
        {description && (
          <p className="text-foreground-muted">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
};

ShowcaseSection.displayName = 'ShowcaseSection';
