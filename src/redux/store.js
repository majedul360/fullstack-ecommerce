import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userRedux";
import productSlice from "./productRedux";
export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});
