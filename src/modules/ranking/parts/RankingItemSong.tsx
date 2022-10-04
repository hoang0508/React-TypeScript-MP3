import React, { useState } from "react";
import { setIndexSong, setMusicSongKey } from "../../../redux/MusicSlice";
import { MusicItemType } from "../../../utils/type";
import MusciItem from "../../music/MusicItem";
import RankingNumber from "./RankingNumber";
import lodash from "lodash";
import { useDispatch } from "react-redux";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import { v4 } from "uuid";
import { IconArrowDown } from "../../../components/icon";

interface Itemprops {
  item: MusicItemType;
  index: number;
}
const RankingItemSong = ({ item, index }: Itemprops) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  // context music play
  const { handleClickPlay, handleClickPause } = useMusicPlay();

  const handleShowRankNumber = (id: string) => {
    setIsShow(!isShow);
  };

  // handle Click Item Song Music
  const handleItemSong = (item: MusicItemType, index: number) => {
    dispatch(setMusicSongKey(item?.songKey));
    dispatch(setIndexSong(index));

    handleClickPause();
    setTimeout(
      lodash.debounce(() => {
        handleClickPlay();
      }, 500)
    );
  };

  return (
    <div className="flex items-center gap-x-2" key={v4()}>
      <span className="w-8 h-8 rounded-full bg-bgColor2 text-text2 flex justify-center items-center font-semibold">
        {index + 1}
      </span>
      <div className="flex flex-col w-full bg-bgColor2 mb-1 py-2 px-4 cursor-pointer">
        <div className="flex items-center justify-between ">
          <div onClick={() => handleItemSong(item, index)}>
            <MusciItem
              data={item}
              classNames="h-[45px]"
              playNot
              heading="abc"
              flexCenter
              author={
                item.artists &&
                item.artists.map((art: any) => art.name).join(" , ")
              }
            ></MusciItem>
          </div>
          <span
            className={`${isShow ? "rotate-180" : ""}`}
            onClick={() => handleShowRankNumber(item?.songKey)}
          >
            <IconArrowDown className="w-4 h-4" />
          </span>
        </div>
        <div
          className={` ${
            isShow
              ? "h-[100px] px-2 py-2 transition-all delay-200 ease-linear"
              : "h-0 overflow-hidden"
          }`}
        >
          <RankingNumber dataRankingNumber={item}></RankingNumber>
        </div>
      </div>
    </div>
  );
};

export default RankingItemSong;
