import * as React from "react";

interface MusicTitleProps {
  children: any;
}

export default function MusicTitle({ children }: MusicTitleProps) {
  return (
    <h3
      className="font-medium text-sm
text-text1 music-title"
    >
      {children}
    </h3>
  );
}
