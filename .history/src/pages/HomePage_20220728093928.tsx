import * as React from "react";
import { HomeSidebar } from "../modules/home/HomeSidebar";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return (
    <div className="">
      <div>
        <HomeSidebar></HomeSidebar>
      </div>
    </div>
  );
}
