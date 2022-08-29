import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../components/common/Gap";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import MusciItem from "../modules/music/MusicItem";
import MusicSong from "../modules/music/MusicSong";
import SearchHits from "../modules/searchs/SearchHits";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";
import SearchPlayList from "../modules/searchs/SearchPlayLists";
import { Fetchdata } from "../redux/MusicSlice";
import { MusicItemType } from "../utils/type";

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

  const [dataSelect, setDataSelect] = useState<[]>([]);
  const [selectName, setDataSelectName] = useState<string>("");

  const handleSelectSearch = (item: string) => {
    switch (item) {
      case "song":
        setDataSelect(song);
        setDataSelectName(item);
        break;
      case "playlist":
        setDataSelect(playlist);
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
      {dataSearch?.status !== "error" &&
        dataSelect === [] &&
        dataSelect.length <= 0 && (
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

      {dataSelect && dataSelect.length > 0 && selectName === "song" && (
        <>
          <MenuSelect
            onClick={handleSelectSearch}
            dataSelect={MenuSelectData}
          ></MenuSelect>
          <HeadingLine>Bài hát</HeadingLine>
          <div className="grid grid-cols-4 gap-5">
            {dataSelect &&
              dataSelect.length > 0 &&
              dataSelect.map((item: MusicItemType) => (
                <MusciItem data={item}></MusciItem>
              ))}
          </div>
        </>
      )}

      {dataSelect && dataSelect.length > 0 && selectName === "playlist" && (
        <>
          <MenuSelect
            onClick={handleSelectSearch}
            dataSelect={MenuSelectData}
          ></MenuSelect>
          <HeadingLine>Playlist</HeadingLine>
          <div className="grid grid-cols-4 gap-5">
            {dataSelect &&
              dataSelect.length > 0 &&
              dataSelect.map((item: MusicItemType) => (
                <MusciItem data={item}></MusciItem>
              ))}
          </div>
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
