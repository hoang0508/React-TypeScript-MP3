import * as React from "react";
import { MusicItemType } from "../../music";
import MusciItem from "../../music/MusicItem";

interface PlayListItemProps {
  dataPlayList: MusicItemType;
}

export default function PlayListItem({ dataPlayList }: PlayListItemProps) {
  return (
    <div>
      <MusciItem
        data={dataPlayList}
        classNames="w-[238px] h-[238px]"
        playNot
        isPlayList
      ></MusciItem>
    </div>
  );
}
