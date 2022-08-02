import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconDots, IconVolume } from "../../../components/icon";
import { FetchDataSong } from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";

export interface PlayMusicProps {}

export default function Playmusic(props: PlayMusicProps) {
  const keySong = useSelector((state: any) => state.music.musicSongKey);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keySong));
  }, [dispatch, keySong]);

  const dataSong = useSelector((state: any) => state.music.dataMusicSong);
  console.log(
    "🚀 ~ file: Playmusic.tsx ~ line 17 ~ Playmusic ~ dataSong",
    dataSong
  );
  return (
    // <div className="flex justify-between flex-col gap-y-[100px]">
    //   <div className="bg-bgColor2 py-3 px-4">
    //     <MusciItem
    //       classNames="h-[240px] w-[240px]"
    //       heading="abc"
    //       data={dataPlay === undefined ? dataSong : dataPlay}
    //       playNot
    //       author={authorSong}
    //     ></MusciItem>
    //   </div>
    //   <div>
    //     <div className="flex justify-between items-center">
    //       <IconVolume></IconVolume>
    //       <span>Danh sách phát</span>
    //       <IconDots></IconDots>
    //     </div>
    //     <button onClick={() => handleClickPlay()}>Play</button>
    //   </div>
    // </div>
    <></>
  );
}
