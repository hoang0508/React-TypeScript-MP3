import * as React from "react";
import { useSelector } from "react-redux";
import { IconPlay } from "../../components/icon";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export interface MusicNCTProps {}

export default function MusicNCT(props: MusicNCTProps) {
  const data = useSelector((state: any) => state.music.dataMusic);

  const dataNct = data.ranking ? data.ranking?.song : [];
  console.log(
    "🚀 ~ file: MusicNCT.tsx ~ line 12 ~ MusicNCT ~ dataNct",
    dataNct
  );

  const dataListNct = dataNct.map((item: any) => item.totalWeekInRanked);
  console.log(
    "🚀 ~ file: MusicNCT.tsx ~ line 14 ~ MusicNCT ~ dataListNct",
    dataListNct
  );

  const h: any = "container";

  Highcharts.chart(h, {
    title: {
      text: "Solar Employment Growth by Sector, 2010-2016",
    },

    subtitle: {
      text: "Source: thesolarfoundation.com",
    },

    yAxis: {
      title: {
        text: "Number of Employees",
      },
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
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
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
      <div>
        <figure className="highcharts-figure">
          <div id="container"></div>
          <p className="highcharts-description"></p>
        </figure>
      </div>
    </div>
  );
}
