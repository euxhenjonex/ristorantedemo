'use client';

import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'fade' | 'scale';
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.7s',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    up: { opacity: 0, transform: 'translateY(32px)' },
    fade: { opacity: 0, transform: 'none' },
    scale: { opacity: 0, transform: 'scale(0.96)' },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isInView ? visibleStyles : hiddenStyles[direction]),
      }}
    >
      {children}
    </div>
  );
}
