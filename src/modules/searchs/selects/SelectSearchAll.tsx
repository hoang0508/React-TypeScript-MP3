import React from "react";
import { useSelector } from "react-redux";
import Gap from "../../../components/common/Gap";
import HeadingLine from "../../../components/common/Headingline";
import MusicSong from "../../music/MusicSong";
import SearchPlayList from "../SearchPlayLists";
import SearchVideo from "../SearchVideo";

interface ISelectAll {
  song: [];
  playlist: [];
  video: [];
}

const SelectSearchAll = ({ song, playlist, video }: ISelectAll) => {
  const { dataSelect, selectName, dataSearch } = useSelector(
    (state: any) => state.search
  );
  return (
    <>
      {dataSearch?.status !== "error" &&
        selectName === "all" &&
        dataSelect.length <= 0 && (
          <>
            <HeadingLine>Bài hát</HeadingLine>
            <MusicSong dataSong={song}></MusicSong>
            <Gap />
            <HeadingLine>Playlist</HeadingLine>
            <SearchPlayList dataSearchPlayList={playlist}></SearchPlayList>
            <Gap />
            <HeadingLine>Video</HeadingLine>
            <SearchVideo dataSearchVideo={video}></SearchVideo>
          </>
        )}
    </>
  );
};

export default SelectSearchAll;
