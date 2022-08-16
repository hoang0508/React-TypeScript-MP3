import * as React from "react";
interface MusicDurationProps {
  className?: string;
  children: string;
}

export default function MusicDuration({
  className = "text-[#f4f6f8] text-[13px]",
  children,
}: MusicDurationProps) {
  return <span className={className}>{children}</span>;
}
