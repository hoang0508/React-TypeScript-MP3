import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverTrending from "../modules/discover/DiscoverTrending";
import { fetchDiscoverTrend } from "../redux/DiscoverSlice";

const MenuSelectData = [
  {
    id: 1,
    title: "Hot",
    head: "all",
  },
  {
    id: 2,
    title: "Việt Nam",
    head: "song",
  },
  {
    id: 3,
    title: "Âu Mỹ",
    head: "playlist",
  },
  {
    id: 4,
    title: "Hàn Quốc",
    head: "video",
  },
];

const DiscoverPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverTrend());
  }, [dispatch]);

  return (
    <LayoutMusicPage>
      <DiscoverTrending></DiscoverTrending>
    </LayoutMusicPage>
  );
};

export default DiscoverPage;
