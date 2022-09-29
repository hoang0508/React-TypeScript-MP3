import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabCategory } from "../components/tab";
import { yearNumber } from "../configs/ConfigDateTime";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import RankingDate from "../modules/ranking/RankingDate";
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

  const { dataTableRank } = useSelector((state: any) => state.ranking);
  console.log(
    "🚀 ~ file: TableRankingPage.tsx ~ line 58 ~ TableRankingPage ~ dataTableRank",
    dataTableRank
  );
  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={dataSelectRanking}></MenuSelect>
      <TabCategory dataCategory={dataCategoryMus}></TabCategory>
      <RankingDate></RankingDate>
      <div>
        <div></div>
        <div></div>
      </div>
    </LayoutMusicPage>
  );
}
