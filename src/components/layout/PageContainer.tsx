import React from "react";
import { cn } from "../ui/utils";

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

/**
 * PageContainer - Reusable responsive container component
 * 
 * Provides consistent max-width and padding across all pages
 * Default max-width: 1280px (design system standard)
 * 
 * Usage:
 * ```tsx
 * <PageContainer>
 *   <YourContent />
 * </PageContainer>
 * ```
 */
export function PageContainer({ 
  children, 
  maxWidth = "1280px",
  className 
}: PageContainerProps) {
  return (
    <div 
      className={cn("w-full mx-auto", className)} 
      style={{ maxWidth }}
    >
      <div className="px-[16px] md:px-[24px] lg:px-[32px]">
        {children}
      </div>
    </div>
  );
}
