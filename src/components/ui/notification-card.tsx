import React from "react";
import { X } from "lucide-react";
import { cn } from "./utils";

export interface NotificationCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actions?: React.ReactNode;
  onClose?: () => void;
  href?: string;
  onClick?: () => void;
  className?: string;
  mobileLayout?: boolean;
}

type CardWrapperProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

function CardWrapper({ href, onClick, className, children }: CardWrapperProps) {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  if (onClick) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  return <div className={className}>{children}</div>;
}

export function NotificationCard({
  icon,
  title,
  description,
  actions,
  onClose,
  href,
  onClick,
  className = "",
  mobileLayout = false,
}: NotificationCardProps) {
  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className={cn(
        "bg-card box-border content-stretch relative rounded-[4px] w-full group transition-shadow duration-300",
        "p-4",
        href || onClick ? "cursor-pointer hover:elevation-hover" : "",
        className
      )}
    >
      <div aria-hidden="true" className="absolute border border-border-muted inset-0 pointer-events-none rounded-[4px] elevation-sm" />

      {/* Header row: icon + text + close (always top-right) */}
      <div className="relative z-[1] flex items-start gap-3">
        {icon && <div className="relative shrink-0 size-[20px]">{icon}</div>}

        <div className="flex-1 min-w-0">
          <h5
            className={cn(
              "text-card-foreground mb-2",
              mobileLayout
                ? "text-[15px] leading-[21px] font-['Roboto:Medium',_sans-serif] font-medium"
                : "text-[16px] leading-[22px] font-['Roboto:Medium',_sans-serif] font-medium"
            )}
          >
            {title}
          </h5>
          <p
            className={cn(
              "font-['Roboto:Regular',_sans-serif] text-[color:var(--color-gray-600)]",
              mobileLayout ? "text-[14px] leading-[20px]" : "text-[16px] leading-[22px]"
            )}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {description}
          </p>
        </div>

        {onClose && (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
            className="box-border flex items-center justify-center p-2 rounded-[4px] shrink-0 size-[36px] hover:bg-neutral-100 transition-colors"
            aria-label="Close notification"
          >
            <X className={cn(mobileLayout ? "size-[16px]" : "size-[20px]", "text-muted-foreground")} strokeWidth={1.66667} />
          </button>
        )}
      </div>

      {/* Actions row — show only if actions passed (desktop only) */}
      {actions && (
        <div className="mt-4 flex items-center gap-3">
          {actions}
        </div>
      )}
    </CardWrapper>
  );
}

// Default icon component for alert notifications
export function AlertIcon() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[20px]">
      {/* Inner circle */}
      <div className="absolute bg-[#fef6ee] rounded-[9999px] inset-[1px]" />
      
      {/* Outer circle */}
      <div 
        aria-hidden="true" 
        className="absolute border-2 border-[#fed7aa] border-solid rounded-[9999px] inset-0 pointer-events-none" 
      />
      
      {/* Alert icon */}
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_alert)">
          <path 
            d="M10.0003 6.66675V10.0001M10.0003 13.3334H10.0087M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001Z" 
            stroke="#DC6803" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.66667" 
          />
        </g>
        <defs>
          <clipPath id="clip0_alert">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
