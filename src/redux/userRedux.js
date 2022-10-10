const { createSlice, createEntityAdapter } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFatching: false,
    error: false,
  },
  reducers: {
    userStart: (state) => {
      state.isFatching = true;
    },
    userSuccessful: (state, action) => {
      state.isFatching = false;
      state.user = action.payload;
      state.error = false;
    },
    userFailure: (state) => {
      state.isFatching = false;
      state.error = true;
    },
  },
});

export const { userStart, userSuccessful, userFailure } = userSlice.actions;
export default userSlice.reducer;
