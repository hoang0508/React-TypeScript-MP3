import * as React from "react";
import { IconPlayingMusic, IconRepeat } from "../../../components/icon";
import IconNextMusic from "../../../components/icon/IconNextMusic";
import IconPauseMusic from "../../../components/icon/IconPauseMusic";
import IconPrevMusic from "../../../components/icon/IconPrevMusic";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";

interface PlayMusicActionProps {
  handleClickPrevMusic: () => {};
  handleClickNextMusic: () => {};
  handleRepeatMusic: () => {};
}

export default function PlayMusicAction({
  handleClickPrevMusic,
  handleClickNextMusic,
  handleRepeatMusic,
}: PlayMusicActionProps) {
  const { handleClickPlay, isPlayer, handleClickPause } = useMusicPlay();
  return (
    <div className="mt-5 flex justify-between items-center">
      <div></div>
      <div>
        <IconPrevMusic onClick={() => handleClickPrevMusic()}></IconPrevMusic>
      </div>
      <div>
        {isPlayer?.isMyPlaylist ? (
          <IconPlayingMusic
            className="w-12 h-12"
            onClick={handleClickPlay}
          ></IconPlayingMusic>
        ) : (
          <IconPauseMusic
            className="w-12 h-12"
            onClick={handleClickPause}
          ></IconPauseMusic>
        )}
      </div>
      <div>
        <IconNextMusic onClick={() => handleClickNextMusic()}></IconNextMusic>
      </div>
      <div>
        <IconRepeat onClick={handleRepeatMusic} />
      </div>
    </div>
  );
}
