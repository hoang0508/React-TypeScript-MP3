import * as React from "react";
import { useSelector } from "react-redux";
import { IconDots, IconVolume } from "../../../components/icon";
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
  // data Song
  const dataSong = data?.song && data?.song[0];

  const handleClickPlay = () => {
    const h = data?.song;
    console.log("🚀 ~ file: Playmusic.tsx ~ line 23 ~ handleClickPlay ~ h", h);
  };

  //
  const authorSong =
    dataPlay === undefined
      ? dataSong &&
        dataSong.artists.length > 0 &&
        dataSong.artists.map((art: any) => art.name).join(" , ")
      : dataPlay &&
        dataPlay.artists.length > 0 &&
        dataPlay.artists.map((art: any) => art.name).join(" , ");

  return (
    <div className="flex justify-between flex-col gap-y-[100px]">
      <div className="bg-bgColor2 py-3 px-4">
        <MusciItem
          classNames="h-[240px] w-[240px]"
          heading="abc"
          data={dataPlay === undefined ? dataSong : dataPlay}
          playNot
          author={authorSong}
        ></MusciItem>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <IconVolume></IconVolume>
          <span>Danh sách phát</span>
          <IconDots></IconDots>
        </div>
        <button onClick={() => handleClickPlay()}>Play</button>
      </div>
    </div>
  );
}
