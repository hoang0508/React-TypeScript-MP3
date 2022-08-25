import * as React from "react";
import { MusicItemType } from "../../../utils/enum";

interface MusicImageProps {
  classNames: string;
  data: MusicItemType;
}

export default function MusicImage({ classNames, data }: MusicImageProps) {
  console.log("🚀 ~ file: MusicImage.tsx ~ line 10 ~ MusicImage ~ data", data);
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
