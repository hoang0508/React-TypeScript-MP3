import * as React from "react";

interface MusicTitleProps {
  children: any;
  className?: string;
}

export default function MusicTitle({ children, className }: MusicTitleProps) {
  return (
    <h3
      className={`font-medium text-sm
      text-text1 music-title ${className}`}
    >
      {children}
    </h3>
  );
}
