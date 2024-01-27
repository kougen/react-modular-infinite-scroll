import React from 'react';

export default function DivWrapper({
  children,
  setScroll,
  style,
  className,
}: {
  children: React.ReactNode;
  setScroll: (scroll: HTMLDivElement) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`infinite-scroll-component ${className || ''}`}
      ref={(infScroll: HTMLDivElement) => setScroll(infScroll)}
      style={style}
    >
      {children}
    </div>
  );
}
