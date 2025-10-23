import React from 'react';
import { ArrowRight, Share2, ExternalLink } from 'lucide-react';

export interface LinkCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  rightIconType?: 'arrow' | 'share' | 'external-link';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function LinkCard({
  icon,
  title,
  rightIconType = 'arrow',
  href,
  onClick,
  className = '',
}: LinkCardProps) {
  const content = (
    <>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.05),0px_1px_2px_-1px_rgba(10,13,18,0.05)]" />
      <div className="min-h-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[162px] items-start min-h-inherit p-[16px] relative w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            {icon}
            <RightIcon type={rightIconType} />
          </div>
          <h5 className="text-h5 relative shrink-0 text-[#252b37] w-full">
            {title}
          </h5>
        </div>
      </div>
    </>
  );

  const baseClassName = `basis-0 bg-white grow h-[162px] min-h-[80px] min-w-px relative rounded-[4px] shrink-0 cursor-pointer transition-shadow duration-300 hover:shadow-[0px_4px_12px_0px_rgba(10,13,18,0.1),0px_2px_4px_-1px_rgba(10,13,18,0.08)] ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <div className={baseClassName} onClick={onClick}>
      {content}
    </div>
  );
}

function RightIcon({ type }: { type: 'arrow' | 'share' | 'external-link' }) {
  const iconProps = {
    size: 20,
    strokeWidth: 1.67
  };

  return (
    <div className="relative shrink-0 size-[20px] text-[#717680]">
      {type === 'arrow' && <ArrowRight {...iconProps} />}
      {type === 'share' && <Share2 {...iconProps} />}
      {type === 'external-link' && <ExternalLink {...iconProps} />}
    </div>
  );
}

export function LinkCardIcon({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#e3f7ff] overflow-clip relative rounded-[4px] shrink-0 size-[40px] ${className}`}>
      {children}
    </div>
  );
}
