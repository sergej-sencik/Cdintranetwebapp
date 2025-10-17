import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';

/**
 * Global ČD Intranet mark + wordmark.
 * Variants:
 * - compact: only symbol (for tight areas)
 * - full: symbol + "Intranet" wordmark (default)
 * - wordmarkOnly: just the text (rare)
 *
 * Sizes are logical; CSS can scale further.
 */
export type LogoVariant = 'full' | 'compact' | 'wordmarkOnly';
export type LogoTheme = 'default'; // reserved for future themes

export interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  as?: 'a' | 'div';
  href?: string;
  variant?: LogoVariant;
  theme?: LogoTheme;
  height?: number; // desired pixel height; defaults depend on variant
  title?: string;  // aria-label override for links
  className?: string;
}

function Mark({ height = 32 }: { height?: number }) {
  return (
    <div style={{ height, width: (height * 49.245) / 32 }} className="relative shrink-0" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 32">
        <g id="Logomark">
          <g id="Union">
            <path d={svgPaths.p227b9a00} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p373e43f0} fill="var(--fill-0, #002664)" />
            <path d={svgPaths.p20376e00} fill="var(--fill-0, #002664)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wordmark({ height = 22 }: { height?: number }) {
  // Based on desktop Frame1 typography
  return (
    <div
      className="flex items-center font-['CD_Fedra_Pro',_sans-serif] font-medium leading-none text-[color:var(--color-blue-500)]"
      style={{ fontSize: height, lineHeight: `${height}px` }}
    >
      <span>Intranet</span>
    </div>
  );
}

/**
 * Logo root supports:
 * - as="a" to link home
 * - variant to control composition
 * - height to unify mark/wordmark scale per context
 */
export function Logo({
  as = 'a',
  href = '/',
  variant = 'full',
  theme = 'default',
  height,
  title = 'Intranet - Home',
  className,
  ...rest
}: LogoProps) {
  const Root: any = as;
  const isLink = as === 'a';

  // Default heights by variant (can be overridden via height prop)
  const markHeight = height ?? (variant === 'compact' ? 28 : 32);
  const wordmarkHeight = variant === 'full' ? 22 : 0;

  return (
    <Root
      {...rest}
      href={isLink ? href : undefined}
      aria-label={isLink ? title : undefined}
      className={`inline-flex items-center gap-[8px] hover:opacity-90 transition-opacity ${className || ''}`}
    >
      {(variant === 'full' || variant === 'compact') && <Mark height={markHeight} />}
      {(variant === 'full' || variant === 'wordmarkOnly') && <Wordmark height={wordmarkHeight} />}
    </Root>
  );
}

export default Logo;
