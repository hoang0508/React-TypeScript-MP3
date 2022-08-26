import React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../../../components/common/Headingline";
import SearchPlayList from "../SearchPlayLists";

interface ISelectPlist {
  playlist: [];
}

const SelectSearchPlist = ({ playlist }: ISelectPlist) => {
  const { dataSelect, selectName } = useSelector((state: any) => state.search);

  return (
    <>
      {dataSelect && dataSelect.length > 0 && selectName === "playlist" && (
        <>
          <HeadingLine>Playlist</HeadingLine>
          <SearchPlayList dataSearchPlayList={playlist}></SearchPlayList>
        </>
      )}
    </>
  );
};

export default SelectSearchPlist;
