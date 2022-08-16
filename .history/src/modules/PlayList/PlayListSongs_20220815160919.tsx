import * as React from "react";
import HeadingLine from "../../components/common/Headingline";

export interface PlayListSongsProps {}

const titleHead: {
  id: number;
  heading: string;
}[] = [
  {
    id: 1,
    heading: "Tiêu đề",
  },
  {
    id: 2,
    heading: "Nghệ sỹ",
  },
  {
    id: 3,
    heading: "Thời gian",
  },
];

export default function PlayListSongs(props: PlayListSongsProps) {
  return (
    <div>
      <HeadingLine>Danh sách bài hát</HeadingLine>
      <div>
        <div className="flex justify-between items-center bg-bgColor2 py-2 px-3">
          {titleHead &&
            titleHead.length > 0 &&
            titleHead.map((item) => (
              <h3 className="uppercase font-semibold text-xl" key={item.id}>
                {item.heading}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
}
