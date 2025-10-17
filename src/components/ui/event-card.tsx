import React from "react";

export interface EventCardProps {
  dateDay: string;
  dateMonth: string;
  title: string;
  time: string;
  location: string;
  badge?: {
    text: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
  };
  arrowIconPath: string;
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

export function EventCard({
  dateDay,
  dateMonth,
  title,
  time,
  location,
  badge,
  arrowIconPath,
  href,
  onClick,
}: EventCardProps) {
  return (
    <CardWrapper
      href={href}
      onClick={onClick}
      className="group basis-0 bg-card grow h-[288px] min-h-px min-w-px relative rounded-[4px] shrink-0 cursor-pointer transition-shadow duration-300 hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)]"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[288px] items-start p-[16px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
            {/* Date and Title Container */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date and title container">
              {/* Date Container with Arrow */}
              <div className="content-stretch flex h-[66px] items-start justify-between relative shrink-0 w-full" data-name="Date container">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-nowrap whitespace-pre" data-name="Date">
                  <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-gray-600)] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {dateMonth}
                  </p>
                  <p className="font-['CD_Fedra_Pro',_sans-serif] font-medium leading-[38px] not-italic relative shrink-0 text-[color:var(--color-blue-600)] text-[30px]">
                    {dateDay}
                  </p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Arrow">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Arrow">
                      <path d={arrowIconPath} id="Icon" stroke="var(--color-gray-500)" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Title and Optional Badge */}
              {badge ? (
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event title and badge container">
                  <h4 className="-webkit-box css-1ixhkw text-card-title min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-foreground w-[min-content] group-hover:text-[color:var(--color-blue-500)] transition-colors duration-300">
                    {title}
                  </h4>
                  <div 
                    className="box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" 
                    data-name="Badge"
                    style={{ backgroundColor: badge.bgColor || 'var(--color-success-50)' }}
                  >
                    <div 
                      aria-hidden="true" 
                      className="absolute border border-solid inset-0 pointer-events-none rounded-[4px]"
                      style={{ borderColor: badge.borderColor || 'var(--color-success-200)' }}
                    />
                    <p 
                      className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-center text-nowrap whitespace-pre" 
                      style={{ 
                        fontVariationSettings: "'wdth' 100",
                        color: badge.textColor || 'var(--color-success-600)'
                      }}
                    >
                      {badge.text}
                    </p>
                  </div>
                </div>
              ) : (
                <h4 className="-webkit-box css-1ixhkw text-card-title not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-foreground w-full group-hover:text-[color:var(--color-blue-500)] transition-colors duration-300">
                  {title}
                </h4>
              )}
            </div>

            {/* Event Details */}
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[14px] w-full" data-name="Event details">
              <p className="-webkit-box css-haxumu font-['Roboto:Medium',_sans-serif] font-medium overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-blue-500)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {time}
              </p>
              <p className="-webkit-box css-stc60e font-['Roboto:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[color:var(--color-gray-600)] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-border-muted border-solid inset-0 pointer-events-none rounded-[4px] elevation-sm" />
    </CardWrapper>
  );
}
