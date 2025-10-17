import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "content-stretch flex gap-[24px] items-start relative shrink-0 w-full transition-all duration-300 cursor-pointer group",
  {
    variants: {
      variant: {
        news: "",
        event: "",
        video: "",
      },
    },
    defaultVariants: {
      variant: "news",
    },
  }
);

const categoryVariants = cva(
  "font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0",
  {
    variants: {
      variant: {
        news: "text-[#008bbe]",
        event: "text-[#00af3f]",
        video: "text-[#9747ff]",
      },
    },
    defaultVariants: {
      variant: "news",
    },
  }
);

export interface ContentCardProps extends VariantProps<typeof cardVariants> {
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  href?: string;
  badge?: string;
  onClick?: () => void;
}

export function ContentCard({
  variant = "news",
  image,
  date,
  category,
  title,
  description,
  href,
  badge,
  onClick,
}: ContentCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className={cardVariants({ variant })}
      style={{ borderRadius: 'var(--radius-lg)' }}
      data-card-type={variant}
    >
      {/* Image Container */}
      <div 
        className="h-[130px] relative shrink-0 w-[196.364px] overflow-hidden" 
        data-name="Image"
        style={{ borderRadius: '4px' }}
      >
        <img 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[800ms] ease-out group-hover:scale-110" 
          style={{ 
            minWidth: '100%', 
            minHeight: '100%'
          }}
          src={image} 
        />
        <div 
          aria-hidden="true" 
          className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none" 
          style={{ borderRadius: '4px' }}
        />
        
        {/* Optional Badge (e.g., video duration) */}
        {badge && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/75 text-white text-[12px] backdrop-blur-sm" style={{ borderRadius: 'var(--radius-sm)' }}>
            {badge}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div 
        className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" 
        data-name="Heading and text"
      >
        {/* Info Row: Date and Category */}
        <div 
          className="content-stretch flex gap-[6px] items-start leading-[20px] relative shrink-0 text-[14px] text-nowrap w-full whitespace-pre" 
          data-name="Info row"
        >
          <p 
            className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {date}
          </p>
          <p 
            className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#252b37]" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            •
          </p>
          <p 
            className={categoryVariants({ variant })}
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {category}
          </p>
        </div>

        {/* Title and Description */}
        <div 
          className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" 
          data-name="Heading and text"
        >
          <h4 className="line-clamp-2 text-card-title-sm not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-brand-secondary)] w-full group-hover:text-[color:var(--color-blue-500)] transition-colors duration-300">
            {title}
          </h4>
          <p 
            className="line-clamp-2 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" 
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {description}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
}

// Export variants for convenience
export const ContentCardVariants = {
  NEWS: 'news' as const,
  EVENT: 'event' as const,
  VIDEO: 'video' as const,
};
