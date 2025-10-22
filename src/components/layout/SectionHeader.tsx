import React from "react";
import { cn } from "../ui/utils";

interface Tab {
  id: string;
  label: string;
}

interface SectionHeaderProps {
  title: string;
  actions?: React.ReactNode;
  tabs?: Tab[];
  className?: string;
}

/**
 * SectionHeader - Standardized section header component
 * 
 * Provides consistent layout for section titles with optional actions or tabs
 * 
 * Usage:
 * ```tsx
 * <SectionHeader 
 *   title="Featured News"
 *   actions={<Button>View All</Button>}
 * />
 * 
 * <SectionHeader 
 *   title="Content Sections"
 *   tabs={[
 *     { id: "news", label: "News" },
 *     { id: "events", label: "Events" }
 *   ]}
 * />
 * ```
 */
export function SectionHeader({ 
  title, 
  actions, 
  tabs,
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-between mb-[24px]",
      className
    )}>
      <h2 className="text-h3">{title}</h2>
      {tabs && (
        <div className="flex gap-[12px]">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className="px-[16px] py-[8px] text-sm hover:bg-gray-100 rounded-md transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      {actions}
    </div>
  );
}
