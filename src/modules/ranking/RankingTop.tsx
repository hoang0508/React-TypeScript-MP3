import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import RankingNumber from "./parts/RankingNumber";

interface IRankingTopProps {}

export default function RankingTop(props: IRankingTopProps) {
  const { dataTableRank } = useSelector((state: any) => state.ranking);
  if (dataTableRank === undefined) return null;

  const dataRankingSong = dataTableRank?.ranking?.song[0];
  if (!dataRankingSong) return;
  const { title, artists } = dataRankingSong;
  console.log(dataTableRank);
  return (
    <div className="flex gap-x-10 bg-bgColor2 py-[27px] pl-10 pr-8 mb-6">
      <div className="relative flex-shrink-0">
        <MusciItem data={dataRankingSong}></MusciItem>
        <span className="absolute -top-2 bg-[#f44336] text-white text-[10px] font-bold  px-3 rounded">
          Top 1
        </span>
      </div>
      <div className="flex-1">
        <div className="border-b border-borderColor pb-2">
          <div className="flex items-baseline gap-x-2 mb-2">
            <span className="text-text2 text-[13px] font-semibold">
              Bài hát
            </span>{" "}
            <span className="text-text1 font-medium">{title}</span>
          </div>
          <MusicImageAuthor authorImage dataAuthor={artists}></MusicImageAuthor>
        </div>
        <RankingNumber dataRankingNumber={dataRankingSong}></RankingNumber>
      </div>
    </div>
  );
}
