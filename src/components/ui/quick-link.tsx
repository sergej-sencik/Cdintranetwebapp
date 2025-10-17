import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

/**
 * Quick Link Component
 * 
 * A reusable quick link item component for navigation shortcuts
 * in sidebar widgets and other areas.
 * 
 * @component
 * @example
 * ```tsx
 * <QuickLink
 *   title="Rozpis směn a pohotovostí"
 *   href="#"
 * />
 * ```
 */

export interface QuickLinkProps {
  /** Link title */
  title: string;
  /** Link URL */
  href: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const QuickLink = React.forwardRef<HTMLAnchorElement, QuickLinkProps>(
  ({ title, href, className, onClick }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className={cn(
          'bg-neutral-100 relative rounded-[4px] shrink-0 w-full block hover:bg-neutral-200 transition-colors',
          className
        )}
        data-name="Quick Link"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
            {/* Title */}
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {title}
                </p>
              </div>
            </div>

            {/* Arrow Icon */}
            <ArrowRight className="size-5 text-[#009FDA] shrink-0" strokeWidth={1.66667} />
          </div>
        </div>
      </a>
    );
  }
);

QuickLink.displayName = 'QuickLink';
