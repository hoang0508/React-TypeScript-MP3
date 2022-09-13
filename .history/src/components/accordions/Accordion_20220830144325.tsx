import React from "react";
import { IconArrowDown } from "../icon";

interface IAccordion {
  icon: any;
  title: string;
  className?: string;
}

const Accordion = ({ icon, title, className }: IAccordion) => {
  return (
    <div>
      <div className={`flex items-center ${className}`}>
        <div className="flex items-center gap-x-3">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <span>
          <IconArrowDown />
        </span>
      </div>
      <div className="flex flex-col  justify-center gap-x-2">
        <span>Bài hát</span>
        <span>Playlist</span>
        <span>Video</span>
      </div>
    </div>
  );
};

export default Accordion;
