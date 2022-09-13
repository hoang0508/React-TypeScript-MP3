import { createSlice } from "@reduxjs/toolkit";

const AccordionSlice = createSlice({
  name: "accordion",
  initialState: {
    isActiceAcc: false,
    isActiveLink: false,
  },
  reducers: {
    setIsActiveAcc: (state, action) => ({
      ...state,
      isActiceAcc: action.payload,
    }),
    setisActiveLink: (state, action) => ({
      ...state,
      isActiceAcc: action.payload,
    }),
  },
});

export const { setIsActiveAcc, setisActiveLink } = AccordionSlice.actions;
export default AccordionSlice.reducer;
