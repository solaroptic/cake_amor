import { useRemoveOrderMutation } from "../utility/orderSlice";
import styles from "../directoriesCSS/Orders.module.css";
import { useState } from "react";

const OrderItem = ({ userOrder }) => {
  const [status, setStatus] = useState("");
  const [removeOrder, result] = useRemoveOrderMutation();

  const handleDelete = async () => {
    await removeOrder(userOrder);
    console.log(result);
  };

  return (
    <>
      {result.isLoading && <div>CATS!</div>}
      {!result.isLoading && (
        <div className={styles.orderItemContainer}>
          <section className={styles.sectionInfo}>
            <div className={styles.cardTop}>
              <h3>{userOrder.title}</h3>
              <h3>{userOrder.pickUp}</h3>
            </div>
            <div className={styles.cakeDetails}>
              <p>{userOrder.cakeFlavor}</p>
              <p>{userOrder.icing}</p>
              <p>{userOrder.cakeSize}</p>
            </div>
            <div className={styles.notes}>
              <p>{userOrder.cakeNotes}</p>
            </div>
            <div className={styles.contact}>
              <p>{userOrder.phone}</p>
              <p>{userOrder.userOnFile}</p>
            </div>
          </section>
          <section
            className={`${styles.sectionAction} ${
              status === "issue" && styles.sectionActionIssue
            } ${status === "ready" && styles.sectionActionReady}`}
          >
            <div onClick={() => setStatus("ready")}>Ready</div>
            <div onClick={() => setStatus("issue")}>Issue</div>
            <div onClick={handleDelete}>Clear</div>
          </section>
        </div>
      )}
    </>
  );
};

export default OrderItem;
