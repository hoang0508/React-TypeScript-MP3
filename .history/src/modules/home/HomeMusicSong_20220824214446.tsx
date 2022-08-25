import * as React from "react";
import { useSelector } from "react-redux";
import MusicSong from "../music/MusicSong";

interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const { song } = data;
  console.log(
    "🚀 ~ file: HomeMusicSong.tsx ~ line 10 ~ HomeMusicSong ~ song",
    song
  );
  return (
    <div className="">
      <MusicSong dataSong={song}></MusicSong>
    </div>
  );
}
