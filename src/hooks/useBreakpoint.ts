/**
 * ============================================
 * useBreakpoint Hook
 * ============================================
 * 
 * React hook for detecting current breakpoint and device type.
 * Provides reactive breakpoint detection with SSR support.
 */

import { useEffect, useState } from 'react';
import { 
  getDeviceType, 
  isDevice, 
  isMobile, 
  isTablet, 
  isDesktop,
  isTabletUp,
  isMobileOrTablet,
  type DeviceType 
} from '../utils/breakpoints';

interface BreakpointState {
  /** Current device type */
  device: DeviceType;
  /** Current window width in pixels */
  width: number;
  /** True if viewport is mobile (≤ 767px) */
  isMobile: boolean;
  /** True if viewport is tablet (768px - 1023px) */
  isTablet: boolean;
  /** True if viewport is desktop (≥ 1024px) */
  isDesktop: boolean;
  /** True if viewport is tablet or larger (≥ 768px) */
  isTabletUp: boolean;
  /** True if viewport is mobile or tablet (≤ 1023px) */
  isMobileOrTablet: boolean;
}

/**
 * Get initial state for SSR compatibility
 */
const getInitialState = (): BreakpointState => {
  // Default to desktop for SSR to avoid hydration mismatches
  const defaultWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
  
  return {
    device: getDeviceType(defaultWidth),
    width: defaultWidth,
    isMobile: isMobile(defaultWidth),
    isTablet: isTablet(defaultWidth),
    isDesktop: isDesktop(defaultWidth),
    isTabletUp: isTabletUp(defaultWidth),
    isMobileOrTablet: isMobileOrTablet(defaultWidth),
  };
};

/**
 * Hook for detecting current breakpoint
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { device, isMobile, isTablet, isDesktop } = useBreakpoint();
 *   
 *   return (
 *     <div>
 *       {isMobile && <MobileView />}
 *       {isTablet && <TabletView />}
 *       {isDesktop && <DesktopView />}
 *     </div>
 *   );
 * }
 * ```
 */
export const useBreakpoint = (): BreakpointState => {
  const [state, setState] = useState<BreakpointState>(getInitialState);

  useEffect(() => {
    // Update state based on current window width
    const updateState = () => {
      const width = window.innerWidth;
      setState({
        device: getDeviceType(width),
        width,
        isMobile: isMobile(width),
        isTablet: isTablet(width),
        isDesktop: isDesktop(width),
        isTabletUp: isTabletUp(width),
        isMobileOrTablet: isMobileOrTablet(width),
      });
    };

    // Set initial state
    updateState();

    // Add resize listener with debouncing
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateState, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return state;
};

/**
 * Hook to check if current device matches specified type
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobileDevice = useIsDevice('mobile');
 *   
 *   return isMobileDevice ? <MobileView /> : <DesktopView />;
 * }
 * ```
 */
export const useIsDevice = (device: DeviceType): boolean => {
  const { device: currentDevice } = useBreakpoint();
  return currentDevice === device;
};

/**
 * Hook to get current window width
 * Useful for precise width-based calculations
 */
export const useWindowWidth = (): number => {
  const { width } = useBreakpoint();
  return width;
};
