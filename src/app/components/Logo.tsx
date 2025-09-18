'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-10 h-10'
  };

  const viewBoxSizes = {
    sm: '0 0 24 24',
    md: '0 0 32 32',
    lg: '0 0 40 40'
  };

  const circleRadius = {
    sm: 10,
    md: 14,
    lg: 18
  };

  const nodeRadius = {
    sm: 1,
    md: 1.2,
    lg: 1.5
  };

  const strokeWidth = {
    sm: 1,
    md: 1.5,
    lg: 2
  };

  return (
    <svg 
      width="32" 
      height="32" 
      viewBox={viewBoxSizes[size]} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
    >
      {/* Background circle */}
      <circle 
        cx="16" 
        cy="16" 
        r={circleRadius[size]} 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={strokeWidth[size]}
      />
      
      {/* Map/Network icon */}
      <g transform="translate(6, 6)">
        {/* Network nodes */}
        <circle cx="2" cy="2" r={nodeRadius[size]} fill="currentColor"/>
        <circle cx="10" cy="4" r={nodeRadius[size]} fill="currentColor"/>
        <circle cx="4" cy="10" r={nodeRadius[size]} fill="currentColor"/>
        <circle cx="12" cy="12" r={nodeRadius[size]} fill="currentColor"/>
        
        {/* Network connections */}
        <line x1="2" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth={strokeWidth[size]} opacity="0.7"/>
        <line x1="2" y1="2" x2="4" y2="10" stroke="currentColor" strokeWidth={strokeWidth[size]} opacity="0.7"/>
        <line x1="10" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth={strokeWidth[size]} opacity="0.7"/>
        <line x1="4" y1="10" x2="12" y2="12" stroke="currentColor" strokeWidth={strokeWidth[size]} opacity="0.7"/>
        <line x1="10" y1="4" x2="4" y2="10" stroke="currentColor" strokeWidth={strokeWidth[size]} opacity="0.7"/>
      </g>
    </svg>
  );
}
