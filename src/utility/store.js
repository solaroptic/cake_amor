import { configureStore } from "@reduxjs/toolkit";
import {
  cartReducer,
  addToCart,
  removeFromCart,
  deleteCartItem,
  deleteWholeCart,
  toggleCart,
} from "./cartSlice";
import { inventoryApi } from "./inventorySlice";
import { ordersApi } from "./orderSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// const orderSlice = createSlice({
//   name: "orders",
//   initialState: [],
//   reducers: {
//     addOrder(state, action) {
//       state.push(action.payload);
//     },
//     removeOrder(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//   },
// });
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addItem(state, action) {
//       state.push(action.payload);
//     },
//     removeItem(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     },
//     removeAllItems(state) {
//       state.splice(0, Infinity);
//     },
//   },
// });
// const inventorySlice = createSlice({
//   name: "inventory",
//   initialState: [],
//   reducers: {
//     fetchList(state, action) {
//       state.push(action.payload);
//     },
//   },
// });

const store = configureStore({
  reducer: {
    // orders: orderSlice.reducer,
    cart: cartReducer,
    inventory: inventoryApi.reducer,
    orders: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(inventoryApi.middleware)
      .concat(ordersApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  addToCart,
  removeFromCart,
  deleteCartItem,
  deleteWholeCart,
  toggleCart,
};
export { useFetchInventoryQuery } from "./inventorySlice";
export {
  useAddNewOrderMutation,
  useFetchOrdersQuery,
  useRemoveOrderMutation,
} from "./orderSlice";
