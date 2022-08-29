import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebases/Firebase-config";

// fetch user info
export const fetchDataUser: any = createAsyncThunk("user", async () => {
  const response = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
  return response;
});

// logout authen
export const SignOutUser: any = createAsyncThunk(
  "signout",
  async (payload: any) => {
    signOut(payload)
      .then(() => {
        // Sign-out successful.
        toast.success("Đăng xuất tài khoản thành công!!");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Đăng xuất tài khoản thất bại!!");
      });
  }
);

const AuthenSlice = createSlice({
  name: "authen",
  initialState: {
    isShowSignUp: false,
    isShowSignIn: false,
    userInfo: {},
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
  extraReducers: (builder) => {
    builder.addCase(fetchDataUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(SignOutUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});
export const { setIsShowSignUp, setIsShowSignIn } = AuthenSlice.actions;
export default AuthenSlice.reducer;
