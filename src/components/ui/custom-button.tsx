import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[6px] overflow-clip transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // Primary button - Green accent color (main CTA)
        primary: [
          "bg-accent text-accent-foreground",
          "hover:bg-[color:var(--accent-hover)]",
          "active:bg-[color:var(--accent-active)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        ],
        
        // Secondary button - Gray with white text
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-[color:var(--secondary-hover)]",
          "active:bg-[color:var(--secondary-active)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
        ],
        
        // Tertiary button - Blue brand color
        tertiary: [
          "bg-primary text-primary-foreground",
          "hover:bg-[color:var(--primary-hover)]",
          "active:bg-[color:var(--primary-active)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        ],
        
        // Link-color button - Blue text, no background, no padding (for text links with icons)
        "link-color": [
          "bg-transparent text-[color:var(--color-blue-500)] p-0",
          "hover:text-[color:var(--color-blue-700)]",
          "active:text-[color:var(--color-blue-800)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        ],
        
        // Outline button - Primary border with transparent background
        outline: [
          "border border-primary bg-transparent text-primary",
          "hover:bg-[color:var(--color-blue-50)]",
          "active:bg-[color:var(--color-blue-100)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        ],
        
        // Outline-secondary button - Gray border with transparent background
        "outline-secondary": [
          "border border-[color:var(--color-gray-300)] bg-transparent text-[color:var(--color-gray-700)]",
          "hover:bg-[color:var(--color-gray-50)]",
          "active:bg-[color:var(--color-gray-100)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2",
        ],
        
        // Ghost button - Transparent with hover background
        ghost: [
          "bg-transparent text-[color:var(--color-gray-700)]",
          "hover:bg-[color:var(--color-gray-100)]",
          "active:bg-[color:var(--color-gray-200)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2",
        ],
        
        // Destructive button - Red error color
        destructive: [
          "bg-destructive text-destructive-foreground",
          "hover:bg-[color:var(--destructive-hover)]",
          "active:bg-[color:var(--destructive-active)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2",
        ],
        
        // Destructive outline button
        "destructive-outline": [
          "border border-destructive bg-transparent text-destructive",
          "hover:bg-[color:var(--color-error-50)]",
          "active:bg-[color:var(--color-error-100)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2",
        ],
        
        // Link button - Underline on hover
        link: [
          "bg-transparent text-[color:var(--color-blue-500)] underline-offset-4 p-0",
          "hover:underline hover:text-[color:var(--color-blue-700)]",
          "active:text-[color:var(--color-blue-800)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        ],
      },
      size: {
        sm: "px-[12px] py-[6px] text-[14px] leading-[20px] rounded-[var(--radius-sm)]",
        md: "px-[16px] py-[10px] text-[16px] leading-[22px] rounded-[var(--radius-sm)]",
        lg: "px-[20px] py-[12px] text-[18px] leading-[26px] rounded-[var(--radius-sm)]",
        xl: "px-[24px] py-[14px] text-[18px] leading-[26px] rounded-[var(--radius-md)]",
        icon: "p-[8px] rounded-[var(--radius-sm)]",
        "icon-sm": "p-[6px] rounded-[var(--radius-sm)]",
        "icon-lg": "p-[10px] rounded-[var(--radius-sm)]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // Link-color and link variants override padding from size
      {
        variant: ["link-color", "link"],
        className: "p-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth,
    leftIcon, 
    rightIcon, 
    loading,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    
    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {loading && (
          <span className="shrink-0 animate-spin">
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <circle 
                className="opacity-25" 
                cx="8" 
                cy="8" 
                r="6" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M8 0a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V0z"
              />
            </svg>
          </span>
        )}
        {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children && (
          <span
            className="font-['Roboto:Medium',_sans-serif] font-medium"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {children}
          </span>
        )}
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
