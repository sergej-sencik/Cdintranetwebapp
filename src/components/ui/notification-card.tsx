import React from "react";
import { X } from "lucide-react";

export interface NotificationCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actions?: React.ReactNode;
  onClose?: () => void;
  href?: string;
  onClick?: () => void;
  className?: string;
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
}: NotificationCardProps) {
  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className={`bg-card box-border content-stretch flex gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-full group cursor-pointer transition-shadow duration-300 hover:elevation-hover ${className}`}
    >
      {/* Border and Shadow */}
      <div 
        aria-hidden="true" 
        className="absolute border border-border-muted border-solid inset-0 pointer-events-none rounded-[4px] elevation-sm" 
      />
      
      {/* Icon */}
      {icon && (
        <div className="relative shrink-0 size-[20px] z-[1]">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0 z-[1]">
        {/* Text Content */}
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex gap-[8px] items-start pl-0 pr-[32px] py-0 relative w-full">
                <h5 
                  className="basis-0 text-h5 grow min-h-px min-w-px relative shrink-0 text-card-foreground"
                >
                  {title}
                </h5>
              </div>
            </div>
          </div>
          <p 
            className="font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] relative shrink-0 text-[color:var(--color-gray-600)] text-[16px] w-full" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {description}
          </p>
        </div>
        
        {/* Actions and Close Button */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {actions && (
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              {actions}
            </div>
          )}
          
          {onClose && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[36px] hover:bg-neutral-100 transition-colors duration-200"
              aria-label="Close notification"
            >
              <X className="size-[20px] text-muted-foreground" strokeWidth={1.66667} />
            </button>
          )}
        </div>
      </div>
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
