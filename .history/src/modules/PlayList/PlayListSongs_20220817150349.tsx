import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import HeadingLine from "../../components/common/Headingline";
import { setMusicSongKey } from "../../redux/MusicSlice";
import { MusicItemType } from "../../utils/enum";
import MusicDuration from "../music/parts/MusicDuration";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";
import lodash from "lodash";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";

export interface PlayListSongsProps {}

const titleHead: {
  id: number;
  heading: string;
}[] = [
  {
    id: 1,
    heading: "Tiêu đề",
  },
  {
    id: 2,
    heading: "Nghệ sỹ",
  },
  {
    id: 3,
    heading: "Thời gian",
  },
];

export default function PlayListSongs(props: PlayListSongsProps) {
  const dispatch = useDispatch();
  // context
  const { handleClickPlay } = useMusicPlay();

  // data Play List
  const data = useSelector((state: any) => state.music.dataPlayList);

  // data Song Music -- getSong
  const { dataMusicKey } = useSelector((state: any) => state.music);

  // lấy key song
  const keySongs = dataMusicKey?.key;

  if (!data?.playlist) return null;
  const { songs } = data?.playlist;

  const handleSongItem = (item: MusicItemType) => {
    dispatch(setMusicSongKey(item.key));
    // dispatch(setIndexSong(0));

    setTimeout(
      lodash.debounce(() => {
        handleClickPlay();
      }, 500)
    );
  };

  return (
    <div className="mb-10">
      <HeadingLine>Danh sách bài hát</HeadingLine>
      <div>
        <div className="grid grid-cols-3 gap-x-14 bg-bgColor2 py-2 px-3 mb-1">
          {titleHead &&
            titleHead.length > 0 &&
            titleHead.map((item) => (
              <h3
                className="uppercase font-semibold text-xs last-of-type:last:text-right"
                key={item.id}
              >
                {item.heading}
              </h3>
            ))}
        </div>

        {songs &&
          songs.length > 0 &&
          songs.map((item: MusicItemType) => (
            <div
              key={v4()}
              className="grid grid-cols-3 gap-x-12 items-center bg-bgColor2 py-2 px-3 mb-1 cursor-pointer"
              onClick={() => handleSongItem(item)}
            >
              <MusicTitle
                className={
                  item.key === keySongs && indexSong >= 0
                    ? "h-[20px] text-[13px] text-primary"
                    : "h-[20px] text-[13px]"
                }
              >
                {item?.title}
              </MusicTitle>
              <MusicImageAuthor
                textSize
                className="mb-0 flex items-center"
                dataAuthor={item?.artists}
              ></MusicImageAuthor>
              <div className="last-of-type:last:text-right">
                <MusicDuration>{item?.duration}</MusicDuration>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
