import * as React from "react";
import { IconPlayingMusic, IconRepeat } from "../../../components/icon";
import IconNextMusic from "../../../components/icon/IconNextMusic";
import IconPauseMusic from "../../../components/icon/IconPauseMusic";
import IconPrevMusic from "../../../components/icon/IconPrevMusic";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import { FaRandom } from "react-icons/fa";

interface PlayMusicActionProps {
  handleClickPrevMusic: () => {};
  handleClickNextMusic: () => {};
}

export default function PlayMusicAction({
  handleClickPrevMusic,
  handleClickNextMusic,
}: PlayMusicActionProps) {
  const {
    handleClickPlay,
    isPlayer,
    handleClickPause,
    handleRepeatMusic,
    repeatMusic,
  } = useMusicPlay();
  return (
    <div className="mt-5 flex justify-between items-center">
      <span>
        <FaRandom />
      </span>
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
        <IconRepeat
          className={`${repeatMusic ? "text-blue-500 w-5 h-5" : "w-5 h-5"}`}
          onClick={handleRepeatMusic}
        />
      </div>
    </div>
  );
}
