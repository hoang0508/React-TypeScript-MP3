import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataSong = data?.song;
  console.log(
    "🚀 ~ file: HomeMusicSong.tsx ~ line 9 ~ HomeMusicSong ~ dataSong",
    dataSong
  );
  return (
    <div className="flex flex-col gap-x-4 flex-wrap">
      <div className="flex">
        {dataSong &&
          dataSong.length > 0 &&
          dataSong.map((item: any) => (
            <>
              <div className="flex-1">music song</div>
              <div className="flex-1">music song</div>
            </>
          ))}
      </div>
    </div>
  );
}
