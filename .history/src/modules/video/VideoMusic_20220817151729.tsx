import * as React from "react";
import { useSelector } from "react-redux";
import { IconPlayingMusic } from "../../components/icon";
import { useMusicPlay } from "../../contexts/ContextProviderMusic";

export interface VideoMusicProps {}

export default function VideoMusic(props: VideoMusicProps) {
  const { dataVideo } = useSelector((state: any) => state.music);

  const url = dataVideo?.video?.streamUrls[0]?.streamUrl;

  const { isPlayer, refMp3, handleClickPlay, handleClickPause } =
    useMusicPlay();
  const booleanToggle = isPlayer?.isMyPlaylist;

  return (
    <div className="player-wrapper cursor-pointer mb-8">
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
          <IconPlayingMusic className="w-14 h-14" />
        </div>
      ) : (
        <div className="overlay" onClick={handleClickPause}></div>
      )}
    </div>
  );
}
