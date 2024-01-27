import React from 'react';

export default function TBodyWrapper({
  children,
  setScroll,
  style,
  className,
}: {
  children: React.ReactNode;
  setScroll: (scroll: HTMLTableSectionElement) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <tbody
      style={style}
      className={`infinite-scroll-component ${className || ''}`}
      ref={(infScroll: HTMLTableSectionElement) => setScroll(infScroll)}
    >
      {children}
    </tbody>
  );
}
