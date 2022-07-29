import * as React from "react";

interface MusicItemProps {
  avatar: string;
  bgImage: string;
  coverImage: string;
  creator: string;
  lyric: string;
  music: string;
  title: string;
  url: string;
}

interface props {
  data: MusicItemProps;
}

export default function MusicItem(props{
  data:MusicItemProps
}) {
  return (
    <div className="flex items-center gap-x-3 ">
      <div>
        <img
          src={data.avatar}
          alt=""
          className="w-10 h-10 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-text1 font-medium">{data.title}</h3>
        <p className="text-text2 font-normal">{data.creator}</p>
      </div>
    </div>
  );
}
