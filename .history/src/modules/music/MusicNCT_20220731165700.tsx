import * as React from "react";
import { useSelector } from "react-redux";
import { IconPlay } from "../../components/icon";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export interface MusicNCTProps {}

export default function MusicNCT(props: MusicNCTProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: MusicNCT.tsx ~ line 10 ~ MusicNCT ~ data", data);
  // console.log(
  //   "🚀 ~ file: MusicNCT.tsx ~ line 10 ~ MusicNCT ~ data",
  //   new Date(Math.ceil(data.time)).toLocaleTimeString("vi-VI")
  // );

  const coeff = 1000 * 60 * 15;
  const rounded = new Date(
    Math.ceil(data.time / coeff) * coeff
  ).toLocaleTimeString("vi-VI");

  const h = rounded;
  console.log("🚀 ~ file: MusicNCT.tsx ~ line 22 ~ MusicNCT ~ h", h);
  // console.log("🚀 ~ file: MusicNCT.tsx ~ line 22 ~ MusicNCT ~ l", l);
  // const h = l + ":00";
  // console.log("🚀 ~ file: MusicNCT.tsx ~ line 23 ~ MusicNCT ~ h", Number();

  const dataNct = data.ranking ? data.ranking?.song : [];
  console.log(
    "🚀 ~ file: MusicNCT.tsx ~ line 12 ~ MusicNCT ~ dataNct",
    dataNct
  );

  const dataListNct = dataNct.map((item: any) => item.totalWeekInRanked);

  const options = {
    chart: {
      backgroundColor: "transparent",
      style: {
        fontFamily: "monospace",
        color: "#f00", // This line won't work. You must set color for each element like title, axis labels ...
      },
    },
    title: {
      text: "",
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 16,
      },
    },
    series: [
      {
        // name: "Installation",
        data: dataListNct,
      },
      // {
      //   // name: "Manufacturing",
      //   data: number2,
      // },
    ],
  };

  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  return (
    <div className="music-nct py-4 px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <h3>#NCTChart</h3>
          <span>31/07/2022</span>
        </div>
        <div>
          <IconPlay className="w-6"></IconPlay>
        </div>
      </div>
      <div className="music-rect">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          constructorType={"chart"}
          {...props}
        />
      </div>
    </div>
  );
}
