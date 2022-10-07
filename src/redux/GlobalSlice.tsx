import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    tabNameCategory: "",
    isShowMore: true,
  },
  reducers: {
    setTabNameCate: (state, action) => ({
      ...state,
      tabNameCategory: action.payload,
    }),
    setIsShowMore: (state, action) => ({
      ...state,
      isShowMore: action.payload,
    }),
  },
});

export const { setTabNameCate, setIsShowMore } = GlobalSlice.actions;
export default GlobalSlice.reducer;
