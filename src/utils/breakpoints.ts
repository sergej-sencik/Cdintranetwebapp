export const BREAKPOINTS = {
  mobile: 767,
  tablet: 1023,
  desktop: 1024,
} as const;

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDeviceType = (width: number): DeviceType => {
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
};

export const isMobile = (width: number): boolean => width <= BREAKPOINTS.mobile;
export const isTablet = (width: number): boolean => 
  width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet;
export const isDesktop = (width: number): boolean => width > BREAKPOINTS.tablet;
export const isTabletUp = (width: number): boolean => width > BREAKPOINTS.mobile;
export const isMobileOrTablet = (width: number): boolean => width <= BREAKPOINTS.tablet;
