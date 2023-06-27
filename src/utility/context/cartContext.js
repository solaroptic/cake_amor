// import { createContext, useEffect, useState } from "react";

// const incrementCart = (cartItems, itemToAdd) => {
//   const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
//   // //////////////////
//   if (existingItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === itemToAdd.id
//         ? { ...cartItem, quantity: (cartItem.quantity += 1) }
//         : cartItem
//     );
//   } else {
//     return [...cartItems, { ...itemToAdd, quantity: 1 }];
//   }
// };
// const subtractCartItems = (cartItems, item) => {
//   // //////////////////
//   if (item.quantity > 1) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === item.id
//         ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
//         : cartItem
//     );
//   } else {
//     return cartItems.filter((each) => each.id !== item.id);
//   }
// };

// const killCartItem = (cartItems, item) => {
//   console.log("leopard");
//   return cartItems.filter((each) => each.id !== item.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addCartItem: () => {},
//   removeItemFromCart: () => {},
//   deleteCartItem: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   useEffect(() => {
//     const newCount = cartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     const updateTotal = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );
//     setCartCount(newCount);
//     setCartTotal(updateTotal);
//   }, [cartItems]);

//   const addCartItem = (itemToAdd) => {
//     setCartItems(incrementCart(cartItems, itemToAdd));
//     console.log("cat");
//   };

//   const removeItemFromCart = (itemToRemove) => {
//     setCartItems(subtractCartItems(cartItems, itemToRemove));
//     console.log("dog");
//   };
//   const deleteCartItem = (itemToDelete) => {
//     setCartItems(killCartItem(cartItems, itemToDelete));
//     console.log("mouse");
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addCartItem,
//     cartItems,
//     cartCount,
//     removeItemFromCart,
//     deleteCartItem,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
