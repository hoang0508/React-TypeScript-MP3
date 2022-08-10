import * as React from "react";
import { fomatTimer } from "../configs/FomatTimerPlay";
import { useMusicPlay } from "../contexts/ContextProviderMusic";

let timer: any;
export default function usePlayMusicTimer(data?: any) {
  const { refMp3 } = useMusicPlay();

  const [durationTime, setDurationTime] = React.useState<any>();
  const [remainingTime, setRemainingTime] = React.useState<any>();
  const range = React.useRef<any>(null);
  const [rangeInput, setRangeInput] = React.useState<any>(0);
  console.log(range?.current?.value);

  React.useEffect(() => {
    const disPlayTimer = () => {
      range.current.max = refMp3?.current?.duration;
      range.current.value =
        range?.current?.value === 0 ? refMp3?.current?.currentTime : rangeInput;
      if (remainingTime === undefined && durationTime === undefined) {
        setRemainingTime("0:00");
        setDurationTime(data?.song?.duration);
      } else {
        setDurationTime(fomatTimer(refMp3.current?.duration));
        setRemainingTime(fomatTimer(refMp3.current?.currentTime));
      }
    };
    timer = setInterval(disPlayTimer, 500);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.song?.duration, durationTime, refMp3, remainingTime]);

  // Range Input timer

  const handleChangePlay = () => {
    let h = refMp3?.current?.currentTime;
    h = range.current.value;
    setRangeInput(h);
  };
  return {
    durationTime,
    remainingTime,
    range,
    rangeInput,
    setRangeInput,
    handleChangePlay,
    timer,
  };
}
