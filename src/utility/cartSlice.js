import { createSlice } from "@reduxjs/toolkit";

// //////////////////
const incrementCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};
// //////////////////
const subtractCartItems = (cartItems, item) => {
  if (item.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
        : cartItem
    );
  } else {
    return cartItems.filter((each) => each.id !== item.id);
  }
};

const killCartItem = (cartItems, item) => {
  return cartItems.filter((each) => each.id !== item.id);
};
const CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_STATE,
  reducers: {
    addToCart(state, action) {
      state.cartItems = incrementCart(state.cartItems, action.payload);
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    },
    removeFromCart(state, action) {
      state.cartItems = subtractCartItems(state.cartItems, action.payload);
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    },
    deleteCartItem(state, action) {
      state.cartItems = killCartItem(state.cartItems, action.payload);
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    },
    deleteWholeCart(state) {
      state.cartItems = state.cartItems.splice(0, Infinity);
      state.cartCount = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteCartItem,
  deleteWholeCart,
  toggleCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
