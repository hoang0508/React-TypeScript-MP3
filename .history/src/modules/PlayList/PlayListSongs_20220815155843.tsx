import * as React from "react";
import HeadingLine from "../../components/common/Headingline";

export interface PlayListSongsProps {}

export default function PlayListSongs(props: PlayListSongsProps) {
  return (
    <div>
      <HeadingLine>Danh sách bài hát</HeadingLine>
      <div>
        <div className="flex justify-between items-center">
          <h3>Tiêu đề</h3>
          <h3>Nghệ sỹ</h3>
          <h3>Thời gian</h3>
        </div>
      </div>
    </div>
  );
}
