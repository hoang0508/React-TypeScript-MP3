import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const AuthenSlice = createSlice({
  name: "authen",
  initialState: {
    isShowLogin: false,
  },
  reducers: {
    setIsLogin: (state, action) => ({
      ...state,
      isShowLogin: action.payload,
    }),
  },
});

export const { setIsLogin } = AuthenSlice.actions;
export default AuthenSlice.reducer;
