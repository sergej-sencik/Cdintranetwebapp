/**
 * ============================================
 * Breakpoint Debugger Component
 * ============================================
 * 
 * Visual debugging tool to display current breakpoint info.
 * Use during development to verify responsive behavior.
 * 
 * Usage:
 * Add to your App.tsx or any page component:
 * 
 * import { BreakpointDebugger } from './components/BreakpointDebugger';
 * 
 * export default function App() {
 *   return (
 *     <>
 *       <YourApp />
 *       <BreakpointDebugger />
 *     </>
 *   );
 * }
 */

import { useBreakpoint } from '../hooks/useBreakpoint';

interface BreakpointDebuggerProps {
  /** Position of the debugger */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Whether to show detailed info */
  detailed?: boolean;
}

export function BreakpointDebugger({ 
  position = 'bottom-right',
  detailed = false 
}: BreakpointDebuggerProps) {
  const { device, width, isMobile, isTablet, isDesktop } = useBreakpoint();

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const deviceColors = {
    mobile: 'bg-blue-500',
    tablet: 'bg-green-500',
    desktop: 'bg-purple-500',
  };

  const deviceIcons = {
    mobile: '📱',
    tablet: '📱',
    desktop: '🖥️',
  };

  return (
    <div 
      className={`
        fixed ${positionClasses[position]} 
        z-[9999]
        ${deviceColors[device]}
        text-white
        px-3 py-2
        rounded-lg
        shadow-lg
        font-mono text-xs
        pointer-events-none
        select-none
        opacity-90
      `}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2">
        <span className="text-base">{deviceIcons[device]}</span>
        <div>
          <div className="font-bold uppercase">{device}</div>
          <div className="text-[10px] opacity-75">{width}px</div>
        </div>
      </div>
      
      {detailed && (
        <div className="mt-2 pt-2 border-t border-white/20 space-y-1">
          <div className="flex justify-between gap-2">
            <span>Mobile:</span>
            <span>{isMobile ? '✓' : '✗'}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>Tablet:</span>
            <span>{isTablet ? '✓' : '✗'}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span>Desktop:</span>
            <span>{isDesktop ? '✓' : '✗'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Simple version with minimal UI
 */
export function BreakpointBadge() {
  const { device, width } = useBreakpoint();

  const deviceColors = {
    mobile: 'bg-blue-500',
    tablet: 'bg-green-500',
    desktop: 'bg-purple-500',
  };

  return (
    <div 
      className={`
        fixed bottom-4 right-4 
        z-[9999]
        ${deviceColors[device]}
        text-white
        px-2 py-1
        rounded
        text-xs
        font-mono
        pointer-events-none
        opacity-50
        hover:opacity-100
        transition-opacity
      `}
      aria-hidden="true"
    >
      {device} ({width}px)
    </div>
  );
}

/**
 * Grid overlay to visualize breakpoints
 */
export function BreakpointGrid() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9998]"
      aria-hidden="true"
    >
      {/* Mobile max (767px) */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[767px] border-r-2 border-blue-500/30"
      >
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 text-xs rounded">
          Mobile Max (767px)
        </div>
      </div>
      
      {/* Tablet min (768px) */}
      <div 
        className="absolute left-[768px] top-0 bottom-0 border-l-2 border-green-500/30"
      >
        <div className="absolute top-4 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
          Tablet Min (768px)
        </div>
      </div>
      
      {/* Desktop min (1024px) */}
      <div 
        className="absolute left-[1024px] top-0 bottom-0 border-l-2 border-purple-500/30"
      >
        <div className="absolute top-4 left-2 bg-purple-500 text-white px-2 py-1 text-xs rounded">
          Desktop Min (1024px)
        </div>
      </div>
      
      {/* Max width (1280px) */}
      <div 
        className="absolute left-[1280px] top-0 bottom-0 border-l-2 border-orange-500/30"
      >
        <div className="absolute top-4 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
          Max Width (1280px)
        </div>
      </div>
    </div>
  );
}
