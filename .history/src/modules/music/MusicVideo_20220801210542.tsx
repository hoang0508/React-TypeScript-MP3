import * as React from "react";

export interface MusicVideoProps {}

export default function MusicVideo(props: MusicVideoProps) {
  return (
    <div>
      <div className="flex gap-x-[18px] items-center">
        <div className="">Music video</div>
        <div>music video</div>
      </div>
      <div className="grid grid-cols-4 items-center"></div>
    </div>
  );
}
