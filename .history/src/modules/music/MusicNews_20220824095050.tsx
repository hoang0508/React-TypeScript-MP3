import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconClendar from "../../components/icon/IconClendar";
import { setDataMusicNewList, setDataMusicNews } from "../../redux/MusicSlice";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "./MusicItem";
import MusicImageAuthor from "./parts/MusicImageAuthor";
import MusicTitle from "./parts/MusicTitle";

interface IMusicNewsProps {}

export default function MusicNews(props: IMusicNewsProps) {
  const data = useSelector((state: any) => state.music.dataMusic);

  // state data dataMusicNews, dataMusicNewList
  const { dataMusicNews, dataMusicNewList } = useSelector(
    (state: any) => state.music
  );

  const dispatch = useDispatch();
  // useEffect
  React.useEffect(() => {
    dispatch(setDataMusicNews(data?.newRelease?.song[0]));
    dispatch(setDataMusicNewList(data?.newRelease?.song[0].artists));
  }, [data.newRelease?.song, dispatch]);
  return (
    <div>
      <div className="bg-bgColor2 py-5 px-10 flex gap-x-10 mb-6">
        <div>
          <MusciItem data={dataMusicNews}></MusciItem>
        </div>
        <div>
          <div className="mb-2">
            <MusicTitle>{dataMusicNews?.title}</MusicTitle>
          </div>
          <MusicImageAuthor
            authorImage
            dataAuthor={dataMusicNewList}
          ></MusicImageAuthor>
          <div className="flex gap-x-2 items-center">
            <IconClendar></IconClendar>
            <span>
              Ngày phát hành:{" "}
              {new Date(dataMusicNews?.dateRelease).toLocaleDateString("vi-VI")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
