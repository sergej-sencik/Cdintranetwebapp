/**
 * Utils Index
 * 
 * Central export for all utility functions
 */

// Breakpoint utilities
export {
  BREAKPOINTS,
  BREAKPOINT_VALUES,
  MEDIA_QUERIES,
  getDeviceType,
  isDevice,
  isMobile,
  isTablet,
  isDesktop,
  isTabletUp,
  isMobileOrTablet,
  type DeviceType,
} from './breakpoints';

// Responsive utilities
export {
  deviceClass,
  deviceValue,
  deviceValueWithFallback,
  getContainerPadding,
  getSectionSpacing,
  getGridColumns,
  getGapSpacing,
  getCardSize,
  getTypographyScale,
  getNavigationHeight,
  getMaxWidth,
  supportsHover,
  getTouchTargetSize,
} from './responsive';
