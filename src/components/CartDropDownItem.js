import styles from "../componentsCSS/CartDropDownItem.module.css";

const CartDropDownItem = ({ cartItemData }) => {
  const { name, imageUrl, price, quantity } = cartItemData;
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.thumbnail}
        src={require(`../assets/items/${imageUrl}`)}
        alt={`${name}`}
      />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartDropDownItem;
