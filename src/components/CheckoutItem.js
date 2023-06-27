import styles from "../componentsCSS/CheckoutItem.module.css";
import {
  addToCart,
  removeFromCart,
  deleteCartItem,
  deleteWholeCart,
} from "../utility/store";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  // const { addCartItem, removeItemFromCart, deleteCartItem } =
  //   useContext(CartContext);
  const dispatch = useDispatch();

  const deleteItemHandler = () => dispatch(deleteCartItem(cartItem));
  const subtractItemHandler = () => dispatch(removeFromCart(cartItem));
  const addItemHandler = () => dispatch(addToCart(cartItem));

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={require(`../assets/items/${imageUrl}`)} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={subtractItemHandler}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>${price}</span>
      <div className={styles.removeBtn} onClick={deleteItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
