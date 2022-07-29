import * as React from "react";

export interface MusicListProps {}

export default function MusicList(props: MusicListProps) {
  return (
    <div className="w-[700px] mx-auto">
      <div className="flex items-center gap-x-2">
        <span>1</span>
        <div>
          <div className="flex gap-2 items-center">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-40 h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
