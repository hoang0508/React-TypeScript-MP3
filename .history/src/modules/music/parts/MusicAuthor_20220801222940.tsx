import * as React from "react";

interface MusicAuthorProps {
  children?: any;
  className?: string;
}

export default function MusicAuthor({
  children,
  className = "",
}: MusicAuthorProps) {
  return (
    <span className={`music-name text-text2 ${className}`}>{children}</span>
  );
}
