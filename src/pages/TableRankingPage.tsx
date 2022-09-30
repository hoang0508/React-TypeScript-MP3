import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../components/common/Gap";
import { ShareSocial } from "../components/share";
import { TabCategory } from "../components/tab";
import { yearNumber } from "../configs/ConfigDateTime";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import RankingDate from "../modules/ranking/RankingDate";
import RankingListSong from "../modules/ranking/RankingListSong";
import RankingShare from "../modules/ranking/RankingShare";
import RankingTop from "../modules/ranking/RankingTop";
import { fetchDataRank } from "../redux/RankingSlice";
import { Rankcategory } from "../utils/enum";

export interface ITableRankingPageProps {}

const dataSelectRanking: {
  id: number;
  title: string;
  head: string;
}[] = [
  {
    id: 1,
    title: "BXH tuần",
    head: "bxh",
  },
  {
    id: 2,
    title: "Realtime",
    head: "real",
  },
];

const dataCategoryMus: {
  id: number;
  text: string;
}[] = [
  {
    id: 1,
    text: "Việt Nam",
  },
  {
    id: 2,
    text: "Âu Mỹ",
  },
];

export default function TableRankingPage(props: ITableRankingPageProps) {
  const dispatch = useDispatch();
  const { weeks } = useSelector((state: any) => state.ranking);
  React.useEffect(() => {
    dispatch(
      fetchDataRank({
        category: Rankcategory.musicViet,
        week: weeks,
        year: yearNumber,
      })
    );
  }, [dispatch, weeks]);

  return (
    <LayoutMusicPage musicSidebarR>
      <MenuSelect dataSelect={dataSelectRanking}></MenuSelect>
      <TabCategory dataCategory={dataCategoryMus}></TabCategory>
      <RankingDate></RankingDate>
      <RankingTop></RankingTop>
      <RankingShare></RankingShare>
      <ShareSocial></ShareSocial>
      <Gap className="mb-6" />
      <RankingListSong></RankingListSong>
    </LayoutMusicPage>
  );
}
