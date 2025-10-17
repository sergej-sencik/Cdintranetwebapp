import * as React from 'react';
import { Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Badge } from './badge';
import { cn } from './utils';

/**
 * Contact Card Component
 * 
 * A reusable contact card component for displaying contact information
 * in sidebar widgets and other areas.
 * 
 * @component
 * @example
 * ```tsx
 * <ContactCard
 *   name="Pavel Dvořák"
 *   position="Mistr směny A"
 *   phone="+420 725 123 456"
 *   avatar="/avatar.png"
 *   badge={{ text: "Váš přímý nadřízený", variant: "success" }}
 * />
 * ```
 */

export interface ContactCardBadge {
  text: string;
  variant?: 'success' | 'info' | 'warning' | 'error';
}

export interface ContactCardProps {
  /** Contact's full name */
  name: string;
  /** Contact's position/job title */
  position: string;
  /** Contact's phone number */
  phone: string;
  /** Avatar image URL */
  avatar?: string;
  /** Initials for avatar fallback (auto-generated if not provided) */
  initials?: string;
  /** Optional badge to display */
  badge?: ContactCardBadge;
  /** Additional CSS classes */
  className?: string;
  /** Compact variant (reduced padding) */
  compact?: boolean;
}

// Badge variant to background color mapping
const badgeStyles = {
  success: 'bg-[#ecfdf3] text-[#067647] border-[#abefc6]',
  info: 'bg-[#e3f7ff] text-[#008bbe] border-[#a0e1f9]',
  warning: 'bg-[#fff4ed] text-[#b93815] border-[#fec89a]',
  error: 'bg-[#fef3f2] text-[#d92d20] border-[#fecdca]',
};

export const ContactCard = React.forwardRef<HTMLDivElement, ContactCardProps>(
  ({ name, position, phone, avatar, initials, badge, className, compact = false }, ref) => {
    // Generate initials from name if not provided
    const displayInitials = initials || name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return (
      <div
        ref={ref}
        className={cn(
          'bg-neutral-100 relative rounded-[4px] shrink-0 w-full',
          className
        )}
        data-name="Contact Card"
      >
        <div className="size-full">
          <div className={cn(
            'box-border content-stretch flex gap-[16px] items-start relative w-full',
            compact ? 'px-[16px] py-[12px]' : 'p-[16px]'
          )}>
            {/* Avatar */}
            <Avatar className="size-12 shrink-0">
              {avatar && <AvatarImage src={avatar} alt={name} />}
              <AvatarFallback className="bg-[#f2fbff] text-[color:var(--color-blue-500)] font-['CD_Fedra_Pro',_sans-serif] font-medium text-[18px]">
                {displayInitials}
              </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
              {/* Badge (if provided) */}
              {badge && (
                <div className={cn(
                  'box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0',
                  badgeStyles[badge.variant || 'info']
                )}>
                  <div aria-hidden="true" className="absolute border border-current border-solid inset-0 pointer-events-none rounded-[4px] opacity-30" />
                  <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {badge.text}
                  </p>
                </div>
              )}

              {/* Name and Position */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#002664] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {name}
                </p>
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {position}
                </p>
              </div>

              {/* Phone */}
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <Phone className="size-5 text-[#009FDA]" strokeWidth={1.5} />
                <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[#252b37] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ContactCard.displayName = 'ContactCard';
