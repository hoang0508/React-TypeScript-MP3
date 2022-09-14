import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscoverExplore } from "../redux/DiscoverSlice";

export interface IDiscoverSongPageProps {}

export default function DiscoverSongPage(props: IDiscoverSongPageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDiscoverExplore({
        type: "song",
        key: "moi-hot",
        page: 1,
        pageSize: 36,
      })
    );
  }, [dispatch]);

  const data = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverSongPage.tsx ~ line 19 ~ DiscoverSongPage ~ data",
    data
  );
  return <div>Song Page</div>;
}
