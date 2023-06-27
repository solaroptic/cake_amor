import styles from "../directoriesCSS/Orders.module.css";
import { useFetchOrdersQuery } from "../utility/store";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  const { data, error, isLoading } = useFetchOrdersQuery();

  return (
    <div className={styles.orderPageContainer}>
      <h1>Orders</h1>
      <div className={styles.orderBox}>
        {data &&
          data.map((each) => {
            return <OrderItem key={each.title} userOrder={each} />;
          })}
      </div>
    </div>
  );
};

export default Orders;
