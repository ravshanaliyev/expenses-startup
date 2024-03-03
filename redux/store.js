import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState().data.data));
});
