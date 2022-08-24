import * as React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../../components/common/Headingline";
import { MusicItemType } from "../../utils/enum";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";

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
  const data = useSelector((state: any) => state.music.dataPlayList);
  if (!data?.playlist) return null;
  const { songs } = data?.playlist;
  console.log(
    "🚀 ~ file: PlayListSongs.tsx ~ line 31 ~ PlayListSongs ~ songs",
    songs
  );
  return (
    <div>
      <HeadingLine>Danh sách bài hát</HeadingLine>
      <div>
        <div className="grid grid-cols-3 bg-bgColor2 py-2 px-3 mb-1">
          {titleHead &&
            titleHead.length > 0 &&
            titleHead.map((item) => (
              <h3 className="uppercase font-semibold text-xs" key={item.id}>
                {item.heading}
              </h3>
            ))}
        </div>

        {songs &&
          songs.length > 0 &&
          songs.map((item: MusicItemType) => (
            <div className="grid grid-cols-3 bg-bgColor2 py-2 px-3 mb-1">
              <MusicTitle>{item?.title}</MusicTitle>
              <MusicImageAuthor dataAuthor={item?.artists}></MusicImageAuthor>
            </div>
          ))}
      </div>
    </div>
  );
}
