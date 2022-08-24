import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import "../music/MusicList.scss";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/enum";
import MusicNews from "../music/MusicNews";
import { setDataMusicNewList, setDataMusicNews } from "../../redux/MusicSlice";
export interface HomeMusicNewprops {}

export default function HomeMusicNew(props: HomeMusicNewprops) {
  const data = useSelector((state: any) => state.music.dataMusic);

  const dispatch = useDispatch();

  // handle mouse Item
  const handleMouseItem = (item: MusicItemType) => {
    dispatch(setDataMusicNews(item));
    dispatch(setDataMusicNewList(item.artists));
  };
  //  music item
  const dataMusicItem = data.newRelease?.song;
  return (
    <div>
      <MusicNews></MusicNews>
      <div className="flex justify-center items-center gap-x-4">
        {dataMusicItem &&
          dataMusicItem.length > 0 &&
          dataMusicItem.map((item: MusicItemType) => (
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
