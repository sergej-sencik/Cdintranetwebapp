import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Card Props
 */
export interface ShowcaseCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

/**
 * Showcase Card Component
 * 
 * Reusable card component for displaying examples in showcase pages.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseCard
 *   title="Primary Button"
 *   subtitle="Roboto • 14px • Medium (500)"
 * >
 *   <Button>Example</Button>
 * </ShowcaseCard>
 * ```
 */
export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  subtitle,
  children,
  className,
  noPadding = false
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg border border-border',
      !noPadding && 'p-6',
      className
    )}>
      {(title || subtitle) && (
        <div className={cn('mb-4', noPadding && 'p-6 pb-0')}>
          {title && (
            <h3 className="text-base mb-1 text-foreground">{title}</h3>
          )}
          {subtitle && (
            <code className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
              {subtitle}
            </code>
          )}
        </div>
      )}
      <div className={cn(noPadding && 'px-6 pb-6')}>
        {children}
      </div>
    </div>
  );
};

ShowcaseCard.displayName = 'ShowcaseCard';
