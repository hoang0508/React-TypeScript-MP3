import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../../music/MusicItem";

export interface PlayMusicProps {}

export default function Playmusic(props: PlayMusicProps) {
  // data music
  const data = useSelector((state: any) => state.music.dataMusic);

  // data item play music
  const dataPlay = useSelector((state: any) => state.music.dataMusicPlay);
  console.log(
    "🚀 ~ file: Playmusic.tsx ~ line 13 ~ Playmusic ~ dataPlay",
    dataPlay
  );

  const dataSong = data?.song && data?.song[0];
  console.log(
    "🚀 ~ file: Playmusic.tsx ~ line 15 ~ Playmusic ~ dataSong",
    dataSong
  );

  return (
    <div>
      <div className="bg-bgColor2 py-3 px-4">
        <MusciItem
          classNames="h-[240px] w-[240px]"
          heading="abc"
          data={dataPlay === undefined ? dataSong : dataPlay}
          playNot
          author={
            dataPlay &&
            dataPlay.artists.length > 0 &&
            dataPlay.artists.map((art: any) => art.name).join(" , ")
          }
        ></MusciItem>
      </div>
    </div>
  );
}
