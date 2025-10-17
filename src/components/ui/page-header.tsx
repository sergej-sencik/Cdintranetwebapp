import * as React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from './breadcrumb';
import { cn } from './utils';

/**
 * Breadcrumb Item Type
 */
export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

/**
 * Page Header Props
 */
export interface PageHeaderProps {
  /** Page title (H1) */
  title: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItemType[];
  /** Additional class name for the container */
  className?: string;
}

/**
 * Page Header Component
 * 
 * Simple page header with breadcrumb navigation and H1 title.
 * Used in PageTemplate and can be used in other page template variants.
 * 
 * @component
 * @example
 * ```tsx
 * <PageHeader 
 *   title="Components" 
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Showcase', href: '/showcase' },
 *     { label: 'Components' }
 *   ]}
 * />
 * ```
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  className,
}) => {
  return (
    <div className={cn('w-full max-w-[1280px] mx-auto px-8 pt-8 pb-6', className)}>
      {/* Breadcrumb Navigation */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink href={crumb.href}>
                      {crumb.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* Page Title (H1) */}
      <h1 className="text-h1">{title}</h1>
    </div>
  );
};

PageHeader.displayName = 'PageHeader';
