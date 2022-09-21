import * as React from "react";
import "./LoadingSkeleton.scss";
export interface ILoadingSkeletonProps {
  width?: string;
  height?: string;
  radius?: string;
  className?: string;
}

export default function LoadingSkeleton({
  width,
  height,
  radius,
  className = "",
}: ILoadingSkeletonProps) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width: width || "100%",
        height: height,
        borderRadius: radius,
      }}
    ></div>
  );
}
