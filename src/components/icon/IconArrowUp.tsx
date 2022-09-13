import * as React from "react";

interface IconArrowUpProps {
  className: string;
}

export default function IconArrowUp({
  className = "h-6 w-6",
}: IconArrowUpProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}
