import { createSlice } from "@reduxjs/toolkit";

const AuthenSlice = createSlice({
  name: "authen",
  initialState: {
    isShowSignUp: false,
    isShowSignIn: false,
  },
  reducers: {
    setIsShowSignUp: (state, action) => ({
      ...state,
      isShowSignUp: action.payload,
    }),
    setIsShowSignIn: (state, action) => ({
      ...state,
      isShowSignIn: action.payload,
    }),
  },
});
export const { setIsShowSignUp } = AuthenSlice.actions;
export default AuthenSlice.reducer;
