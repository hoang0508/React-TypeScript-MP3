import * as React from "react";
import { IconDots, IconPlay, IconPlayingMusic } from "../../components/icon";
import "./MusicList.scss";
import { MusicItemType } from "./index";
import MusicTitle from "./parts/MusicTitle";
import MusicAuthor from "./parts/MusicAuthor";
import MusicImage from "./parts/MusicImage";
import { useNavigate } from "react-router-dom";
interface MusciItemProps {
  data: MusicItemType;
  heading?: string;
  classNames?: string;
  onMouse?: () => void;
  onClick?: any;
  playNot?: boolean;
  musicTime?: boolean;
  author?: {};
  flexCenter?: boolean;
}

export default function MusciItem({
  data,
  heading,
  classNames = "h-[177px] rounded-lg",
  onMouse,
  playNot,
  musicTime,
  author,
  flexCenter,
  onClick,
}: MusciItemProps) {
  const navigate = useNavigate();
  const handlePlayListItem = () => {
    const { key } = data;
    if (onClick) {
      navigate(`/PlayList/${key}`);
    }
  };
  return (
    <div
      className={`cursor-pointer ${
        flexCenter ? "flex items-center gap-x-2" : ""
      }`}
      onMouseEnter={onMouse}
      onClick={handlePlayListItem}
    >
      <div className="relative overflow-hidden music-item">
        <MusicImage data={data} classNames={classNames}></MusicImage>
        <div className="music-overlay"></div>
        <div className="music-icon">
          <span
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer text-xl text-white
        "
          >
            {playNot ? "" : <IconPlay className="w-10 h-10"></IconPlay>}
          </span>
          <span className="absolute top-2 right-2">
            {playNot ? "" : <IconDots></IconDots>}
          </span>
        </div>
        {musicTime && (
          <div className="absolute bottom-0 right-0 music-duration">
            {data?.duration}
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-bgColor2 w-10 h-10">
          <IconPlayingMusic className="w-8 h-8" />
        </div>
      </div>
      <div className={`${flexCenter ? "" : "mt-3"}`}>
        {heading && <MusicTitle>{data?.title}</MusicTitle>}
        {author && <MusicAuthor className="mt-2 text-xs">{author}</MusicAuthor>}
      </div>
    </div>
  );
}
