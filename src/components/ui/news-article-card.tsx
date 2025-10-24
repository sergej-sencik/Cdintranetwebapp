import * as React from "react";
import { ImagePlaceholder } from "./image-placeholder";

export interface NewsArticleCardProps {
  image?: string;
  date: string;
  category: string;
  title: string;
  description?: string;
  badge?: {
    text: string;
    variant: "blue" | "orange" | "green";
  };
  href?: string;
  onClick?: () => void;
}

const badgeStyles = {
  blue: {
    bg: "bg-[color:var(--color-blue-100)]",
    border: "border-[color:var(--color-blue-200)]",
    text: "text-[color:var(--color-blue-600)]",
  },
  orange: {
    bg: "bg-[color:var(--color-warning-50)]",
    border: "border-[color:var(--color-warning-200)]",
    text: "text-[color:var(--color-warning-700)]",
  },
  green: {
    bg: "bg-[color:var(--color-success-100)]",
    border: "border-[color:var(--color-success-200)]",
    text: "text-accent",
  },
};

const CardWrapper = ({ 
  href, 
  onClick, 
  children, 
  className 
}: { 
  href?: string; 
  onClick?: () => void; 
  children: React.ReactNode; 
  className?: string;
}) => {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export function NewsArticleCard({
  image,
  date,
  category,
  title,
  description,
  badge,
  href,
  onClick,
}: NewsArticleCardProps) {
  const badgeStyle = badge ? badgeStyles[badge.variant] : null;

  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className="bg-card relative rounded-[4px] shrink-0 w-full group cursor-pointer transition-shadow duration-300 hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)]"
    >
      <div className="content-stretch flex flex-row sm:flex-row gap-[24px] items-stretch overflow-clip relative rounded-[inherit] w-full min-h-[160px] sm:min-h-[210px]" data-name="Blog post card">
        {/* Image Container - Responsive */}
        <div className="relative shrink-0 w-[140px] sm:w-[280px] lg:w-[312px] overflow-hidden self-stretch flex aspect-auto" data-name="Image">
          {image ? (
            <img 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110" 
              src={image} 
              style={{ display: 'block' }}
            />
          ) : (
            <ImagePlaceholder 
              width={312}
              height="100%"
              variant="muted"
              iconSize={40}
              className="shrink-0"
            />
          )}
          <div aria-hidden="true" className="absolute border border-border-muted border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content Container - Responsive Padding */}
        <div className="basis-0 grow min-h-px min-w-0 relative self-stretch shrink-0" data-name="Content">
          <div className="flex flex-col justify-center min-w-0 size-full">
            <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center min-w-0 sm:pr-[24px] py-[12px] sm:py-[16px] relative size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and text">
                {/* Date and Category Row */}
                <div className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" data-name="Info row">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-card-foreground" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {date}
                  </p>
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-card-foreground" style={{ fontVariationSettings: "'wdth' 100" }}>
                    •
                  </p>
                  <p className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[color:var(--color-blue-600)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {category}
                  </p>
                </div>

                {/* Title and Description */}
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading and text">
                  <h4 className="line-clamp-2 text-card-title-sm lg:text-[length:inherit] lg:leading-[inherit] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-foreground w-full transition-colors duration-200 group-hover:text-[color:var(--color-blue-500)]">
                    {title}
                  </h4>
                  {description && (
                    <p className="line-clamp-2 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-gray-600)] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {description}
                    </p>
                  )}
                </div>

                {/* Badge (optional) */}
                {badge && badgeStyle && (
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Tags">
                    <div className={`${badgeStyle.bg} box-border content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0`} data-name="Badge">
                      <div aria-hidden="true" className={`absolute border ${badgeStyle.border} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                      <p className={`font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 ${badgeStyle.text} text-[12px] text-center text-nowrap whitespace-pre`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {badge.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border and Shadow */}
      <div aria-hidden="true" className="absolute border border-border-muted border-solid inset-0 pointer-events-none rounded-[4px] elevation-sm" />
    </CardWrapper>
  );
}
