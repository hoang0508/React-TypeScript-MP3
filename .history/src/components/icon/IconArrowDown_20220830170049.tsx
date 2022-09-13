import * as React from "react";

interface IconArrowDownProps {
  className: string;
}

export default function IconArrowDown({
  className = "h-6 w-6",
}: IconArrowDownProps) {
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
