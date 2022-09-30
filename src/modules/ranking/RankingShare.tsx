import * as React from "react";
import { Button } from "../../components/button";
import ShareDown from "../../components/common/ShareDown";

export interface IRankingShareProps {}

export default function RankingShare(props: IRankingShareProps) {
  return (
    <div className="flex justify-between items-center bg-bgColor2 py-4 px-6">
      <Button
        className="border border-borderColor py-2 px-7 rounded-full text-[13px] text-text2 font-medium"
        type="button"
      >
        Phát tất cả
      </Button>
      <ShareDown></ShareDown>
    </div>
  );
}
