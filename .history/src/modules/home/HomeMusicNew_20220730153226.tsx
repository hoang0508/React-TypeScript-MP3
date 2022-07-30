import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";

export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataMusicNew = data.newRelease?.song[0];
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 10 ~ HomeMusicNew ~ dataMusicNew",
    dataMusicNew
  );
  return (
    <div className="bg-bgColor2 py-5 px-10 flex gap-x-10">
      <div>
        <MusciItem data={dataMusicNew}></MusciItem>
      </div>
      <div>
        <MusicTitle>{dataMusicNew.title}</MusicTitle>
      </div>
    </div>
  );
}
