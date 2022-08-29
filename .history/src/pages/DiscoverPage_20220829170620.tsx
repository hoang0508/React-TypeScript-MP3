import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverTrending from "../modules/discover/DiscoverTrending";
import { fetchDiscoverTrend } from "../redux/DiscoverSlice";

const DiscoverPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverTrend());
  }, [dispatch]);

  const { dataDisTrending } = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverPage.tsx ~ line 14 ~ DiscoverPage ~ dataDisTrending",
    dataDisTrending
  );
  return (
    <LayoutMusicPage>
      <DiscoverTrending></DiscoverTrending>
    </LayoutMusicPage>
  );
};

export default DiscoverPage;
