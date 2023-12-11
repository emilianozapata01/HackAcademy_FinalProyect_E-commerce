import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], subtotal: 0, cartItemCount: 0 },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item._id === action.payload.item._id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].qty += action.payload.qty;
        state.items[itemIndex].total =
          state.items[itemIndex].qty * state.items[itemIndex].item.price;
      } else {
        state.items.push(action.payload);
      }

      recalculateCart(state);
    },
    removeOfCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.item._id === action.payload.item._id
      );
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }

      recalculateCart(state);
    },
  },
});

const recalculateCart = (state) => {
  state.subtotal = 0;
  state.cartItemCount = 0;

  for (const item of state.items) {
    state.subtotal += item.total;
    state.cartItemCount += item.qty;
  }
};

const { actions, reducer } = cartSlice;
export const { addToCart, removeOfCart } = actions;
export default reducer;
