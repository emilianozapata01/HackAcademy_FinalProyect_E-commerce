import { createSlice } from "@reduxjs/toolkit";

const buyerSlice = createSlice({
  name: "buyer",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
  },
});

const { reducer, actions } = buyerSlice;
export const { login, logout } = actions;
export default reducer;
