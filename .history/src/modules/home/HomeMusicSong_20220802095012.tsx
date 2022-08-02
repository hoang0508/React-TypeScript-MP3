import * as React from "react";
import MusicSong from "../music/MusicSong";

export interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  return (
    <div className="">
      <MusicSong></MusicSong>
    </div>
  );
}
