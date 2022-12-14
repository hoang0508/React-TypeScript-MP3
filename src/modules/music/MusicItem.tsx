import * as React from "react";
import { IconDots, IconPlay, IconPlayingMusic } from "../../components/icon";
import "./MusicList.scss";
import MusicTitle from "./parts/MusicTitle";
import MusicAuthor from "./parts/MusicAuthor";
import MusicImage from "./parts/MusicImage";
import { useNavigate } from "react-router-dom";
import { MusicItemType } from "../../utils/type";
import LoadingSkeleton from "../../components/loading/LoadingSkeleton";
import { useSelector } from "react-redux";
import { NavigateName } from "../../utils/enum";
interface MusciItemProps {
  data: MusicItemType;
  heading?: string;
  classNames?: string;
  onMouse?: () => void;
  isNavigate?: any;
  playNot?: boolean;
  musicTime?: boolean;
  author?: {};
  flexCenter?: boolean;
  isPlayList?: boolean;
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
  isNavigate,
  isPlayList,
}: MusciItemProps) {
  const navigate = useNavigate();
  const handlePlayListItem = () => {
    const { key } = data;

    // check điều kiện navigate
    switch (isNavigate) {
      case NavigateName.PlayList:
        navigate(`/PlayList/${key}`);
        break;
      case NavigateName.Video:
        navigate(`/VideoMusic/${key}`);
        break;
      case NavigateName.Topic:
        navigate(`/Topic/${key}`);
        break;
      case NavigateName.Lyric:
        navigate(`/Lyric/${key}`);
        break;
      default:
        break;
    }
  };

  // loading
  const { isLoading: isLoadingMusic } = useSelector(
    (state: any) => state.music
  );

  const { isLoading: isLoadingRanking } = useSelector(
    (state: any) => state.ranking
  );

  const { isLoading: isLoadingDisvover } = useSelector(
    (state: any) => state.discover
  );

  if (isLoadingRanking && isLoadingMusic && isLoadingDisvover)
    return (
      <LoadingMusicItem
        data={data}
        heading={heading}
        author={author}
        classNames={classNames}
      ></LoadingMusicItem>
    );
  return (
    <>
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
          {isPlayList && (
            <div className="absolute bottom-2 right-2 bg-opacity-20 bg-black rounded-full w-10 h-10 z-10 flex items-center justify-center">
              <IconPlayingMusic className="w-8 h-8" />
            </div>
          )}
        </div>
        <div className={`${flexCenter ? "" : "mt-3"}`}>
          {heading && <MusicTitle>{data?.title}</MusicTitle>}
          {author && (
            <MusicAuthor className="mt-2 text-xs">{author}</MusicAuthor>
          )}
        </div>
      </div>
    </>
  );
}

// Loading skeleton
const LoadingMusicItem = ({ heading, author, classNames }: MusciItemProps) => {
  return (
    <div>
      <div className="relative overflow-hidden music-item">
        <div className={classNames}>
          <LoadingSkeleton
            width="100%"
            height="100%"
            radius="10px"
          ></LoadingSkeleton>
        </div>
      </div>
      <div>
        <div className="my-3">
          {heading && (
            <LoadingSkeleton width="177px" height="20px"></LoadingSkeleton>
          )}
        </div>
        {author && (
          <LoadingSkeleton width="177px" height="20px"></LoadingSkeleton>
        )}
      </div>
    </div>
  );
};
