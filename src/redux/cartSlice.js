import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], subtotal: 0 },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item._id === action.payload.item._id
      );
      if (itemIndex != -1) {
          state.items[itemIndex].qty += action.payload.qty;  
          state.items[itemIndex].total = state.items[itemIndex].qty*state.items[itemIndex].item.price;
      } else {
        state.items.push(action.payload);
      }
      state.subtotal=0;
      for (const item of state.items){
        state.subtotal+= item.total;
      }
    },
    removeOfCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item._id === action.payload.item._id
      );
      if (itemIndex != -1) {
        state.items.splice(itemIndex, 1);
      }
      state.subtotal=0;
      for (const item of state.items){
        state.subtotal+= item.total;
      }
      return state;
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addToCart, removeOfCart } = actions;
export default reducer;
