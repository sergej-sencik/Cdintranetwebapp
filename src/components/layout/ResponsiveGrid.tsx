import React from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { getGridColumns, getGapSpacing } from '../../utils/responsive';
import './ResponsiveGrid.css';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children, 
  className = '',
  columns 
}) => {
  const { device } = useBreakpoint();
  const gapClass = getGapSpacing(device);
  
  const gridColumns = columns 
    ? columns[device] || getGridColumns(device)
    : getGridColumns(device);
  
  return (
    <div 
      className={`responsive-grid ${gapClass} ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)` 
      }}
    >
      {children}
    </div>
  );
};
