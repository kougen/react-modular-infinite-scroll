import React from 'react';

export default function DivWrapper({
  children,
  outerDivStyle,
  setScroll,
  style,
  className,
}: {
  children: React.ReactNode;
  outerDivStyle: React.CSSProperties;
  setScroll: (scroll: HTMLDivElement) => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div style={outerDivStyle} className="infinite-scroll-component__outerdiv">
      <div
        className={`infinite-scroll-component ${className || ''}`}
        ref={(infScroll: HTMLDivElement) => setScroll(infScroll)}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
