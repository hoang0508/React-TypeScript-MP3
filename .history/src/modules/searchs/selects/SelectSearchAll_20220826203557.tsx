// import React from 'react';
// import { useSelector } from 'react-redux';

// const SelectSearchAll = () => {
//   const {dataSelect, selectName} = useSelector((state: any) => state.search);
//   return (
//     {dataSearch?.status !== "error" &&
//     selectName === "all" &&
//     dataSelect.length <= 0 && (
//       <>
//         <HeadingLine>Bài hát</HeadingLine>
//         <MusicSong dataSong={song}></MusicSong>
//         <Gap />
//         <HeadingLine>Playlist</HeadingLine>
//         <SearchPlayList dataSearchPlayList={playlist}></SearchPlayList>
//       </>
//     )}
//   );
// };

// export default SelectSearchAll;

import * as React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return <div></div>;
}
