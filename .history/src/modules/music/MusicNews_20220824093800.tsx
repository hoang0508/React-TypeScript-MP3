import * as React from "react";
import { useSelector } from "react-redux";
import IconClendar from "../../components/icon/IconClendar";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "./MusicItem";
import MusicImageAuthor from "./parts/MusicImageAuthor";
import MusicTitle from "./parts/MusicTitle";

interface IMusicNewsProps {}

export default function MusicNews(props: IMusicNewsProps) {
  const data = useSelector((state: any) => state.music.dataMusic);

  // state music new
  const [dataMusicNew, setDataMusicNew] = React.useState<MusicItemType>();

  // data Music new List
  const [dataMusicNewList, setDataMusicNewList] = React.useState<[]>([]);

  // useEffect
  React.useEffect(() => {
    setDataMusicNew(data?.newRelease?.song[0]);
    setDataMusicNewList(data?.newRelease?.song[0].artists);
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
    </div>
  );
}
