/**
 * Search Suggestion Section Component
 * 
 * Reusable component for sections within the search suggestions dropdown.
 * Provides consistent section headers and content layout.
 */

import * as React from 'react';
import { cn } from './utils';

export interface SearchSuggestionSectionProps {
  /** Section title */
  title: string;
  /** Optional action link/button text (e.g., "View All") */
  actionLabel?: string;
  /** Action click handler */
  onActionClick?: () => void;
  /** Section content */
  children: React.ReactNode;
  /** Custom className */
  className?: string;
}

export const SearchSuggestionSection = React.forwardRef<
  HTMLDivElement,
  SearchSuggestionSectionProps
>(({ title, actionLabel, onActionClick, children, className }, ref) => {
  return (
    <div ref={ref} className={cn('py-2', className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-sm text-[var(--foreground-muted)]">
          {title}
        </h3>
        {actionLabel && onActionClick && (
          <button
            onClick={onActionClick}
            className={cn(
              'text-sm text-[var(--primary)] hover:text-[var(--primary-hover)]',
              'transition-colors duration-[var(--transition-base)]',
              'focus:outline-none focus-visible:underline'
            )}
          >
            {actionLabel}
          </button>
        )}
      </div>
      
      {/* Section Content */}
      <div className="space-y-0.5">
        {children}
      </div>
    </div>
  );
});

SearchSuggestionSection.displayName = 'SearchSuggestionSection';
