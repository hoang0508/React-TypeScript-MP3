import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import HeadingLine from "../../components/common/Headingline";
import { IconShare } from "../../components/icon";
import { ITrendingArtistsType } from "../../utils/type";
import MusicImage from "../music/parts/MusicImage";

export interface IDiscoverTrendingProps {}

export default function DiscoverTrending(props: IDiscoverTrendingProps) {
  const { dataDisTrending } = useSelector((state: any) => state.discover);
  if (!dataDisTrending.artistTrending) return null;
  const { artistTrending } = dataDisTrending;
  console.log(
    "🚀 ~ file: DiscoverTrending.tsx ~ line 16 ~ DiscoverTrending ~ artistTrending",
    artistTrending
  );
  const imgTrending = artistTrending[0]?.imageUrl;
  return (
    <>
      <div className="bg-bgColor2 p-3">
        <div className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-x-4">
            <HeadingLine className="mb-0">Nghệ Sỹ Trending</HeadingLine>
            <span>Cập nhật ngày: {new Date().toLocaleDateString("vi-VI")}</span>
          </div>
          <IconShare />
        </div>
        <div className="flex gap-x-10">
          <div>
            <MusicImage
              classNames="w-[200px] h-[200px] "
              imgTrendingArt={imgTrending}
            ></MusicImage>
          </div>
          <div className="flex flex-wrap w-full">
            {artistTrending &&
              artistTrending.length > 0 &&
              artistTrending.map(
                (item: ITrendingArtistsType, index: number) => (
                  <div key={v4()} className="w-[50%]">
                    <span>{index + 1}</span>
                    <span className="text-[#FFC100] text-xs">new</span>
                    <span>{item?.name}</span>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}
