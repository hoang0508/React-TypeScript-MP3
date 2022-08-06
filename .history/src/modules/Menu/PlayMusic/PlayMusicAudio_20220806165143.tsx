// import * as React from 'react';
// import { useMusicPlay } from '../../../contexts/ContextProviderMusic';
// import usePlayMusicTimer from '../../../hooks/usePlayMusicTimer';

// export interface  PlayMusicAudioProps {

// }

// export default function PlayMusicAudio (props:  PlayMusicAudioProps) {
//   const { refMp3 } = useMusicPlay();
//   const { durationTime, remainingTime, range, rangeInput, handleChangePlay } =
//   usePlayMusicTimer(data);
//    // src music mp3
//    const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState("");
//    React.useEffect(() => {
//     setConfigMusicItemMp3(dataSong?.song);
//   }, [dataSong?.song]);
//   return (
//     <div className="mt-4">
//     <input
//       type="range"
//       name="range"
//       value={rangeInput}
//       ref={range}
//       className="range"
//       onChange={() => handleChangePlay()}
//     />

//     {configMusicItemMp3 && configMusicItemMp3?.streamUrls && (
//       <audio
//         muted={false}
//         src={
//           indexSong >= 1
//             ? dataMusicKey?.song?.streamUrls[0].streamUrl
//             : configMusicItemMp3?.streamUrls[0]?.streamUrl
//         }
//         ref={refMp3}
//       ></audio>
//     )}
//     <div className="flex justify-between items-center mt-2 text-xs">
//       <span>{remainingTime}</span>
//       <span>{durationTime}</span>
//     </div>
//   </div>
//   );
// }

import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return <div></div>;
}
