import * as React from "react";
import { useSelector } from "react-redux";
import MusicSong from "../music/MusicSong";

interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const { song } = data;
  return (
    <div className="">
      <MusicSong dataSong={song}></MusicSong>
    </div>
  );
}
