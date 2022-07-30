import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";
import "../music/MusicList.scss";
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataMusicNew = data.newRelease?.song[0];
  const dataMusicNewList = data.newRelease?.song[0].artists;
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 12 ~ HomeMusicNew ~ dataMusicNewList",
    dataMusicNewList
  );

  return (
    <div className="bg-bgColor2 py-5 px-10 flex gap-x-10">
      <div>
        <MusciItem data={dataMusicNew}></MusciItem>
      </div>
      <div>
        <div className="mb-2">
          <MusicTitle>{dataMusicNew?.title}</MusicTitle>
        </div>
        <div className="flex items-center">
          <div className="music-image--author">
            <img
              src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-8 h-8 rounded-full object-cover border-2 border-white "
            />
          </div>
          <div>Erik</div>
        </div>
      </div>
    </div>
  );
}
