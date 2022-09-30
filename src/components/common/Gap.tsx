import * as React from "react";

interface GapProps {
  className?: string;
}

export default function Gap({ className = "mb-8" }: GapProps) {
  return <div className={`${className}`}></div>;
}
