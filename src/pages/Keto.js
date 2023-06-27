// import SHOP_DATA from "../utility/shop-data";
import { useFetchInventoryQuery } from "../utility/inventorySlice";
import styles from "../pagesCSS/Keto.module.css";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../utility/store";

const Keto = () => {
  const { data, error, isLoading } = useFetchInventoryQuery();
  const dispatch = useDispatch();

  const addCartItem = (each) => {
    dispatch(addToCart(each));
  };
  // console.log(data);
  // console.log(SHOP_DATA);

  const ketoArr =
    data === undefined ? "cat" : data.filter((each) => each.title === "keto");
  // console.log(cookieArr[0].items);
  const ketoMap = data === undefined ? "cat" : ketoArr[0].items;

  return (
    <div className={styles.ketoBack}>
      <h2>Low Carb Treats with Taste!</h2>
      <div className={styles.ketoGrid}>
        {data &&
          ketoMap.map((each) => {
            return (
              <div key={each.id} className={styles.ketoCard}>
                <div className={styles.name}>{each.name}</div>
                <img
                  className={styles.ketoImage}
                  alt={each.name}
                  src={require(`../assets/items/${each.imageUrl}`)}
                />
                <div className={styles.description}>{each.description}</div>
                <section className={styles.priceAndBtn}>
                  <div className={styles.ketoPrice}>${each.price}</div>
                  <FaPlus
                    className={styles.plus}
                    onClick={() => addCartItem(each)}
                  />
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Keto;
