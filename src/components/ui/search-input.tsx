/**
 * ============================================
 * SearchInput Component
 * ============================================
 * 
 * Global search input component for header and search functionality.
 * Provides consistent styling, states, and behavior across the application.
 * 
 * Features:
 * - Search icon with proper spacing
 * - Placeholder text with global styling
 * - Focus states with border color transition
 * - Disabled state support
 * - Error/invalid state support
 * - Loading state with spinner
 * - Clear button (optional)
 * - Keyboard shortcuts support (optional)
 * - Controlled and uncontrolled modes
 * - Full accessibility (ARIA labels, roles)
 * - Uses global CSS variables
 * 
 * Usage:
 * ```tsx
 * <SearchInput 
 *   placeholder="Search..." 
 *   onSearch={(value) => console.log(value)}
 * />
 * ```
 */

import * as React from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from './utils';

// ============================================
// TYPES & INTERFACES
// ============================================

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Placeholder text */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Change handler with string value */
  onChange?: (value: string) => void;
  /** Search handler (triggered on Enter or button click) */
  onSearch?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
  /** Show clear button when input has value */
  showClearButton?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error/invalid state */
  isInvalid?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Icon position */
  iconPosition?: 'left' | 'right';
  /** Custom search icon */
  searchIcon?: React.ReactNode;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

// ============================================
// SIZE CONFIGURATIONS
// ============================================

const sizeConfig = {
  sm: {
    container: 'h-8',
    padding: 'px-3 py-1.5',
    text: 'text-[13px]',
    iconSize: 'w-4 h-4',
  },
  md: {
    container: 'h-10',
    padding: 'px-3 py-2',
    text: 'text-[14px]',
    iconSize: 'w-5 h-5',
  },
  lg: {
    container: 'h-12',
    padding: 'px-4 py-3',
    text: 'text-[16px]',
    iconSize: 'w-6 h-6',
  },
};

// ============================================
// SEARCH INPUT COMPONENT
// ============================================

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      placeholder = 'Hledejte kolegu, dokument nebo novinku...',
      value,
      defaultValue,
      onChange,
      onSearch,
      onClear,
      showClearButton = true,
      isLoading = false,
      disabled = false,
      isInvalid = false,
      errorMessage,
      size = 'md',
      className,
      iconPosition = 'left',
      searchIcon,
      'aria-label': ariaLabel = 'Search',
      onKeyDown,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    // ============================================
    // STATE MANAGEMENT
    // ============================================

    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Use forwarded ref or internal ref
    React.useImperativeHandle(ref, () => inputRef.current!);

    // Determine if controlled or uncontrolled
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // ============================================
    // EVENT HANDLERS
    // ============================================

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSearch?.(currentValue);
      }

      if (e.key === 'Escape') {
        handleClear();
        inputRef.current?.blur();
      }

      onKeyDown?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }

      onChange?.('');
      onClear?.();
      inputRef.current?.focus();
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // ============================================
    // COMPUTED VALUES
    // ============================================

    const sizeStyles = sizeConfig[size];
    const hasValue = currentValue.length > 0;
    const showClear = showClearButton && hasValue && !disabled && !isLoading;

    // ============================================
    // RENDER
    // ============================================

    return (
      <div
        className={cn(
          'relative w-full',
          className
        )}
        data-component="search-input"
      >
        {/* Main Input Container */}
        <div
          className={cn(
            // Base styles
            'relative flex items-center gap-2',
            'bg-[var(--input-background)] rounded-[var(--radius-input)]',
            'border border-[var(--input-border)] transition-all duration-[var(--transition-base)]',
            sizeStyles.container,
            sizeStyles.padding,

            // Focus state - 1px border + 1px inset shadow = 2px total, plus outer glow
            isFocused && !isInvalid && 'border-[var(--color-brand-primary)] shadow-[inset_0_0_0_1px_var(--color-brand-primary),0_0_0_3px_rgba(0,159,218,0.15)]',

            // Invalid state - 1px border + 1px inset shadow = 2px total, plus outer red glow
            isInvalid && 'border-[var(--destructive)] shadow-[inset_0_0_0_1px_var(--destructive),0_0_0_3px_rgba(217,45,32,0.15)]',

            // Disabled state
            disabled && 'opacity-50 cursor-not-allowed bg-[var(--muted)]',

            // Loading state
            isLoading && 'cursor-wait'
          )}
        >
          {/* Search Icon (Left) */}
          {iconPosition === 'left' && (
            <div
              className={cn(
                'flex-shrink-0 transition-colors duration-[var(--transition-base)]',
                isFocused ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]',
                isInvalid && 'text-[var(--destructive)]'
              )}
            >
              {isLoading ? (
                <Loader2 className={cn(sizeStyles.iconSize, 'animate-spin')} strokeWidth={1.67} />
              ) : searchIcon ? (
                searchIcon
              ) : (
                <Search className={sizeStyles.iconSize} strokeWidth={1.67} />
              )}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-invalid={isInvalid}
            aria-describedby={errorMessage ? 'search-input-error' : undefined}
            placeholder={placeholder}
            className={cn(
              // Base styles
              'flex-1 min-w-0 bg-transparent outline-none',
              'font-[\'Roboto\',_sans-serif] font-normal',
              sizeStyles.text,
              'leading-[20px]',

              // Text colors
              'text-[var(--foreground)]',
              'placeholder:text-[var(--foreground-muted)]',

              // Selection
              'selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]',

              // Disabled
              disabled && 'cursor-not-allowed'
            )}
            {...props}
          />

          {/* Clear Button */}
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className={cn(
                'flex-shrink-0 text-[var(--foreground-muted)]',
                'hover:text-[var(--foreground)] transition-colors duration-[var(--transition-base)]',
                'focus:outline-none focus:text-[var(--foreground)]',
                'p-0.5 rounded-sm'
              )}
            >
              <X className={sizeStyles.iconSize} strokeWidth={1.67} />
            </button>
          )}

          {/* Search Icon (Right) */}
          {iconPosition === 'right' && !showClear && (
            <div
              className={cn(
                'flex-shrink-0 transition-colors duration-[var(--transition-base)]',
                isFocused ? 'text-[var(--primary)]' : 'text-[var(--foreground-muted)]',
                isInvalid && 'text-[var(--destructive)]'
              )}
            >
              {isLoading ? (
                <Loader2 className={cn(sizeStyles.iconSize, 'animate-spin')} strokeWidth={1.67} />
              ) : searchIcon ? (
                searchIcon
              ) : (
                <Search className={sizeStyles.iconSize} strokeWidth={1.67} />
              )}
            </div>
          )}
        </div>

        {/* Error Message */}
        {errorMessage && isInvalid && (
          <p
            id="search-input-error"
            className="mt-1.5 text-[12px] text-[var(--destructive)] font-['Roboto',_sans-serif]"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

// ============================================
// HEADER SEARCH INPUT (Specific variant for header)
// ============================================

export interface HeaderSearchInputProps extends Omit<SearchInputProps, 'size'> {
  /** Show border around the entire container */
  showBorder?: boolean;
}

export const HeaderSearchInput = React.forwardRef<HTMLInputElement, HeaderSearchInputProps>(
  ({ showBorder = true, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'bg-white rounded-[4px] w-full',
          showBorder && 'border border-[var(--border)]',
          className
        )}
        data-component="header-search-input"
      >
        <SearchInput
          ref={ref}
          size="md"
          showClearButton={false}
          className="border-0"
          {...props}
        />
      </div>
    );
  }
);

HeaderSearchInput.displayName = 'HeaderSearchInput';

export default SearchInput;
