import * as React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { AIAssistant } from '../AIAssistant';
import { PageHeader, BreadcrumbItemType } from './page-header';
import { cn } from './utils';
import '../sticky-header.css';

/**
 * Page Template Props
 */
export interface PageTemplateProps {
  /** Page title (H1) */
  title: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItemType[];
  /** Page content */
  children: React.ReactNode;
  /** Additional class name for the content wrapper */
  className?: string;
  /** Background color class (default: bg-background-subtle) */
  backgroundColor?: string;
  /** Whether to include the Footer component */
  includeFooter?: boolean;
  /** Whether to include the AIAssistant component */
  includeAIAssistant?: boolean;
}

/**
 * Universal Page Template Component
 * 
 * Provides a consistent layout for all standard pages with:
 * - Header navigation
 * - Breadcrumb navigation
 * - H1 page title
 * - Proper padding and spacing
 * - Optional Footer and AI Assistant
 * 
 * @component
 * @example
 * ```tsx
 * <PageTemplate 
 *   title="Components" 
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Showcase', href: '/showcase' },
 *     { label: 'Components' }
 *   ]}
 * >
 *   <YourContent />
 * </PageTemplate>
 * ```
 */
export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  children,
  className,
  backgroundColor = 'bg-background-subtle',
  includeFooter = true,
  includeAIAssistant = true,
}) => {
  return (
    <div className={cn('min-h-screen', backgroundColor)}>
      {/* Header */}
      <Header />

      {/* Main Content Area with Top Padding */}
      <main className="w-full pt-[120px] pb-10">
        {/* Page Header: Breadcrumb and Title */}
        <PageHeader title={title} breadcrumbs={breadcrumbs} />

        {/* Page Content */}
        <div className={cn('w-full', className)}>
          {children}
        </div>
      </main>

      {/* Footer */}
      {includeFooter && <Footer />}

      {/* AI Assistant */}
      {includeAIAssistant && <AIAssistant />}
    </div>
  );
};

PageTemplate.displayName = 'PageTemplate';
