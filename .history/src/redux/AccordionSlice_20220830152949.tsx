import { createSlice } from "@reduxjs/toolkit";

const AccordionSlice = createSlice({
  name: "accordion",
  initialState: {
    isActiceAcc: false,
  },
  reducers: {
    setIsActiveAcc: (state, action) => ({
      ...state,
      isActiceAcc: action.payload,
    }),
  },
});

export const { setIsActiveAcc } = AccordionSlice.actions;
export default AccordionSlice.reducer;
