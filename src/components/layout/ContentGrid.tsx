import React from "react";
import { cn } from "../ui/utils";

interface ContentGridProps {
  children: React.ReactNode;
  cols?: "2" | "3" | "auto";
  className?: string;
}

/**
 * ContentGrid - Flexible responsive grid layout component
 * 
 * Provides consistent grid patterns with responsive breakpoints
 * 
 * Grid patterns:
 * - "2": 1 column mobile → 2 columns desktop
 * - "3": 1 column mobile → 2 columns tablet → 3 columns desktop
 * - "auto": 1 column mobile → custom layout desktop (default: 2fr 1fr)
 * 
 * Usage:
 * ```tsx
 * <ContentGrid cols="2">
 *   <div>Column 1</div>
 *   <div>Column 2</div>
 * </ContentGrid>
 * ```
 */
export function ContentGrid({ 
  children, 
  cols = "auto",
  className 
}: ContentGridProps) {
  const colClasses = {
    "2": "grid-cols-1 lg:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    "auto": "grid-cols-1 lg:grid-cols-[2fr_1fr]"
  };
  
  return (
    <div className={cn(
      "grid gap-[16px] md:gap-[24px] lg:gap-[32px]",
      colClasses[cols],
      className
    )}>
      {children}
    </div>
  );
}
