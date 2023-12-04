import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import cart from "./cartSlice";
import buyer from "./buyerSlice";
const store = configureStore({
  reducer: {
    products,
    cart,
    buyer,
  },
});

export default store;
