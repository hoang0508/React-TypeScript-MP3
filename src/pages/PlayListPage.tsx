import * as React from "react";
import { useDispatch } from "react-redux";
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
  return (
    <LayoutMusicPage>
      <PlayListContent></PlayListContent>
    </LayoutMusicPage>
  );
}
