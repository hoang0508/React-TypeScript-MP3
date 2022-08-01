import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";
import "../music/MusicList.scss";
import IconClendar from "../../components/icon/IconClendar";
import { v4 } from "uuid";
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);
  // const dataMusicNewList = data.newRelease?.song[0].artists;
  const dataMusicItem = data.newRelease?.song;

  // state music new

  const [dataMusicNew, setDataMusicNew] = React.useState<any>();
  const [dataMusicNewList, setDataMusicNewList] = React.useState<any>();
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 19 ~ HomeMusicNew ~ dataMusicNewList",
    dataMusicNewList
  );
  const h =
    dataMusicNewList &&
    dataMusicNewList.map((item: any) => item.name).join(",");
  console.log("🚀 ~ file: HomeMusicNew.tsx ~ line 24 ~ HomeMusicNew ~ h", h);
  // console.log(
  //   "🚀 ~ file: HomeMusicNew.tsx ~ line 19 ~ HomeMusicNew ~ dataMusicNewList",
  //   dataMusicNewList[0].name.split(" ")
  // );

  // handle mouse Item
  const handleMouseItem = (item: any) => {
    setDataMusicNew(item);
    setDataMusicNewList(item.artists);
  };

  React.useEffect(() => {
    setDataMusicNew(data.newRelease?.song[0]);
    setDataMusicNewList(data.newRelease?.song[0].artists);
  }, [data.newRelease?.song]);
  return (
    <div>
      <div className="bg-bgColor2 py-5 px-10 flex gap-x-10 mb-6">
        <div>
          <MusciItem data={dataMusicNew}></MusciItem>
        </div>
        <div>
          <div className="mb-2">
            <MusicTitle>{dataMusicNew?.title}</MusicTitle>
          </div>
          <div className="flex items-center mb-2">
            {dataMusicNewList &&
              dataMusicNewList.length > 0 &&
              dataMusicNewList.map((item: any) => (
                <div key={v4()} className="music-image--author">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover border-2 border-white "
                  />
                </div>
              ))}
            {/* {dataMusicNewList &&
              dataMusicNewList.length > 0 &&
              dataMusicNewList.map((item: any) => (
                <div key={v4()} className="ml-2 music-name">
                  {h}
                </div>
              ))} */}
            <div key={v4()} className="ml-2 music-name">
              {h}
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <IconClendar></IconClendar>
            <span>
              Ngày phát hành:{" "}
              {new Date(dataMusicNew?.dateRelease).toLocaleDateString("vi-VI")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        {dataMusicItem &&
          dataMusicItem.length > 0 &&
          dataMusicItem.map((item: any) => (
            <MusciItem
              classNames="h-[80px]"
              key={v4()}
              data={item}
              onMouse={() => handleMouseItem(item)}
            ></MusciItem>
          ))}
      </div>
    </div>
  );
}
