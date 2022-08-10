import * as React from "react";
import { useSelector } from "react-redux";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import usePlayMusicTimer from "../../../hooks/usePlayMusicTimer";

interface PlayMusicAudioProps {
  dataSong: any;
  dataMusicKey: any;
  data: any;
}

export default function PlayMusicAudio({
  dataSong,
  dataMusicKey,
  data,
}: PlayMusicAudioProps) {
  // context music play
  const { refMp3 } = useMusicPlay();

  // indexSong
  // index Song
  const indexSong = useSelector((state: any) => state.music.indexSong);

  // hooks useTimerMusicPlay
  const { durationTime, remainingTime, range, handleChangePlay, rangeInput } =
    usePlayMusicTimer(data);

  console.log(
    "🚀 ~ file: PlayMusicAudio.tsx ~ line 26 ~ rangeInput",
    rangeInput
  );
  // src music mp3
  const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState<any>();
  React.useEffect(() => {
    setConfigMusicItemMp3(dataSong?.song);
  }, [dataSong?.song]);
  return (
    <div className="mt-4">
      <input
        type="range"
        name="range"
        ref={range}
        className="range"
        onChange={() => handleChangePlay()}
      />

      {configMusicItemMp3 && configMusicItemMp3?.streamUrls && (
        <audio
          muted={false}
          src={
            indexSong >= 1
              ? dataMusicKey?.song?.streamUrls[0].streamUrl
              : configMusicItemMp3?.streamUrls[0]?.streamUrl
          }
          ref={refMp3}
        ></audio>
      )}
      <div className="flex justify-between items-center mt-2 text-xs">
        <span>{remainingTime}</span>
        <span>{durationTime}</span>
      </div>
    </div>
  );
}
