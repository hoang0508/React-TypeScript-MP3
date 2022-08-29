import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverTrending from "../modules/discover/DiscoverTrending";
import { fetchDiscoverTrend } from "../redux/DiscoverSlice";

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
