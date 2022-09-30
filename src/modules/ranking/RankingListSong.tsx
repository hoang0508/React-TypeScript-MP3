import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { IconArrowDown } from "../../components/icon";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";
import { setIndexSong, setMusicSongKey } from "../../redux/MusicSlice";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";
import lodash from "lodash";
import RankingNumber from "./parts/RankingNumber";

interface IRankingListSongProps {}

export default function RankingListSong(props: IRankingListSongProps) {
  const dispatch = useDispatch();
  // context music play
  const { handleClickPlay } = useMusicPlay();

  const { dataTableRank } = useSelector((state: any) => state.ranking);
  const [isShowRankNumber, setIsShowNumber] = useState(false);
  const [titleRank, setTitleRank] = useState<string>("");
  const handleShowRankNumber = (title: string) => {
    setTitleRank(title);
    setIsShowNumber(!isShowRankNumber);
  };

  if (!dataTableRank?.ranking) return null;
  const { song: dataListSongRank } = dataTableRank?.ranking;

  // handle Click Item Song Music
  const handleItemSong = (item: MusicItemType, index: number) => {
    dispatch(setMusicSongKey(item?.songKey));
    dispatch(setIndexSong(index));

    setTimeout(
      lodash.debounce(() => {
        handleClickPlay();
      }, 500)
    );
  };
  return (
    <>
      {dataListSongRank &&
        dataListSongRank.length > 0 &&
        dataListSongRank.map((item: MusicItemType, index: number) => (
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
                  className={`${
                    isShowRankNumber && titleRank === item?.title
                      ? "rotate-180"
                      : ""
                  }`}
                  onClick={() => handleShowRankNumber(item?.title)}
                >
                  <IconArrowDown className="w-4 h-4" />
                </span>
              </div>

              <div
                className={` ${
                  isShowRankNumber && titleRank === item?.title
                    ? "h-auto transition-all 0.2s"
                    : "h-0 overflow-hidden"
                }`}
              >
                <RankingNumber dataRankingNumber={item}></RankingNumber>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
