import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/type";
import RankingItemSong from "./parts/RankingItemSong";

interface IRankingListSongProps {}

export default function RankingListSong(props: IRankingListSongProps) {
  const { dataTableRank } = useSelector((state: any) => state.ranking);

  if (!dataTableRank?.ranking) return null;
  const dataListSongRank = dataTableRank?.ranking?.song;

  return (
    <>
      {dataListSongRank &&
        dataListSongRank.length > 0 &&
        dataListSongRank.map((item: MusicItemType, index: number) => (
          <RankingItemSong key={v4()} item={item} index={index} />
        ))}
    </>
  );
}
