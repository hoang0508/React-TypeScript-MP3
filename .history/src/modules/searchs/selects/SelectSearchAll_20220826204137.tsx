import React from "react";
import { useSelector } from "react-redux";
import Gap from "../../../components/common/Gap";
import HeadingLine from "../../../components/common/Headingline";
import MusicSong from "../../music/MusicSong";
import SearchPlayList from "../SearchPlayLists";

interface ISelectAll {
  song: [];
  playlist: [];
}

const SelectSearchAll = ({ song, playlist }: ISelectAll) => {
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
          </>
        )}
    </>
  );
};

export default SelectSearchAll;
