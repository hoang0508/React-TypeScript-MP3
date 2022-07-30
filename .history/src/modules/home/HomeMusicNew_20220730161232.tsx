import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";
import "../music/MusicList.scss";
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataMusicNew = data.newRelease?.song[1];
  const dataMusicNewList = data.newRelease?.song[1].artists;

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
          {dataMusicNewList &&
            dataMusicNewList.length > 0 &&
            dataMusicNewList.map((item: any) => (
              <div className="music-image--author">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover border-2 border-white "
                />
              </div>
            ))}
            {dataMusicNewList && dataMusicNewList.length > 0 && dataMusicNewList.map((item:any) => (
              <div className="ml-2">{item.name}</div>
            )}
        </div>
      </div>
    </div>
  );
}
