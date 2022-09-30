import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ShareSocial } from "../components/share";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import PlayListContent from "../modules/PlayList/PLayListContent";
import PlayListDownLoad from "../modules/PlayList/PLayListDowLoad";
import PlayListSimilar from "../modules/PlayList/PlayListSimilar";
import PlayListSongs from "../modules/PlayList/PlayListSongs";
import { FectchDataPlayList } from "../redux/MusicSlice";

export interface PlayListPageProps {}

export default function PlayListPage(props: PlayListPageProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FectchDataPlayList(id));
  }, [dispatch, id]);
  return (
    <LayoutMusicPage musicSidebarR>
      <PlayListContent></PlayListContent>
      <PlayListDownLoad></PlayListDownLoad>
      <ShareSocial></ShareSocial>
      <PlayListSongs></PlayListSongs>
      <PlayListSimilar></PlayListSimilar>
    </LayoutMusicPage>
  );
}
