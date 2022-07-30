import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 7 ~ HomeMusicNew ~ data",
    data
  );
  return <div>Music new</div>;
}
