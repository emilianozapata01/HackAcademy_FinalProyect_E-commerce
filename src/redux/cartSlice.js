import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.findIndex((item) => item.item._id === action.payload.item._id);
      console.log(itemIndex);
      if (itemIndex != -1) {
        state[itemIndex].qty += qty;
      } else {
        state.push( action.payload )
      }
    }, removeOfCart(state, action) {
      const itemIndex = state.findIndex((item) => item.item._id === action.payload.item._id);
      console.log(itemIndex, action.payload.item._id);
      if (itemIndex != -1) {
        state.splice(itemIndex, 1);
      } 
      return state;
    },
  }
});
const { actions, reducer } = cartSlice;
export const { addToCart, removeOfCart } = actions;
export default reducer;
