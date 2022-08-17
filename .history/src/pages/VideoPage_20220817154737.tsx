import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import VideoContent from "../modules/video/VideoContent";
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
    <LayoutMusicPage videoList>
      <VideoMusic></VideoMusic>
      <VideoContent></VideoContent>
    </LayoutMusicPage>
  );
}
