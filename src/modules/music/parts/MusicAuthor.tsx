import * as React from "react";

interface MusicAuthorProps {
  children?: any;
  className?: string;
}

export default function MusicAuthor({
  children,
  className = "text-xs",
}: MusicAuthorProps) {
  return (
    <span className={`inline-block music-name text-text2 ${className}`}>
      {children}
    </span>
  );
}
