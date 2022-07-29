import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
}

export default function Button({
  children,
  className = "text-xs inline-block cursor-pointer",
}: Buttonprops) {
  return (
    <button className={`border-borderColor rounded-xl border ${className}`}>
      {children}
    </button>
  );
}
