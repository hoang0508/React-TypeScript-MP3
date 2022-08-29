import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";
import "../music/MusicList.scss";
import IconClendar from "../../components/icon/IconClendar";
import { v4 } from "uuid";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import { MusicItemType } from "../../utils/type";
// import { MusicItemType } from "../../utils/type";;
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);

  // state music new
  const [dataMusicNew, setDataMusicNew] = React.useState<MusicItemType>();

  // data Music new List
  const [dataMusicNewList, setDataMusicNewList] = React.useState<[]>([]);

  // handle mouse Item
  const handleMouseItem = (item: any) => {
    setDataMusicNew(item);
    setDataMusicNewList(item.artists);
  };

  //  music item
  const dataMusicItem = data.newRelease?.song;

  // useEffect
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
          <MusicImageAuthor
            authorImage
            dataAuthor={dataMusicNewList}
          ></MusicImageAuthor>
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
