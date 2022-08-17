import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IconPlayingMusic } from "../components/icon";
import { useMusicPlay } from "../contexts/ContextProviderMusic";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import VideoMusic from "../modules/video/VideoMusic";
import { FetchDataVideo } from "../redux/MusicSlice";

export interface VideoPageProps {}

export default function VideoPage(props: VideoPageProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataVideo(id));
  }, [dispatch, id]);

  return (
    <LayoutMusicPage>
      <VideoMusic></VideoMusic>
    </LayoutMusicPage>
  );
}
