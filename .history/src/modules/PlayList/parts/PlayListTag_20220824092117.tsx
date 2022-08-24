import * as React from "react";
import { v4 } from "uuid";
import { MusicItemType } from "../../../utils/enum";

interface PlayListTagProps {
  listTag: MusicItemType[];
}

export default function PlayListTag({ listTag }: PlayListTagProps) {
  return (
    <div className="flex gap-x-4 mt-3 items-center">
      <h3>Tags: </h3>
      <div className="flex flex-wrap items-center gap-3">
        {listTag &&
          listTag.length > 0 &&
          listTag.map((item: MusicItemType) => (
            <span
              key={v4()}
              className="bg-bgColor2 font-medium text-text2 py-2 px-5 rounded"
            >
              {item.name}
            </span>
          ))}
      </div>
    </div>
  );
}
