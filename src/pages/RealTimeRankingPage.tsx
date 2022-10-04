import * as React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRank } from "../redux/RankingSlice";
import { yearNumber } from "../configs/ConfigDateTime";
import { MusicItemType } from "../utils/type";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
export interface IRealTimeRankingPageProps {}

const dataSelectRanking: {
  id: number;
  title: string;
  head: string;
  link: string;
}[] = [
  {
    id: 1,
    title: "BXH tuần",
    head: "bxh",
    link: "/table-ranking",
  },
  {
    id: 2,
    title: "Realtime",
    head: "real",
    link: "/realtime",
  },
];

export default function RealTimeRankingPage(props: IRealTimeRankingPageProps) {
  const dispatch = useDispatch();
  const { weeks } = useSelector((state: any) => state.ranking);
  const category = useSelector((state: any) => state.global.tabNameCategory);
  React.useEffect(() => {
    dispatch(
      fetchDataRank({
        category: category,
        week: weeks,
        year: yearNumber,
      })
    );
  }, [dispatch, weeks, category]);
  const { dataTableRank } = useSelector((state: any) => state.ranking);
  if (!dataTableRank?.ranking) return null;
  const { song } = dataTableRank?.ranking;

  const dataChart =
    song &&
    song.length > 0 &&
    song.slice(0, 12).map((item: MusicItemType) => item?.totalWeekInRanked);

  let t: any;
  const coeff = 1000 * 60 * 15;
  const rounded = new Date(
    Math.ceil(dataTableRank?.time / coeff) * coeff
  ).toLocaleTimeString("vi-VI");
  const time = Number(rounded.slice(0, 2)) + ":00";

  t = parseInt(time, 10);

  let arr: number[] = [];
  // React.useEffect(() => {
  for (let i = 0; i < 12; i++) {
    arr.push(t % 24);
    t = t + 2;
  }

  const convertTimeChart = arr.map((item) => `${item}:00`);

  var h = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Snow depth at Vikjafjellet, Norway",
    },
    subtitle: {
      text: "Irregular time data in Highcharts JS",
    },
    xAxis: {
      categories: convertTimeChart,
    },
    yAxis: {
      title: {
        text: "Snow depth (m)",
      },
      min: 0,
    },
    tooltip: {
      headerFormat: "<b>{series.name}<span>hoang</span></b><br>",
      // pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
      pointFormat: "h%",
    },

    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 2.5,
        },
      },
    },

    colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
      {
        data: dataChart,
      },
    ],
  };

  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={dataSelectRanking}></MenuSelect>
      <HighchartsReact highcharts={Highcharts} options={h} />
    </LayoutMusicPage>
  );
}
