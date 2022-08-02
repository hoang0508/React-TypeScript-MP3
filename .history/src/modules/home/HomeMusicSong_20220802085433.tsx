import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicSongProps {}

export default function HomeMusicSong(props: HomeMusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);

  return (
    <div className="flex items-center gap-x-4">
      <div className="flex-1">music song</div>
      <div className="flex-1">music song</div>
    </div>
  );
}
