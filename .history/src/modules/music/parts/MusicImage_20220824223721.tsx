import * as React from "react";
import { IArtists, MusicItemType } from "../../../utils/enum";

interface MusicImageProps {
  classNames: string;
  data: MusicItemType;
}

export default function MusicImage({ classNames, data }: MusicImageProps) {
  const imageUrl = data?.artists
    ?.slice(0, 1)
    .map((item: IArtists) => item?.imageUrl)
    .join("");
  return (
    <div className={`music-image ${classNames}`}>
      <img
        src={data?.thumbnail || data?.thumbURL || imageUrl}
        alt=""
        className="w-full h-full  object-cover overflow-hidden"
      />
    </div>
  );
}
