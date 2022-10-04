import * as React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";
import { setIndexSong, setMusicSongKey } from "../../redux/MusicSlice";
import MusciItem from "./MusicItem";
import lodash from "lodash";
import { MusicItemType } from "../../utils/type";
interface MusicSongProps {
  dataSong: any[];
}

export default function MusicSong({ dataSong }: MusicSongProps) {
  // context music play
  const { handleClickPlay, handleClickPause } = useMusicPlay();

  const dispatch = useDispatch();

  // handle Click Item Song Music
  const handleItemSong = (item: MusicItemType, index: number) => {
    console.log(index);
    dispatch(setMusicSongKey(item?.key));
    dispatch(setIndexSong(0));

    handleClickPause();
    setTimeout(
      lodash.debounce(() => {
        handleClickPlay();
      }, 500)
    );
  };

  console.log(dataSong);

  return (
    <div className="flex flex-wrap gap-2">
      {dataSong &&
        dataSong.length > 0 &&
        dataSong.map((item: MusicItemType, index: number) => (
          <div
            key={v4()}
            className="w-[calc(50%-8px)] bg-bgColor2 p-2"
            onClick={() => {
              handleItemSong(item, index);
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
