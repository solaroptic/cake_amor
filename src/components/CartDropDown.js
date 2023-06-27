import CartDropDownItem from "./CartDropDownItem";
import styles from "../componentsCSS/CartDropDown.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../utility/cartSlice";
// import { useContext } from "react";
// import { CartContext } from "../utility/context/cartContext";

const CartDropDown = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const checkoutHandler = () => {
    dispatch(toggleCart());
    navigate("/checkout");
  };

  // const { cartItems, cartTotal } = useContext(CartContext);
  const cakeList = useSelector((state) => {
    // console.log(state.cart.cartItems);
    return state.cart.cartItems;
  });
  const total = useSelector((state) => {
    // console.log(state.cart.cartTotal);
    return state.cart.cartTotal;
  });

  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cakeList.length ? (
          cakeList.map((item) => (
            <CartDropDownItem key={item.name} cartItemData={item} />
          ))
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty...</span>
        )}
      </div>
      <div style={{ textAlign: "end", padding: 10 }}>Total: ${total}</div>
      <button onClick={checkoutHandler}>CHECKOUT</button>
    </div>
  );
};

export default CartDropDown;
