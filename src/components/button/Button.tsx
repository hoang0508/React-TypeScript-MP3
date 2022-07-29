import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
}

export default function Button({
  children,
  className = "text-xs inline-block py-1 px-3",
}: Buttonprops) {
  return (
    <button
      className={`border-borderColor rounded-xl border cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
