import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import cart from "./cartSlice";
const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export default store;
