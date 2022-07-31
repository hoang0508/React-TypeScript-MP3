import * as React from "react";

export interface MusicNCTProps {}

export default function MusicNCT(props: MusicNCTProps) {
  return (
    <div className="music-nct">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <h3>#NCTChart</h3>
          <span>31/07/2022</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
