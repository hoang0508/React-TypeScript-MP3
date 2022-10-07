import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ShareSocial } from "../components/share";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import LyricContent from "../modules/lyric/LyricContent";
import LyricDownLoad from "../modules/lyric/LyricDownLoad";
import LyricWord from "../modules/lyric/LyricWord";
import { fetchDatLyric, setDataShareLyricSong } from "../redux/LyricSlice";
import { FetchDataSong } from "../redux/MusicSlice";

export interface ILyricPageProps {}

export default function LyricPage(props: ILyricPageProps) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { dataLyric } = useSelector((state: any) => state.lyric);
  const { dataMusicSong } = useSelector((state: any) => state.music);

  const lyric = dataLyric?.lyric;
  const song = dataMusicSong?.song;
  useEffect(() => {
    dispatch(fetchDatLyric(id));
    dispatch(FetchDataSong(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setDataShareLyricSong({ ...lyric, ...song }));
  }, [lyric, song, dispatch]);

  return (
    <LayoutMusicPage>
      <LyricContent></LyricContent>
      <LyricDownLoad></LyricDownLoad>
      <ShareSocial></ShareSocial>
      <LyricWord></LyricWord>
    </LayoutMusicPage>
  );
}
