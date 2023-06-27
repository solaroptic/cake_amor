import styles from "../pagesCSS/MenuSelection.module.css";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
// import SHOP_DATA from "../utility/shop-data";
import { addToCart } from "../utility/store";
// import { CartContext } from "../utility/context/cartContext";

const MenuSelection = ({ categoryArr }) => {
  // const { data, error, isLoading } = useFetchInventoryQuery();

  // const { addCartItem } = useContext(CartContext);
  const dispatch = useDispatch();

  const addCartItem = (each) => {
    dispatch(addToCart(each));
  };

  return (
    <div className={styles.menuItemContainer}>
      {categoryArr.map((each) => {
        return (
          <div key={each.id} className={styles.itemCard}>
            <div className={styles.name}>{each.name}</div>
            <img
              className={styles.image}
              alt={each.name}
              src={require(`../assets/items/${each.imageUrl}`)}
            />
            <div className={styles.description}>{each.description}</div>
            <section className={styles.priceAndBtn}>
              <div className={styles.price}>${each.price}</div>
              <FaPlus
                className={styles.plus}
                onClick={() => addCartItem(each)}
              />
              {/* <button >Add To Cart</button> */}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MenuSelection;
