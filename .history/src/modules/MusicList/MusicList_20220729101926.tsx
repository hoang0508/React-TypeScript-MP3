import * as React from "react";

export interface MusicListProps {}

export default function MusicList(props: MusicListProps) {
  return (
    <div className="w-[700px] mx-auto cursor-pointer">
      <div className="flex items-center gap-x-2">
        <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgColor2 rounded-full text-text2 font-medium">
          1
        </span>
        <div className="flex gap-x-3 items-center bg-bgColor">
          <div>
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-10 h-10 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-text1 font-medium">Bên Trên Tầng Lầu</h3>
            <p className="text-text2 font-normal">Tăng Duy Tân</p>
          </div>
        </div>
      </div>
    </div>
  );
}
