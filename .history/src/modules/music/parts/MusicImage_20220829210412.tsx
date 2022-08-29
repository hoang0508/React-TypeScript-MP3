import * as React from "react";
import onErrorImg from "../../../hooks/useErrorImg";
import {
  IArtists,
  ITrendingArtistsType,
  MusicItemType,
} from "../../../utils/type";

interface MusicImageProps {
  classNames: string;
  data: MusicItemType;
  imgTrendingArt?: ITrendingArtistsType;
}

export default function MusicImage({
  classNames,
  data,
  imgTrendingArt,
}: MusicImageProps) {
  const imageUrl = imgTrendingArt
    ? imgTrendingArt?.imageUrl
    : data?.artists
        ?.slice(0, 1)
        .map((item: IArtists) => item?.imageUrl)
        .join("");
  return (
    <div className={`music-image ${classNames}`}>
      <img
        src={data?.thumbnail || data?.thumbURL || imageUrl}
        alt=""
        className="w-full h-full  object-cover overflow-hidden"
        onError={(e: any) => onErrorImg(e)}
      />
    </div>
  );
}
