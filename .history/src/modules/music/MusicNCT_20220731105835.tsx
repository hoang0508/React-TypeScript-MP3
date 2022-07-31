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

  const options: Highcharts.Options = {
    chart: {
      type: "bar",
      backgroundColor: "#000000",
      style: {
        fontFamily: "monospace",
        color: "#f00", // This line won't work. You must set color for each element like title, axis labels ...
      },
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3],
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
          {...props}
        />
      </div>
    </div>
  );
}
