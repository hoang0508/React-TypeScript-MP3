import * as React from "react";
import MusicItem from "../MusicList/parts/MusicItem";

interface MusicPlayProps {}

export default function MusicPlay(props: MusicPlayProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 py-6 px-5">
      <div>
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>{/* <MusicItem ></MusicItem> */}</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
