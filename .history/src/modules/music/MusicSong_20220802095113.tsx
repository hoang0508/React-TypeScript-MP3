import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from ".";
import MusciItem from "./MusicItem";

export interface MusicSongProps {}

export default function MusicSong(props: MusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: MusicSong.tsx ~ line 11 ~ MusicSong ~ data", data);
  const dataSong = data?.song;
  return (
    <div className="flex flex-wrap gap-2">
      {dataSong &&
        dataSong.length > 0 &&
        dataSong.map((item: MusicItemType) => (
          <div key={v4()} className="w-[calc(50%-8px)] bg-bgColor2 p-2">
            <MusciItem
              data={item}
              classNames="h-[54px]"
              playNot
              heading="abc"
              flexCenter
              author={
                item.artists &&
                item.artists.map((art: any) => art.name).join(" , ")
              }
            ></MusciItem>
          </div>
        ))}
    </div>
  );
}
