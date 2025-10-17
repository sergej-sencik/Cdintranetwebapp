import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const imagePlaceholderVariants = cva(
  "relative flex items-center justify-center bg-gradient-to-br overflow-hidden",
  {
    variants: {
      variant: {
        default: "from-[color:var(--color-gray-100)] to-[color:var(--color-gray-200)]",
        primary: "from-[color:var(--color-blue-50)] to-[color:var(--color-blue-100)]",
        secondary: "from-[color:var(--color-brand-secondary)] to-[color:var(--color-blue-100)]",
        muted: "from-[color:var(--color-gray-50)] to-[color:var(--color-gray-100)]",
      },
      aspectRatio: {
        square: "aspect-square",
        video: "aspect-video",
        wide: "aspect-[21/9]",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
      aspectRatio: "landscape",
    },
  }
);

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imagePlaceholderVariants> {
  width?: string | number;
  height?: string | number;
  iconSize?: number;
  text?: string;
  showIcon?: boolean;
}

export function ImagePlaceholder({
  variant,
  aspectRatio,
  width,
  height,
  iconSize = 48,
  text,
  showIcon = true,
  className,
  style,
  ...props
}: ImagePlaceholderProps) {
  const containerStyle: React.CSSProperties = {
    ...style,
  };

  if (width) {
    containerStyle.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height) {
    containerStyle.height = typeof height === 'number' ? `${height}px` : height;
    // If height is specified, don't use aspect ratio
    aspectRatio = "custom";
  }

  return (
    <div
      className={`${imagePlaceholderVariants({ variant, aspectRatio })} ${className || ''}`}
      style={containerStyle}
      {...props}
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="placeholder-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#placeholder-pattern)" />
        </svg>
      </div>

      {/* Icon and Text */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-[12px] text-[color:var(--color-gray-400)]">
        {showIcon && <ImageIcon size={iconSize} strokeWidth={1.5} />}
        {text && (
          <p className="font-['Roboto:Regular',_sans-serif] font-normal text-[14px] text-center text-[color:var(--color-gray-500)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        )}
      </div>

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border border-[color:var(--color-gray-200)] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}
