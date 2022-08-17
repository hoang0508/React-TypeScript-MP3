import * as React from "react";
import { v4 } from "uuid";
import MusicAuthor from "./MusicAuthor";

interface MusicImageAuthorProps {
  dataAuthor: string[];
  authorImage?: boolean;
  className?: string;
  textSize?: boolean;
}

export default function MusicImageAuthor({
  dataAuthor,
  authorImage,
  className = "flex items-center mb-2",
  textSize,
}: MusicImageAuthorProps) {
  return (
    <div className={className}>
      {authorImage &&
        dataAuthor &&
        dataAuthor.length > 0 &&
        dataAuthor.map((item: any) => (
          <div key={v4()} className="music-image--author">
            <img
              src={item.imageUrl}
              alt=""
              className="w-8 h-8 rounded-full object-cover border-2 border-white "
            />
          </div>
        ))}
      <MusicAuthor key={v4()} className={textSize ? "ml-2 text-xs" : "ml-2"}>
        {dataAuthor && dataAuthor.map((item: any) => item.name).join(" , ")}
      </MusicAuthor>
    </div>
  );
}
