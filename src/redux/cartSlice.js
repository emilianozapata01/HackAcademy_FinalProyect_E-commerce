import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
