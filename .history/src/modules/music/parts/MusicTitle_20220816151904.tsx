import * as React from "react";

interface MusicTitleProps {
  children: any;
  className?: string;
}

export default function MusicTitle({
  children,
  className = "text-text1",
}: MusicTitleProps) {
  return (
    <h3
      className={`font-medium text-sm
       music-title ${className}`}
    >
      {children}
    </h3>
  );
}
