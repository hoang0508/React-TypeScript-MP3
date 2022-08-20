import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthenSlice from "./AuthenSlice";
import MusicSlice from "./MusicSlice";

const reducer = combineReducers({
  music: MusicSlice,
  authen: AuthenSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
