const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFatching: false,
    error: false,
  },
  reducers: {
    // get all products
    getProductStart: (state) => {
      state.isFatching = true;
    },
    getProductSuccess: (state, action) => {
      state.isFatching = false;
      state.products = action.payload;
      state.error = false;
    },
    getProductFailure: (state) => {
      state.isFatching = false;
      state.error = false;
    },

    // delete a product
    deleteProductStart: (state) => {
      state.isFatching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.isFatching = false;
      state.products.splice(
        state.products.findIndex((product) => product?._id === action.payload),
        1
      );
      state.error = false;
    },
    deleteProductFailure: (state) => {
      state.isFatching = false;
      state.error = false;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
