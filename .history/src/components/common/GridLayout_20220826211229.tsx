import React, { ReactElement } from "react";

interface IGridLayout {
  children: ReactElement;
}

const GridLayout = ({ children }: IGridLayout) => {
  return <div className="grid grid-cols-4 gap-x-5 gap-y-5">{children}</div>;
};

export default GridLayout;
