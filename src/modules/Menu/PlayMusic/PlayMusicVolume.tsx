import * as React from "react";
import { IconDots, IconVolume } from "../../../components/icon";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import useHover from "../../../hooks/useHover";

export interface PlayMusicVolumeProps {}

export default function PlayMusicVolume(props: PlayMusicVolumeProps) {
  //  Context usePlaymusic
  const { volume, setVolume } = useMusicPlay();

  // custom hook userHover
  const { hovered, nodeRef } = useHover();

  return (
    <div className="flex justify-between items-center">
      <div
        className="flex flex-col items-center relative cursor-pointer "
        ref={nodeRef}
      >
        <span
          className={`${
            hovered
              ? "absolute translate-y-[-100%] "
              : "absolute translate-y-[-100%] opacity-0 visible transition-all delay-75"
          }`}
        >
          <input
            type="range"
            name="range"
            className="input-volume"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </span>
        <span>
          <IconVolume></IconVolume>
        </span>
      </div>
      <span>Danh sách phát</span>
      <IconDots></IconDots>
    </div>
  );
}
