import React from "react";
import { ImagePlaceholder } from "./image-placeholder";

export interface VideoArticleCardProps {
  image?: string;
  date: string;
  title: string;
  description: string;
  playIconPath: string;
  href?: string;
  onClick?: () => void;
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

export function VideoArticleCard({
  image,
  date,
  title,
  description,
  playIconPath,
  href,
  onClick,
}: VideoArticleCardProps) {
  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className="basis-0 bg-white grow min-h-[435px] min-w-px relative rounded-[4px] shrink-0 group cursor-pointer transition-shadow duration-300 hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)]"
    >
      <div className="content-stretch flex flex-col min-h-[435px] items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Image Container with Play Button */}
        <div className="aspect-[384/256] relative shrink-0 w-full overflow-hidden flex" data-name="Image">
          {image ? (
            <img 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110" 
              src={image}
              style={{ display: 'block' }}
            />
          ) : (
            <ImagePlaceholder 
              aspectRatio="video"
              variant="muted"
              iconSize={48}
            />
          )}
          <div className="aspect-[384/256] overflow-clip absolute inset-0 rounded-[inherit] size-full pointer-events-none">
            <div className="absolute backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.3)] bottom-[-0.33px] content-stretch flex items-center justify-center left-0 rounded-[4px] size-[64px] transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.5)] group-hover:scale-110 pointer-events-none" data-name="Button">
              <div className="relative shrink-0 size-[32px]" data-name="play">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="play">
                    <path clipRule="evenodd" d={playIconPath} fill="var(--fill-0, white)" fillRule="evenodd" id="Solid" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative shrink-0 w-full" data-name="Content">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[32px] pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and text">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#008bbe] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {date}
                  </p>
                  <h4 className="text-card-title not-italic relative shrink-0 text-[#002664] w-full group-hover:text-[color:var(--color-blue-500)] transition-colors duration-300">
                    {title}
                  </h4>
                </div>
                <p className="line-clamp-2 font-['Roboto:Regular',_sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
    </CardWrapper>
  );
}
