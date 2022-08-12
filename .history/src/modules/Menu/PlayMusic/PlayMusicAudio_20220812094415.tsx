import * as React from "react";
import { useSelector } from "react-redux";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import usePlayMusicTimer from "../../../hooks/usePlayMusicTimer";

interface PlayMusicAudioProps {
  dataSong: any;
  dataMusicKey: any;
  data: any;
  handleEndedChange: () => {};
}

export default function PlayMusicAudio({
  dataSong,
  dataMusicKey,
  data,
  handleEndedChange,
}: PlayMusicAudioProps) {
  // context music play
  const { refMp3, volume } = useMusicPlay();

  // indexSong
  // index Song
  const indexSong = useSelector((state: any) => state.music.indexSong);

  // hooks useTimerMusicPlay
  const { durationTime, remainingTime, range } = usePlayMusicTimer(data);

  // src music mp3
  const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState<any>();
  React.useEffect(() => {
    setConfigMusicItemMp3(dataSong?.song);
  }, [dataSong?.song]);

  // ID audio -- tính năng tua mp3, input range
  const idAudio = document.querySelector<any>("#idMp3");
  const [k, setK] = React.useState<any>(0);
  React.useEffect(() => {
    const handleVolume = () => {
      let vol = idAudio?.volume;
      vol = volume;
      setK(vol);
    };
    handleVolume();
  }, [idAudio?.volume, k, volume]);
  const handleChangePlay = () => {
    idAudio.currentTime = range.current.value;
  };

  const muteBolean = k >= 0 ? false : true;
  console.log(
    "🚀 ~ file: PlayMusicAudio.tsx ~ line 55 ~ muteBolean",
    muteBolean
  );

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
          onVolumeChange={k}
          muted={muteBolean}
          src={
            indexSong >= 1
              ? dataMusicKey?.song?.streamUrls[0].streamUrl
              : configMusicItemMp3?.streamUrls[0]?.streamUrl
          }
          ref={refMp3}
          id="idMp3"
          onEnded={handleEndedChange}
        ></audio>
      )}
      <div className="flex justify-between items-center mt-2 text-xs">
        <span>{remainingTime}</span>
        <span>{durationTime}</span>
      </div>
    </div>
  );
}
