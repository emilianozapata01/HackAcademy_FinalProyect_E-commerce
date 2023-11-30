import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      const products = action.payload;
      return products;
    },
  },
});
const { actions, reducer } = productsSlice;
export const { setProducts } = actions;
export default reducer;
