import { PURGE } from "redux-persist";

const { createSlice, createEntityAdapter } = require("@reduxjs/toolkit");
const customEntityAdapter = createEntityAdapter({
  user: null,
  isFetching: false,
  error: false,
});
const userSlice = createSlice({
  name: "user",
  initialState: customEntityAdapter.getInitialState(),
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
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export const { userStart, userSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
