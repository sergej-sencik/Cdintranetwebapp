/**
 * ============================================
 * RESPONSIVE UTILITIES
 * ============================================
 * 
 * Helper functions for responsive design patterns
 */

import { type DeviceType } from './breakpoints';

/**
 * Conditionally apply classes based on device type
 * 
 * @example
 * ```tsx
 * <div className={clsx(
 *   'base-class',
 *   deviceClass(device, {
 *     mobile: 'text-sm',
 *     tablet: 'text-base',
 *     desktop: 'text-lg'
 *   })
 * )}>
 * ```
 */
export const deviceClass = (
  device: DeviceType,
  classes: Partial<Record<DeviceType, string>>
): string => {
  return classes[device] || '';
};

/**
 * Get value based on current device
 * Useful for dynamic values like grid columns, spacing, etc.
 * 
 * @example
 * ```tsx
 * const columns = deviceValue(device, {
 *   mobile: 1,
 *   tablet: 2,
 *   desktop: 3
 * });
 * ```
 */
export const deviceValue = (
  device: DeviceType,
  values: Partial<Record<DeviceType, any>>
): any | undefined => {
  return values[device];
};

/**
 * Get value based on current device with fallback
 * 
 * @example
 * ```tsx
 * const columns = deviceValueWithFallback(device, {
 *   mobile: 1,
 *   tablet: 2,
 *   desktop: 3
 * }, 2);
 * ```
 */
export const deviceValueWithFallback = (
  device: DeviceType,
  values: Partial<Record<DeviceType, any>>,
  fallback: any
): any => {
  return values[device] ?? fallback;
};

/**
 * Container padding based on device
 * Returns padding class names
 */
export const getContainerPadding = (device: DeviceType): string => {
  return deviceClass(device, {
    mobile: 'px-4',    // 16px
    tablet: 'px-6',    // 24px
    desktop: 'px-8',   // 32px
  });
};

/**
 * Section spacing based on device
 * Returns spacing class names
 */
export const getSectionSpacing = (device: DeviceType): string => {
  return deviceClass(device, {
    mobile: 'py-8',    // 32px vertical
    tablet: 'py-12',   // 48px vertical
    desktop: 'py-16',  // 64px vertical
  });
};

/**
 * Grid columns based on device
 * Returns grid template columns
 */
export const getGridColumns = (device: DeviceType): number => {
  return deviceValueWithFallback(device, {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }, 1);
};

/**
 * Gap spacing based on device
 * Returns gap class names
 */
export const getGapSpacing = (device: DeviceType): string => {
  return deviceClass(device, {
    mobile: 'gap-4',   // 16px
    tablet: 'gap-6',   // 24px
    desktop: 'gap-8',  // 32px
  });
};

/**
 * Card size based on device
 * Returns width/height constraints
 */
export const getCardSize = (device: DeviceType): { width: string; aspectRatio?: string } => {
  return deviceValueWithFallback(device, {
    mobile: { width: '100%' },
    tablet: { width: '48%' },
    desktop: { width: '32%' },
  }, { width: '100%' });
};

/**
 * Typography scale based on device
 * Returns font size class names
 */
export const getTypographyScale = (
  device: DeviceType,
  scale: 'small' | 'base' | 'large' | 'xlarge'
): string => {
  const scales = {
    small: deviceClass(device, {
      mobile: 'text-xs',    // 12px
      tablet: 'text-sm',    // 14px
      desktop: 'text-sm',   // 14px
    }),
    base: deviceClass(device, {
      mobile: 'text-sm',    // 14px
      tablet: 'text-base',  // 16px
      desktop: 'text-base', // 16px
    }),
    large: deviceClass(device, {
      mobile: 'text-base',  // 16px
      tablet: 'text-lg',    // 18px
      desktop: 'text-xl',   // 20px
    }),
    xlarge: deviceClass(device, {
      mobile: 'text-xl',    // 20px
      tablet: 'text-2xl',   // 24px
      desktop: 'text-3xl',  // 30px
    }),
  };
  
  return scales[scale];
};

/**
 * Navigation height based on device
 */
export const getNavigationHeight = (device: DeviceType): number => {
  return deviceValueWithFallback(device, {
    mobile: 56,   // 56px (minimum touch target)
    tablet: 64,   // 64px
    desktop: 72,  // 72px
  }, 64);
};

/**
 * Max width container based on device
 */
export const getMaxWidth = (device: DeviceType): string => {
  return deviceClass(device, {
    mobile: 'max-w-full',
    tablet: 'max-w-3xl',
    desktop: 'max-w-7xl',
  });
};

/**
 * Check if device supports hover
 * (useful for touch vs mouse interactions)
 */
export const supportsHover = (device: DeviceType): boolean => {
  return device === 'desktop';
};

/**
 * Get touch target size based on device
 * WCAG 2.1 Level AA requires minimum 44x44px for touch targets
 */
export const getTouchTargetSize = (device: DeviceType): number => {
  return deviceValueWithFallback(device, {
    mobile: 44,   // 44px (WCAG minimum)
    tablet: 44,   // 44px
    desktop: 40,  // 40px (can be smaller for mouse)
  }, 44);
};
