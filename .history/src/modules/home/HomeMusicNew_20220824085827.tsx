import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicTitle from "../music/parts/MusicTitle";
import "../music/MusicList.scss";
import IconClendar from "../../components/icon/IconClendar";
import { v4 } from "uuid";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicNews from "../music/MusicNews";
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);

  // state music new
  const [dataMusicNew, setDataMusicNew] = React.useState<any>();
  console.log(
    "🚀 ~ file: HomeMusicNew.tsx ~ line 17 ~ HomeMusicNew ~ dataMusicNew",
    dataMusicNew
  );

  // data Music new List
  const [dataMusicNewList, setDataMusicNewList] = React.useState<any>();

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
      <MusicNews></MusicNews>
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
