import React, { useEffect, useState } from "react";
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
import SelectSearchAll from "../modules/searchs/selects/SelectSearchAll";
import SelectSearchPlist from "../modules/searchs/selects/SelectSearchPlist";
import SelectSearchSong from "../modules/searchs/selects/SelectSearchSong";
import { Fetchdata } from "../redux/MusicSlice";
import {
  setActiveSelect,
  setDataSelect,
  setDataSelectName,
} from "../redux/SearchSlice";
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

  const song = dataSearch?.search?.song?.song;
  const playlist = dataSearch?.search?.playlist?.playlist;
  const video = dataSearch?.search?.video?.video;

  // handle Click Select Tab search
  const handleSelectSearch = (item: string) => {
    switch (item) {
      case "song":
        dispatch(setDataSelect(song));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect("song"));
        break;
      case "playlist":
        dispatch(setDataSelect(playlist));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect("playlist"));
        break;
      case "video":
        dispatch(setDataSelect(video));
        dispatch(setDataSelectName(item));
        dispatch(setActiveSelect("video"));
        break;
      default:
        dispatch(setDataSelect([]));
        dispatch(setDataSelectName("all"));
        dispatch(setActiveSelect("all"));
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

      <SelectSearchAll
        video={video}
        song={song}
        playlist={playlist}
      ></SelectSearchAll>
      <SelectSearchSong></SelectSearchSong>
      <SelectSearchPlist playlist={playlist}></SelectSearchPlist>

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
