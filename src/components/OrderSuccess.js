import styles from "../componentsCSS/CreditCardForm.module.css";

const OrderSuccess = () => {
  return (
    <div className={styles.orderSuccess}>
      <h1>Order Success!</h1>
      <h1>Thanks for shopping!</h1>
    </div>
  );
};

export default OrderSuccess;
