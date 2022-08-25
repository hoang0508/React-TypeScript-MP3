import * as React from "react";

export interface IMenuSelectProps {}

export default function MenuSelect(props: IMenuSelectProps) {
  return (
    <div className="flex items-center gap-x-12 justify-center  border-b border-borderColor pb-5">
      <span>Tất cả</span>
      <span>Tất cả</span>
      <span>Tất cả</span>
      <span>Tất cả</span>
    </div>
  );
}
