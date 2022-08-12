import * as React from "react";
import { v4 } from "uuid";
import MusicAuthor from "./MusicAuthor";

interface MusicImageAuthorProps {
  dataMusicNewList: string[];
}

export default function MusicImageAuthor({
  dataMusicNewList,
}: MusicImageAuthorProps) {
  return (
    <div className="flex items-center mb-2">
      {dataMusicNewList &&
        dataMusicNewList.length > 0 &&
        dataMusicNewList.map((item: any) => (
          <div key={v4()} className="music-image--author">
            <img
              src={item.imageUrl}
              alt=""
              className="w-8 h-8 rounded-full object-cover border-2 border-white "
            />
          </div>
        ))}
      <MusicAuthor key={v4()} className="ml-2">
        {dataMusicNewList &&
          dataMusicNewList.map((item: any) => item.name).join(" , ")}
      </MusicAuthor>
    </div>
  );
}
