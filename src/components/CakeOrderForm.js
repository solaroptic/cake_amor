import styles from "../pagesCSS/Custom.module.css";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../utility/context/userContext";
import { useAddNewOrderMutation } from "../utility/orderSlice";
import Button from "./Button";

const CakeOrderForm = () => {
  const { currentUser } = useContext(UserContext);
  const [cakeFlavor, setCakeFlavor] = useState("");
  const [icing, setIcing] = useState("");
  const [cakeSize, setCakeSize] = useState("");
  const [cakeNotes, setCakeNotes] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [email, setEmail] = useState(currentUser ? currentUser.email : "");
  const [phone, setPhone] = useState("");

  const [addOrder, results] = useAddNewOrderMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userOnFile = currentUser.email;
    const title =
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0") +
      "_" +
      email;
    const cakeOrder = {
      cakeFlavor,
      icing,
      cakeSize,
      cakeNotes,
      pickUp,
      email,
      userOnFile,
      phone,
      title,
    };
    console.log(cakeOrder);
    await addOrder(cakeOrder);
    clear();
    // onSubmit(cakeOrder);
  };

  const clear = () => {
    setCakeFlavor("");
    setIcing("");
    setCakeSize("");
    setCakeNotes("");
    setPickUp("");
    setEmail(currentUser ? currentUser.email : "");
    setPhone("");
  };

  return (
    <>
      <div className={styles.cakeFormContainer}>
        <h1>Order a Custom Cake!</h1>
        <h2>...or Cupcakes!</h2>
        <form className={styles.customForm} onSubmit={handleSubmit}>
          <div className={styles.insideForm}>
            <div className={styles.flavorContainer}>
              <label htmlFor="cakeFlavor">Cake Flavor</label>
              <select
                id="cakeFlavor"
                value={cakeFlavor}
                onChange={(e) => setCakeFlavor(e.target.value)}
                required
              >
                <option value="blank">Select One</option>
                <option value="classic">Classic</option>
                <option value="vanilla">Vanilla</option>
                <option value="strawberry">Strawberry</option>
                <option value="chocolate">Chocolate</option>
              </select>
            </div>
          </div>
          <div>
            <div className={styles.flavorContainer}>
              <label htmlFor="icing">Icing</label>
              <select
                id="icing"
                value={icing}
                onChange={(e) => setIcing(e.target.value)}
                required
              >
                <option value="blank">Select One</option>
                <option value="buttercreme">Buttercreme</option>
                <option value="elite">Elite</option>
              </select>
            </div>
          </div>
          <div className={styles.insideForm}>
            <div className={styles.flavorContainer}>
              <label htmlFor="cakeSize">Cake Size</label>
              <select
                id="cakeSize"
                value={cakeSize}
                onChange={(e) => setCakeSize(e.target.value)}
                required
              >
                <option value="blank">Select One</option>
                <option value="small">Small - $25</option>
                <option value="medium">Medium - $35</option>
                <option value="large">Large - $45</option>
              </select>
            </div>
            <aside>Cupcakes: small = 12, medium = 18, large = 24.</aside>
            <aside className={styles.space}>Email for larger quantities.</aside>
          </div>
          <div className={styles.cakeNotes}>
            <label htmlFor="cakeNotes">Cake/Cupcake Notes</label>
            <textarea
              id="cakeNotes"
              rows="4"
              value={cakeNotes}
              onChange={(e) => setCakeNotes(e.target.value)}
            />
          </div>
          <div className={styles.contactContainer}>
            <label htmlFor="pickUpDate">Pick-up Date</label>
            <input
              id="pickUp"
              type="date"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              required
            />
          </div>
          <div className={styles.contactContainer}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.contactContainer}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default CakeOrderForm;
