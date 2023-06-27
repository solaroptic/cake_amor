import React, { useState } from "react";
import styles from "../componentsCSS/CreditCardForm.module.css";
import Button from "./Button";
// import { StripeCheckout } from "react-stripe-checkout";

const cardDefault = {
  number: "",
  name: "",
  cvv: "",
  expDate: "",
};

const CreditCardForm = ({ amount, success }) => {
  const [card, setCard] = useState(cardDefault);
  const { number, name, cvv, expDate } = card;

  const [currency, setCurrency] = useState("usd");
  const tax1 = Number(amount) * 0.0825;
  const tax2 = Number(tax1.toFixed(2));
  const finalTotal1 = Number(amount) + tax2;
  const finalTotal2 = finalTotal1.toFixed(2);

  const handleChange = (e) => {
    const { reference, value } = e.target;
    setCard({ ...card, [reference]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const token = await StripeCheckout.create({
    //   key: "YOUR_STRIPE_KEY",
    //   amount,
    //   currency,
    //   // Optional
    //   shippingAddress: true,
    //   billingAddress: true,
    // });
    console.log(name, number, expDate, cvv, amount);

    // if (token) {
    //   // Submit the token to your backend server
    // }
  };

  return (
    <>
      <div className={styles.creditCardContainer}>
        {/* Table??? */}
        <h3>Payment Method</h3>

        <div className={styles.cardCurrency}>
          <span>
            <img src={require(`../assets/cards.jpg`)} alt={name} />
          </span>
          <p>Currency: {currency}</p>
        </div>
        <div className={styles.amountStack}>
          <p>Order: ${amount}</p>
          <p>Tax: ${tax2}</p>
          <p>
            {" "}
            <b>Order Total: ${finalTotal2}</b>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.creditForm}>
          <div className={styles.bothStacks}>
            <div className={styles.wideStackInfo}>
              <div className={styles.stackInfo}>
                <label>Card Number</label>
                <input
                  type="number"
                  placeholder="5555 5555 5555 5555"
                  onChange={handleChange}
                  reference="number"
                />
              </div>
              <div className={styles.stackInfo}>
                <label>Name on Card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  onChange={handleChange}
                  reference="name"
                />
              </div>
            </div>
            <div className={styles.narrowStackInfo}>
              <div className={styles.stackInfo}>
                <label>Exp Date</label>
                <input
                  type="text"
                  placeholder="01/28"
                  onChange={handleChange}
                  reference="expDate"
                />
              </div>
              <div className={styles.stackInfo}>
                <label>CVV</label>
                <input
                  type="number"
                  placeholder="CVV"
                  onChange={handleChange}
                  reference="cvv"
                />
              </div>
            </div>
          </div>
          <Button type="button" onClick={success}>
            Order
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreditCardForm;
