import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import TopicDesc from "../modules/topic/TopicDesc";
import TopicImage from "../modules/topic/TopicImage";
import TopicPlaylist from "../modules/topic/TopicPlaylist";
import { Fetchdata, FetchDataTopic } from "../redux/MusicSlice";

export interface ITopicPageProps {}

export default function TopicPage(props: ITopicPageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);

  const { id } = useParams();
  useEffect(() => {
    dispatch(FetchDataTopic(id));
  }, [dispatch, id]);

  return (
    <LayoutMusicPage musicSidebarR>
      <TopicImage></TopicImage>
      <TopicDesc></TopicDesc>
      <TopicPlaylist></TopicPlaylist>
    </LayoutMusicPage>
  );
}
