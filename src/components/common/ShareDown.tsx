import * as React from "react";
import { IconDownLoad, IconShare } from "../icon";
import IconCloud from "../icon/IconCloud";

interface IShareDownProps {
  handleShowModalShare: () => void;
}

export default function ShareDown({ handleShowModalShare }: IShareDownProps) {
  return (
    <div className="flex-1 flex justify-end gap-x-4 text-text2 cursor-pointer">
      <IconCloud />
      <IconDownLoad />
      <IconShare onClick={() => handleShowModalShare()} />
    </div>
  );
}
