/**
 * Search Suggestion Item Component
 * 
 * Reusable component for individual items in the search suggestions dropdown.
 * Follows the design system with hover states and icon support.
 */

import * as React from 'react';
import { cn } from './utils';

export interface SearchSuggestionItemProps {
  /** Icon component to display on the left */
  icon?: React.ReactNode;
  /** Main text label */
  label: string;
  /** Optional secondary text (e.g., department, date) */
  subtitle?: string;
  /** Optional badge or tag */
  badge?: string;
  /** Click handler */
  onClick?: () => void;
  /** Custom className */
  className?: string;
}

export const SearchSuggestionItem = React.forwardRef<
  HTMLButtonElement,
  SearchSuggestionItemProps
>(({ icon, label, subtitle, badge, onClick, className }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn(
        // Layout
        'flex items-center gap-3 w-full px-4 py-3',
        // Typography from design system
        'text-left',
        // Colors from design system
        'text-[var(--foreground)]',
        // Hover state
        'hover:bg-[var(--background-subtle)] transition-colors duration-[var(--transition-base)]',
        // Focus state
        'focus:outline-none focus-visible:bg-[var(--background-muted)]',
        // Cursor
        'cursor-pointer',
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="flex items-center justify-center shrink-0 w-5 h-5 text-[var(--foreground-muted)]">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate">{label}</span>
          {badge && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shrink-0">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <div className="text-sm text-[var(--foreground-muted)] truncate mt-0.5">
            {subtitle}
          </div>
        )}
      </div>
    </button>
  );
});

SearchSuggestionItem.displayName = 'SearchSuggestionItem';
