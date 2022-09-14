import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../components/common/Gap";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import SearchHits from "../modules/searchs/SearchHits";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";
import SelectSearchAll from "../modules/searchs/selects/SelectSearchAll";
import SelectSearchPlist from "../modules/searchs/selects/SelectSearchPlist";
import SelectSearchSong from "../modules/searchs/selects/SelectSearchSong";
import SelectVideo from "../modules/searchs/selects/SelectSearcVideo";
import { Fetchdata } from "../redux/MusicSlice";
import {
  setActiveSelect,
  setDataSelect,
  setDataSelectName,
} from "../redux/SearchSlice";
import { SelectTab } from "../utils/enum";

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
  const { dataSearch, loading } = useSelector((state: any) => state.search);
  console.log(
    "🚀 ~ file: SearchPage.tsx ~ line 53 ~ SearchPage ~ loading",
    loading
  );

  const song = dataSearch?.search?.song?.song;
  const playlist = dataSearch?.search?.playlist?.playlist;
  const video = dataSearch?.search?.video?.video;

  // handle Click Select Tab search
  const handleSelectSearch = (item: string) => {
    switch (item) {
      case `${SelectTab.song}`:
        dispatch(setDataSelect(song));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect(SelectTab.song));
        break;
      case `${SelectTab.playlist}`:
        dispatch(setDataSelect(playlist));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect(`${SelectTab.playlist}`));
        break;
      case `${SelectTab.video}`:
        dispatch(setDataSelect(video));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect(`${SelectTab.video}`));
        break;
      default:
        dispatch(setDataSelect([]));
        dispatch(setDataSelectName(SelectTab.all));
        dispatch(setActiveSelect(SelectTab.all));
        break;
    }
  };

  //
  useEffect(() => {
    if (dataSearch?.status !== "error") {
      dispatch(setDataSelect([]));
      dispatch(setDataSelectName("all"));
      dispatch(setActiveSelect("all"));
    }
  }, [dataSearch?.status, dispatch]);

  //

  return (
    <LayoutMusicPage musicSidebarR>
      <div className="border-b border-borderColor pb-3 mb-8">
        <SearchInput></SearchInput>
      </div>
      {dataSearch?.status !== "error" && (
        <MenuSelect
          onClick={handleSelectSearch}
          dataSelect={MenuSelectData}
        ></MenuSelect>
      )}

      {!loading && (
        <>
          <div className="follow-the-leader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      )}

      <SelectSearchAll
        video={video}
        song={song}
        playlist={playlist}
      ></SelectSearchAll>
      <SelectSearchSong></SelectSearchSong>
      <SelectSearchPlist playlist={playlist}></SelectSearchPlist>
      <SelectVideo video={video}></SelectVideo>

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
