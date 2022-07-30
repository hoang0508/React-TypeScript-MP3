import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataMusicNew = data.newRelease?.song;
  return <div className="bg-bgColor2 py-5 px-10">Music new</div>;
}
