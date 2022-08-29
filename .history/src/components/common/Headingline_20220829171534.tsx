import * as React from "react";

interface HeadingLineProps {
  children: any;
  className?: string;
}

export default function HeadingLine({ children, className }: HeadingLineProps) {
  return (
    <h3
      className={`"text-text1 text-2xl font-bold mb-4 capitalize" ${className}`}
    >
      {children}
    </h3>
  );
}
