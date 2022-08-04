import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from ".";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";
import { setMusicSongKey } from "../../redux/MusicSlice";
import MusciItem from "./MusicItem";
import lodash from "lodash";
interface MusicSongProps {}

export default function MusicSong(props: MusicSongProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataSong = data?.song;

  // context music play
  const { handleClickPlay } = useMusicPlay();

  const dispatch = useDispatch();
  const handleItemSong = (item: MusicItemType) => {
    dispatch(setMusicSongKey(item.key));

    setTimeout(
      lodash.throttle(() => {
        handleClickPlay();
      }, 500)
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {dataSong &&
        dataSong.length > 0 &&
        dataSong.map((item: MusicItemType) => (
          <div
            key={v4()}
            className="w-[calc(50%-8px)] bg-bgColor2 p-2"
            onClick={() => {
              handleItemSong(item);
              // handleClickPlay();
            }}
          >
            <MusciItem
              data={item}
              classNames="h-[54px]"
              playNot
              heading="abc"
              flexCenter
              author={
                item.artists &&
                item.artists.map((art: any) => art.name).join(" , ")
              }
            ></MusciItem>
          </div>
        ))}
    </div>
  );
}
