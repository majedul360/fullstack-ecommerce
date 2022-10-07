const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
    },
    userSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { userStart, userSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
