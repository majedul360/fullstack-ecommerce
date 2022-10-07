const { createSlice } = require("@reduxjs/toolkit");

const registerUserSlice = createSlice({
  name: "registerUser",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerUserSlice.actions;
export default registerUserSlice.reducer;
