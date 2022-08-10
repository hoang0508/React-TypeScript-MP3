import * as React from "react";
import { fomatTimer } from "../configs/FomatTimerPlay";
import { useMusicPlay } from "../contexts/ContextProviderMusic";

export default function usePlayMusicTimer(data?: any) {
  let { refMp3, timer } = useMusicPlay();

  const [durationTime, setDurationTime] = React.useState<any>();
  const [remainingTime, setRemainingTime] = React.useState<any>();
  const range = React.useRef<any>(null);
  const [rangeInput, setRangeInput] = React.useState<any>(0);

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
        setRemainingTime(
          rangeInput
            ? fomatTimer(rangeInput)
            : fomatTimer(refMp3?.current?.currentTime)
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(disPlayTimer, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.song?.duration, durationTime, refMp3, remainingTime, rangeInput]);

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
