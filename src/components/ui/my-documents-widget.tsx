import * as React from 'react';
import { SidebarWidget, ViewAllLink, SidebarTab } from './sidebar-widget';
import { FileItem, FileItemProps } from './file-item';
import { cn } from './utils';

/**
 * My Documents Widget Component
 * 
 * Displays a list of documents/files with tabs for filtering
 * 
 * @component
 * @example
 * ```tsx
 * <MyDocumentsWidget
 *   title="Moje dokumenty"
 *   tabs={[
 *     { id: 'recent', label: 'Nedávné' },
 *     { id: 'saved', label: 'Uložené', count: 12 }
 *   ]}
 *   files={files}
 *   viewAll={{ text: "View all (9)", href: "#" }}
 * />
 * ```
 */

export interface MyDocumentsWidgetProps {
  title: string;
  tabs: SidebarTab[];
  defaultTab?: string;
  files: FileItemProps[];
  viewAll: {
    text: string;
    href: string;
  };
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const MyDocumentsWidget = React.forwardRef<HTMLDivElement, MyDocumentsWidgetProps>(
  ({ title, tabs, defaultTab, files, viewAll, onTabChange, className }, ref) => {
    return (
      <div ref={ref} className={cn('content-stretch flex flex-col items-start relative shrink-0 w-full', className)}>
        <SidebarWidget
          title={title}
          tabs={tabs}
          defaultActiveTab={defaultTab}
          onTabChange={onTabChange}
          footer={<ViewAllLink text={viewAll.text} href={viewAll.href} />}
        >
          {/* Files List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {files.map((file) => (
              <FileItem key={file.id || file.name} {...file} />
            ))}
          </div>
        </SidebarWidget>
      </div>
    );
  }
);

MyDocumentsWidget.displayName = 'MyDocumentsWidget';
