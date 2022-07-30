import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataMusicNew = data.newRelease?.song;
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 9 ~ HomeMusicNew ~ dataMusicNew",
    dataMusicNew
  );
  return <div>Music new</div>;
}
