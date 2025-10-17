import * as React from 'react';
import { MapPin, Wrench } from 'lucide-react';
import { cn } from './utils';

/**
 * Department Banner Component
 * 
 * A reusable department banner component displaying department
 * information with an image background.
 * 
 * @component
 * @example
 * ```tsx
 * <DepartmentBanner
 *   image="/department.jpg"
 *   departmentName="Odbor údržby a oprav"
 *   location="Depo kolejových vozidel Plzeň"
 *   icon="wrench"
 * />
 * ```
 */

export interface DepartmentBannerProps {
  /** Background image URL */
  image: string;
  /** Department name */
  departmentName: string;
  /** Location/workplace */
  location: string;
  /** Icon type */
  icon?: 'wrench' | 'tool';
  /** Additional CSS classes */
  className?: string;
}

// Icon mapping
const iconComponents = {
  wrench: Wrench,
  tool: Wrench, // Using Wrench for both as they're similar
};

export const DepartmentBanner = React.forwardRef<HTMLDivElement, DepartmentBannerProps>(
  ({ image, departmentName, location, icon = 'tool', className }, ref) => {
    const IconComponent = iconComponents[icon];

    return (
      <div
        ref={ref}
        className={cn(
          'h-[144px] overflow-clip relative rounded-[4px] shrink-0 w-full',
          className
        )}
        data-name="Department Banner"
      >
        {/* Background Image with Gradient Overlay */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
          <img 
            alt={departmentName} 
            className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" 
            src={image}
          />
          <div className="absolute bg-gradient-to-b from-[45.833%] from-[rgba(0,0,0,0)] inset-0 rounded-[4px] to-[64.236%] to-[rgba(0,0,0,0.4)]" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] items-center justify-center left-0 right-0 to-[rgba(0,0,0,0.4)]">
          <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
                {/* Content */}
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  {/* Icon */}
                  <div className="bg-[#ecfdf3] overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
                    <div className="absolute left-[10px] size-[20px] top-[10px]">
                      <IconComponent 
                        className="block size-full text-[#079455]" 
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {departmentName}
                    </p>
                    
                    {/* Location */}
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                      <MapPin className="size-3 text-white" />
                      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DepartmentBanner.displayName = 'DepartmentBanner';
