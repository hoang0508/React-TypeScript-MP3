import * as React from "react";

export interface IMenuSelectProps {}

export default function MenuSelect(props: IMenuSelectProps) {
  return (
    <div className="flex items-center gap-x-8 justify-center border border-b pb-3">
      <span>Tất cả</span>
      <span>Tất cả</span>
      <span>Tất cả</span>
      <span>Tất cả</span>
    </div>
  );
}
