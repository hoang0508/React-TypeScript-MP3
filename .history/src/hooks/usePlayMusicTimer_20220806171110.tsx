import * as React from "react";
import { fomatTimer } from "../configs/FomatTimerPlay";
import { useMusicPlay } from "../contexts/ContextProviderMusic";

export default function usePlayMusicTimer(data: any) {
  const { refMp3 } = useMusicPlay();

  const [durationTime, setDurationTime] = React.useState<any>();
  const [remainingTime, setRemainingTime] = React.useState<any>();
  const range = React.useRef(undefined);

  React.useEffect(() => {
    const disPlayTimer = () => {
      range.current.max = refMp3.current?.duration;
      range.current.value = refMp3.current?.currentTime;
      if (remainingTime === undefined && durationTime === undefined) {
        setRemainingTime("0:00");
        setDurationTime(data?.song?.duration);
      } else {
        setDurationTime(fomatTimer(refMp3.current?.duration));
        setRemainingTime(fomatTimer(refMp3.current?.currentTime));
      }
    };
    disPlayTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const timer = setInterval(disPlayTimer, 500);
    return () => {
      clearInterval(timer);
    };
  }, [data?.song?.duration, durationTime, refMp3, remainingTime]);

  // Range Input timer
  const [rangeInput, setRangeInput] = React.useState<any>();
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