import { configureStore } from "@reduxjs/toolkit";
import customMiddleware from "../middlewares";
import word from "../reducers/word";

export const store = configureStore({
  reducer: {
    word,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(customMiddleware),
});
