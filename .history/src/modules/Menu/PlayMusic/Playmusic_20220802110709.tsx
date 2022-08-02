import * as React from "react";
import { useSelector } from "react-redux";

export interface PlayMusicProps {}

export default function Playmusic(props: PlayMusicProps) {
  const data = useSelector((state: any) => state.music.dataMusicPlay);
  console.log("🚀 ~ file: Playmusic.tsx ~ line 8 ~ PlayMusic ~ data", data);

  return <div>Music</div>;
}
