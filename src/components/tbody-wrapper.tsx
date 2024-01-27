import React from 'react';

export default function TBodyWrapper({
  children,
  outerDivStyle,
  setScroll,
  style,
  className,
}: {
  children: React.ReactNode;
  outerDivStyle: React.CSSProperties;
  setScroll: (scroll: HTMLTableSectionElement) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <tbody
      style={{ ...style, ...outerDivStyle }}
      className={`infinite-scroll-component ${className || ''}`}
      ref={(infScroll: HTMLTableSectionElement) => setScroll(infScroll)}
    >
      {children}
    </tbody>
  );
}
