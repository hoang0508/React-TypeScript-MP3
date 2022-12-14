import * as React from "react";
import { fomatTimer } from "../configs/FomatTimerPlay";
import { useMusicPlay } from "../contexts/ContextProviderMusic";

export default function usePlayMusicTimer(data?: any) {
  let { refMp3, timer } = useMusicPlay();

  const [durationTime, setDurationTime] = React.useState<any>();
  const [remainingTime, setRemainingTime] = React.useState<any>();
  const range = React.useRef<any>(null);

  React.useEffect(() => {
    const disPlayTimer = () => {
      range.current.max = refMp3?.current?.duration;
      range.current.value = refMp3?.current?.currentTime;

      if (remainingTime === undefined && durationTime === undefined) {
        setRemainingTime("0:00");
        durationTime
          ? setDurationTime(data?.song?.duration)
          : setDurationTime("0:00");
      } else {
        setDurationTime(fomatTimer(refMp3?.current?.duration));
        setRemainingTime(fomatTimer(refMp3?.current?.currentTime));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(disPlayTimer, 500);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.song?.duration, durationTime, refMp3, remainingTime]);

  return {
    durationTime,
    remainingTime,
    range,
    timer,
  };
}
