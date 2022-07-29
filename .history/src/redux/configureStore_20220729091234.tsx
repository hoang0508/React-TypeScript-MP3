import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MusicSlice from "./MusicSlice";

const reducer = combineReducers({
  music: MusicSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
