import * as React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import { FetchDataVideo } from "../redux/MusicSlice";

export interface VideoPageProps {}

export default function VideoPage(props: VideoPageProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataVideo(id));
  }, [dispatch, id]);

  const { dataVideo } = useSelector((state: any) => state.music);
  const { streamUrls } = dataVideo?.video;
  const url = streamUrls[0]?.streamUrl;
  return (
    <LayoutMusicPage>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={url}
          width="100%"
          height="100%"
        />
      </div>
    </LayoutMusicPage>
  );
}
