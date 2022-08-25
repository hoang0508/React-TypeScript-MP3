import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../components/common/Gap";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import MusicSong from "../modules/music/MusicSong";
import SearchHits from "../modules/searchs/SearchHits";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";
import SearchPlayList from "../modules/searchs/SearchPlayLists";
import { Fetchdata } from "../redux/MusicSlice";

const MenuSelectData = [
  {
    id: 1,
    title: "Tất cả",
    head: "all",
  },
  {
    id: 2,
    title: "Bài hát",
    head: "song",
  },
  {
    id: 3,
    title: "Playlist",
    head: "playlist",
  },
  {
    id: 4,
    title: "Video",
    head: "video",
  },
];

const SearchPage = () => {
  // Call Data music
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  // data Search
  const { dataSearch } = useSelector((state: any) => state.search);
  console.log(
    "🚀 ~ file: SearchPage.tsx ~ line 33 ~ SearchPage ~ dataSearch",
    dataSearch
  );
  const song = dataSearch?.search?.song?.song;
  const playlist = dataSearch?.search?.playlist?.playlist;
  console.log(
    "🚀 ~ file: SearchPage.tsx ~ line 41 ~ SearchPage ~ playlist",

    playlist
  );

  const [dataSelect, setDataSelect] = useState<[]>([]);
  console.log(
    "🚀 ~ file: SearchPage.tsx ~ line 58 ~ SearchPage ~ dataSelect",
    dataSelect
  );
  const [selectName, setDataSelectName] = useState<string>("");

  const handleSelectSearch = (item: string) => {
    switch (item) {
      case "song":
        setDataSelect(song);
        setDataSelectName(item);
        break;

      default:
        break;
    }
  };

  return (
    <LayoutMusicPage>
      <div className="border-b border-borderColor pb-3 mb-8">
        <SearchInput></SearchInput>
      </div>
      {dataSearch?.status !== "error" && dataSelect !== [] && (
        <>
          <MenuSelect
            onClick={handleSelectSearch}
            dataSelect={MenuSelectData}
          ></MenuSelect>
          <HeadingLine>Bài hát</HeadingLine>
          <MusicSong dataSong={song}></MusicSong>
          <Gap />
          <HeadingLine>Playlist</HeadingLine>
          <SearchPlayList dataSearchPlayList={playlist}></SearchPlayList>
        </>
      )}

      {dataSelect && selectName === "song" && (
        <>
          <HeadingLine>Bài hát</HeadingLine>
          <MusicSong dataSong={dataSelect}></MusicSong>
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
