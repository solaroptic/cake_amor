import styles from "../pagesCSS/Checkout.module.css";
import { useState } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { useSelector } from "react-redux";
import CreditCardForm from "../components/CreditCardForm";
import OrderSuccess from "../components/OrderSuccess";
import Button from "../components/Button";
// import { CartContext } from "../utility/context/cartContext";

const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const [pay, setPay] = useState(false);
  const [success, setSuccess] = useState(false);
  const checkoutItems = useSelector((state) => {
    return state.cart.cartItems;
  });
  const total = useSelector((state) => {
    return state.cart.cartTotal;
  });

  return (
    <>
      <div className={styles.checkoutPageContainer}>
        <section className={styles.progressContainer}>
          <div className={styles.progressBoxes}>
            <span>Order</span> <span className={styles.circles}>1</span>
          </div>

          <div className={`${styles.progressBoxes} ${!pay && styles.grey}`}>
            <span>Payment</span> <span className={styles.circles}>2</span>
          </div>

          <div className={`${styles.progressBoxes} ${!success && styles.grey}`}>
            <span>Success</span> <span className={styles.circles}>3</span>
          </div>
        </section>
        {!pay && (
          <section className={styles.checkoutContainer}>
            <div className={styles.checkoutHeader}>
              <div className={styles.headerBlock1}>
                <span>Product</span>
              </div>
              <div className={styles.headerBlock2}>
                <span>Description</span>
              </div>
              <div className={styles.headerBlock3}>
                <span>Quantity</span>
              </div>
              <div className={styles.headerBlock4}>
                <span>Price</span>
              </div>
              <div className={styles.headerBlock5}>
                <span>Remove</span>
              </div>
            </div>
            {checkoutItems.length === 0 && <p>You have no items!</p>}
            {checkoutItems.map((cartItem) => {
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
            <span className={styles.total}>Total: ${total}</span>
            <Button
              style={{ width: "16rem" }}
              type="button"
              onClick={() => setPay(true)}
            >
              Pay by Card
            </Button>
          </section>
        )}
        <section>
          {!success && pay && (
            <CreditCardForm
              className={styles.cardForm}
              amount={total}
              success={() => setSuccess(true)}
            />
          )}
        </section>
        <section>{success && <OrderSuccess />}</section>
      </div>
    </>
  );
};

export default Checkout;
