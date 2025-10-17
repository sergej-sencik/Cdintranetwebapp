import * as React from 'react';
import { cn } from './utils';

/**
 * Showcase Sidebar Navigation Item
 */
export interface ShowcaseSidebarItem {
  id: string;
  label: string;
  items?: string[];
}

/**
 * Showcase Sidebar Props
 */
export interface ShowcaseSidebarProps {
  title: string;
  sections: ShowcaseSidebarItem[];
  activeSection: string;
  onSectionClick: (id: string) => void;
  className?: string;
}

/**
 * Showcase Sidebar Component
 * 
 * Reusable sticky sidebar navigation for showcase pages.
 * Used in ComponentsShowcase, FontStylesShowcase, and ColorStylesShowcase.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseSidebar
 *   title="Components"
 *   sections={sections}
 *   activeSection={activeSection}
 *   onSectionClick={handleSectionClick}
 * />
 * ```
 */
export const ShowcaseSidebar = React.forwardRef<HTMLElement, ShowcaseSidebarProps>(
  ({ title, sections, activeSection, onSectionClick, className }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'hidden lg:block w-64 shrink-0 sticky top-24 self-start',
          className
        )}
      >
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h2 className="text-h5 mb-4 text-foreground">
            {title}
          </h2>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={cn(
                  'w-full text-left px-4 py-2 rounded-md transition-colors',
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground-muted hover:bg-muted'
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    );
  }
);

ShowcaseSidebar.displayName = 'ShowcaseSidebar';
