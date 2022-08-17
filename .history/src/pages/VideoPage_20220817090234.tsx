import * as React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IconPlayingMusic } from "../components/icon";
import { useMusicPlay } from "../contexts/ContextProviderMusic";
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
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 19 ~ VideoPage ~ dataVideo",
    dataVideo
  );
  const url = dataVideo?.video?.streamUrls[0]?.streamUrl;

  const { isPlayer, refMp3, handleClickPlay, handleClickPause } =
    useMusicPlay();
  const booleanToggle = isPlayer?.isMyPlaylist;
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 28 ~ VideoPage ~ booleanToggle",
    booleanToggle
  );
  const [playVideoToggle, setPlayVideoToggle] = React.useState(booleanToggle);
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 34 ~ VideoPage ~ playVideoToggle",
    playVideoToggle
  );
  const handlePauseVideo = () => {
    setPlayVideoToggle(!playVideoToggle);
    handleClickPause();
  };
  return (
    <LayoutMusicPage>
      <div className="player-wrapper">
        <video
          className="react-player"
          width="100%"
          height="100%"
          controls
          src={url}
          ref={refMp3}
        />
        {booleanToggle ? (
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <IconPlayingMusic onClick={handleClickPlay} />
          </div>
        ) : (
          <>
            <div className="overlay" onClick={handlePauseVideo}></div>
            {!playVideoToggle && (
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <IconPlayingMusic />
              </div>
            )}
          </>
        )}
      </div>
    </LayoutMusicPage>
  );
}
