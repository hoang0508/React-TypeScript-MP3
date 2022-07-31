import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
}

export default function Button({
  children,
  className = "text-xs  py-1 px-3 rounded-xl",
}: Buttonprops) {
  return (
    <button
      className={`border-borderColor   inline-block border cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
