import React from "react";
import { useSelector } from "react-redux";
import Gap from "../components/common/Gap";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import MusicSong from "../modules/music/MusicSong";
import SearchHits from "../modules/searchs/SearchHits";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";

const MenuSelectData = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Bài hát",
  },
  {
    id: 3,
    title: "Playlist",
  },
  {
    id: 4,
    title: "Video",
  },
];

const SearchPage = () => {
  const { dataSearch } = useSelector((state: any) => state.search);
  if (!dataSearch) return;
  const song = dataSearch?.search?.song?.song;
  console.log("🚀 ~ file: SearchPage.tsx ~ line 35 ~ SearchPage ~ song", song);

  return (
    <LayoutMusicPage>
      <div className="border-b border-borderColor pb-3 mb-8">
        <SearchInput></SearchInput>
      </div>
      {dataSearch?.status !== "error" && (
        <>
          <MenuSelect dataSelect={MenuSelectData}></MenuSelect>
          <HeadingLine>Bài hát</HeadingLine>
          <MusicSong dataSong={song}></MusicSong>
        </>
      )}

      {dataSearch?.status === "error" && (
        <>
          <HeadingLine>Top từ khóa</HeadingLine>
          <SearchKeyWord></SearchKeyWord>
          <Gap />
          <HeadingLine>Có thể hits</HeadingLine>
          <SearchHits></SearchHits>
        </>
      )}
    </LayoutMusicPage>
  );
};

export default SearchPage;
