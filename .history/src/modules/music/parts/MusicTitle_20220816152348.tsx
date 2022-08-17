import * as React from "react";

interface MusicTitleProps {
  children: any;
  className?: string;
}

export default function MusicTitle({
  children,
  className = "text-text1 text-sm",
}: MusicTitleProps) {
  return (
    <h3
      className={`font-medium
       music-title ${className}`}
    >
      {children}
    </h3>
  );
}
