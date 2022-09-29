import * as React from "react";

interface HeadingLineProps {
  children: any;
  className?: string;
}

export default function HeadingLine({
  children,
  className = "mb-4 text-[22px]",
}: HeadingLineProps) {
  return (
    <h3 className={`"text-text1  font-bold  capitalize" ${className}`}>
      {children}
    </h3>
  );
}
