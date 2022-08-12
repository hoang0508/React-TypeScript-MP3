import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import PlayListContent from "../modules/PlayList/PLayListContent";
import { FectchDataPlayList } from "../redux/MusicSlice";

export interface PlayListPageProps {}

export default function PlayListPage(props: PlayListPageProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FectchDataPlayList(id));
  }, [dispatch, id]);

  const data = useSelector((state: any) => state.music.dataPlayList);
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 17 ~ PlayListPage ~ data",
    data
  );
  return (
    <LayoutMusicPage>
      <PlayListContent></PlayListContent>
    </LayoutMusicPage>
  );
}
