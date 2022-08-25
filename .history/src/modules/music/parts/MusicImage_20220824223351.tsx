import * as React from "react";
import { IArtists, MusicItemType } from "../../../utils/enum";

interface MusicImageProps {
  classNames: string;
  data: MusicItemType;
}

export default function MusicImage({ classNames, data }: MusicImageProps) {
  if (!data) return null;
  const imageUrl = data?.artists.map((item: IArtists) => item?.imageUrl);
  console.log(
    "🚀 ~ file: MusicImage.tsx ~ line 11 ~ MusicImage ~ imageUrl",
    imageUrl
  );
  return (
    <div className={`music-image ${classNames}`}>
      <img
        src={data?.thumbnail || data?.thumbURL}
        alt=""
        className="w-full h-full  object-cover overflow-hidden"
      />
    </div>
  );
}
