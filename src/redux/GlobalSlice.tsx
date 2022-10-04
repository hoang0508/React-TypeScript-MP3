import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    tabNameCategory: "",
  },
  reducers: {
    setTabNameCate: (state, action) => ({
      ...state,
      tabNameCategory: action.payload,
    }),
  },
});

export const { setTabNameCate } = GlobalSlice.actions;
export default GlobalSlice.reducer;
