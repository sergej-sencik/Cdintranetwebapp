import * as React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from './utils';

/**
 * File Item Component
 * 
 * A reusable file/document item component for displaying files
 * in sidebar widgets and document lists.
 * 
 * @component
 * @example
 * ```tsx
 * <FileItem
 *   name="Servisní manuál: RegioPanter řada 650"
 *   type="PDF"
 *   date="Dnes, 14:31"
 *   href="#"
 * />
 * ```
 */

export type FileType = 'PDF' | 'DOC' | 'XLSX' | 'PNG' | 'JPG' | 'IMG';

export interface FileItemBadge {
  text: string;
  variant?: 'success' | 'info' | 'warning' | 'error';
}

export interface FileItemProps {
  /** File name/title */
  name: string;
  /** File type */
  type: FileType;
  /** Date/time information */
  date: string;
  /** Link URL */
  href: string;
  /** Optional badge to display */
  badge?: FileItemBadge;
  /** Whether the link opens externally */
  isExternal?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

// File type color mapping
const fileTypeColors: Record<FileType, { bg: string; text: string }> = {
  PDF: { bg: '#d92d20', text: '#d92d20' },
  DOC: { bg: '#414651', text: '#414651' },
  XLSX: { bg: '#079455', text: '#079455' },
  PNG: { bg: '#0097cf', text: '#0097cf' },
  JPG: { bg: '#0097cf', text: '#0097cf' },
  IMG: { bg: '#0097cf', text: '#0097cf' },
};

// Badge variant styles
const badgeStyles = {
  success: 'bg-[#ecfdf3] text-[#067647] border-[#abefc6]',
  info: 'bg-[#e3f7ff] text-[#008bbe] border-[#a0e1f9]',
  warning: 'bg-[#fff4ed] text-[#b93815] border-[#fec89a]',
  error: 'bg-[#fef3f2] text-[#d92d20] border-[#fecdca]',
};

/**
 * File Type Icon Component
 * Displays the file extension in a styled icon
 */
const FileTypeIcon: React.FC<{ type: FileType }> = ({ type }) => {
  const colors = fileTypeColors[type];
  
  // Special handling for DOC type with icon
  if (type === 'DOC') {
    return (
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <defs>
            <linearGradient id="docGradient" x1="12.8" x2="12.8" y1="0" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0.4" />
              <stop offset="1" />
            </linearGradient>
          </defs>
          <mask id="docMask" width="26" height="32" x="3" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
            <path fill="url(#docGradient)" d="M3 4C3 1.79086 4.79086 0 7 0H19L28.6 9.6V28C28.6 30.2091 26.8091 32 24.6 32H7C4.79086 32 3 30.2091 3 28V4Z" />
          </mask>
          <g mask="url(#docMask)">
            <path fill="white" d="M3 4C3 1.79086 4.79086 0 7 0H19L28.6 9.6V28C28.6 30.2091 26.8091 32 24.6 32H7C4.79086 32 3 30.2091 3 28V4Z" />
          </g>
          <path fill="#E9EAEB" d="M19 0L28.6 9.6H23C20.7909 9.6 19 7.80914 19 5.6V0Z" />
        </svg>
        {/* Icon overlay for DOC */}
        <div className="absolute inset-[40%_30%_20%_30%] overflow-clip">
          <svg className="block size-full" fill="none" viewBox="0 0 17 12">
            <path stroke={colors.text} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 1H15.4M1 4.2H15.4M1 7.4H15.4M1 10.6H12.2" />
          </svg>
        </div>
      </div>
    );
  }

  // Standard file icon with text
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <defs>
          <linearGradient id={`gradient-${type}`} x1="12.8" x2="12.8" y1="0" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0.4" />
            <stop offset="1" />
          </linearGradient>
        </defs>
        <mask id={`mask-${type}`} width="26" height="32" x="3" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
          <path fill={`url(#gradient-${type})`} d="M3 4C3 1.79086 4.79086 0 7 0H19L28.6 9.6V28C28.6 30.2091 26.8091 32 24.6 32H7C4.79086 32 3 30.2091 3 28V4Z" />
        </mask>
        <g mask={`url(#mask-${type})`}>
          <path fill="white" d="M3 4C3 1.79086 4.79086 0 7 0H19L28.6 9.6V28C28.6 30.2091 26.8091 32 24.6 32H7C4.79086 32 3 30.2091 3 28V4Z" />
        </g>
        <path fill="#E9EAEB" d="M19 0L28.6 9.6H23C20.7909 9.6 19 7.80914 19 5.6V0Z" />
      </svg>
      <p 
        className="absolute font-['Inter:Bold',_sans-serif] font-bold inset-[57.5%_10%_8.13%_10%] leading-[normal] not-italic text-[9px] text-center"
        style={{ color: colors.text }}
      >
        {type}
      </p>
    </div>
  );
};

export const FileItem = React.forwardRef<HTMLAnchorElement, FileItemProps>(
  ({ name, type, date, href, badge, isExternal = false, className, onClick }, ref) => {
    const Icon = isExternal ? ExternalLink : ArrowRight;

    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className={cn(
          'bg-neutral-100 relative rounded-[4px] shrink-0 w-full block hover:bg-neutral-200 transition-colors',
          className
        )}
        data-name="File Item"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <div className="size-full">
          <div className="box-border content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
            {/* File Type Icon */}
            <FileTypeIcon type={type} />

            {/* Content */}
            <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                {/* File Name */}
                <p className="[white-space-collapse:collapse] font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#252b37] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {name}
                </p>

                {/* Date and Badge */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {date}
                  </p>

                  {badge && (
                    <>
                      {/* Divider */}
                      <div className="h-[12px] relative shrink-0 w-0">
                        <svg className="block size-full" fill="none" viewBox="0 0 2 14">
                          <path d="M1 1V13" stroke="#D5D7DA" strokeLinecap="round" />
                        </svg>
                      </div>

                      {/* Badge */}
                      <div className={cn(
                        'box-border content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0',
                        badgeStyles[badge.variant || 'info']
                      )}>
                        <div aria-hidden="true" className="absolute border border-current border-solid inset-0 pointer-events-none rounded-[4px] opacity-30" />
                        <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {badge.text}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Arrow Icon */}
            <Icon className="size-5 text-[#009FDA] shrink-0" strokeWidth={1.5} />
          </div>
        </div>
      </a>
    );
  }
);

FileItem.displayName = 'FileItem';
