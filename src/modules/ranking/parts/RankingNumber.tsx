import * as React from "react";

export interface IRankingNumberProps {
  dataRankingNumber: {
    totalWeekInRanked: number;
    highestPosition: number;
    oldPosition: number;
  };
}

export default function RankingNumber({
  dataRankingNumber,
}: IRankingNumberProps) {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex flex-col gap-y-[9px]">
        <span className="text-[22px] text-[#ffc40e] font-bold">
          {dataRankingNumber?.oldPosition}
        </span>
        <span className="uppercase text-text2 font-medium text-[13px]">
          tuần trước
        </span>
      </div>
      <div className="flex flex-col gap-y-[9px]">
        <span className="text-[22px] text-[#2daaed] font-bold">
          {dataRankingNumber?.highestPosition}
        </span>
        <span className="uppercase text-text2 font-medium text-[13px]">
          cao nhất
        </span>
      </div>
      <div className="flex flex-col gap-y-[9px]">
        <span className="text-[22px] text-[#95d96d] font-bold">
          {dataRankingNumber?.totalWeekInRanked}
        </span>
        <span className="uppercase text-text2 font-medium text-[13px]">
          tuần trong BXH
        </span>
      </div>
    </div>
  );
}
