import * as React from "react";
import { useSelector } from "react-redux";
import { MusicItemType } from "../music";
import MusciItem from "../music/MusicItem";

export interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataSong = data?.song;
  console.log(
    "🚀 ~ file: HomeMusicSong.tsx ~ line 9 ~ HomeMusicSong ~ dataSong",
    dataSong
  );
  return (
    <div className="">
      <div className="flex flex-wrap gap-2">
        {dataSong &&
          dataSong.length > 0 &&
          dataSong.map((item: MusicItemType) => (
            <div className="flex w-[45%] bg-bgColor2 p-2">
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
    </div>
  );
}
