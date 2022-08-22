import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebases/Firebase-config";

export const fetchDataUser = createAsyncThunk("user", async () => {
  const response = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
  return response;
});

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
export const { setIsShowSignUp, setIsShowSignIn } = AuthenSlice.actions;
export default AuthenSlice.reducer;
