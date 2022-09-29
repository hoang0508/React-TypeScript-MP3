import * as React from "react";

interface ITabCategoryProps {
  dataCategory: { id: number; text: string }[];
}

export default function TabCategory({ dataCategory }: ITabCategoryProps) {
  return (
    <div className="flex items-center justify-center gap-x-[26px]">
      {dataCategory &&
        dataCategory.length > 0 &&
        dataCategory.map((item) => (
          <span
            key={item?.id}
            className="text-[13px] text-text1 font-medium capitalize"
          >
            {item?.text}
          </span>
        ))}
    </div>
  );
}
