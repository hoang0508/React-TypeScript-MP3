import * as React from "react";
import { useSelector } from "react-redux";
import { IconPlayingMusic } from "../../components/icon";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";

export interface VideoMusicProps {}

export default function VideoMusic(props: VideoMusicProps) {
  const { dataVideo } = useSelector((state: any) => state.music);
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 19 ~ VideoPage ~ dataVideo",
    dataVideo
  );
  const url = dataVideo?.video?.streamUrls[0]?.streamUrl;

  const { isPlayer, refMp3, handleClickPlay, handleClickPause } =
    useMusicPlay();
  const booleanToggle = isPlayer?.isMyPlaylist;

  return (
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
        <div
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
          onClick={handleClickPlay}
        >
          <IconPlayingMusic className="w-10 h-10" />
        </div>
      ) : (
        <div className="overlay" onClick={handleClickPause()}></div>
      )}
    </div>
  );
}
