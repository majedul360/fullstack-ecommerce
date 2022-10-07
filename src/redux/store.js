import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import registerUserRedux from "./registerUserRedux";
export default configureStore({
  reducer: {
    cart: cartReducer,
    registerUser: registerUserRedux,
  },
});
