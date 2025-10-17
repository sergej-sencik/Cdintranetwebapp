import React from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { getContainerPadding } from '../../utils/responsive';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  fluid = false 
}) => {
  const { device } = useBreakpoint();
  const paddingClass = getContainerPadding(device);
  
  return (
    <div 
      className={`container ${fluid ? 'container--fluid' : ''} ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
};
