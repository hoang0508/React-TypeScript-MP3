import * as React from "react";
import { fomatTimer } from "../configs/FomatTimerPlay";
import { useMusicPlay } from "../contexts/ContextProviderMusic";

export default function usePlayMusicTimer(data) {
  const { refMp3 } = useMusicPlay();

  const [durationTime, setDurationTime] = React.useState();
  const [remainingTime, setRemainingTime] = React.useState();
  const range = React.useRef(null);
  console.log(
    "🚀 ~ file: usePlayMusicTimer.jsx ~ line 11 ~ usePlayMusicTimer ~ range",
    range
  );
  range.current.max = refMp3.current?.duration;
  range.current.value = refMp3.current?.currentTime;

  React.useEffect(() => {
    const disPlayTimer = () => {
      if (remainingTime === undefined && durationTime === undefined) {
        setRemainingTime("0:00");
        setDurationTime(data?.song?.duration);
      } else {
        setDurationTime(fomatTimer(refMp3.current?.duration));
        setRemainingTime(fomatTimer(refMp3.current?.currentTime));
      }
    };
    const timer = setInterval(disPlayTimer, 500);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.song?.duration, durationTime, refMp3, remainingTime]);

  // Range Input timer
  const [rangeInput, setRangeInput] = React.useState();
  const handleChangePlay = () => {
    if (rangeInput === undefined) {
      setRangeInput(0);
    }
    setRangeInput(refMp3.current?.currentTime);
  };
  return {
    durationTime,
    remainingTime,
    range,
    rangeInput,
    setRangeInput,
    handleChangePlay,
  };
}
