import * as React from "react";
import { useSelector } from "react-redux";
import { IconDots, IconPlay } from "../../components/icon";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MusicItemType } from ".";
import { v4 } from "uuid";
import MusciItem from "./MusicItem";
import MusicTitle from "./parts/MusicTitle";
export interface MusicNCTProps {}

export default function MusicNCT(props: MusicNCTProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: MusicNCT.tsx ~ line 10 ~ MusicNCT ~ data", data);

  // date time data
  const coeff = 1000 * 60 * 15;
  const rounded = new Date(
    Math.ceil(data.time / coeff) * coeff
  ).toLocaleTimeString("vi-VI");
  const time = Number(rounded.slice(0, 2));

  // datanct
  const dataNct = data.ranking ? data.ranking?.song : [];
  console.log(
    "🚀 ~ file: MusicNCT.tsx ~ line 25 ~ MusicNCT ~ dataNct",
    dataNct
  );

  // data List NCT hightchart
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
      // accessibility: {
      //   rangeDescription: "Range: 2010 to 2017",
      // },
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
        pointStart: time,
      },
    },
    series: [
      {
        // name: "Installation",
        data: dataListNct,
      },
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

      <div>
        {dataNct &&
          dataNct.length > 0 &&
          dataNct.slice(0, 3).map((item: MusicItemType, index: number) => (
            <div
              key={v4()}
              className="flex items-center gap-y-2 bg-bgColor2 py-1 px-4 mb-2 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-x-3 mr-5 flex-1">
                <span>{index + 1}</span>
                <MusciItem
                  classNames="rounded h-[40px]"
                  data={item}
                  playNot
                ></MusciItem>
                <MusicTitle>{item.title}</MusicTitle>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  {item.artists &&
                    item.artists.length > 0 &&
                    item.artists.map((art: any) => (
                      <span key={v4()} className="text-text2 text-xs">
                        ,{art.name}
                      </span>
                    ))}
                </div>
                <IconDots></IconDots>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
