// import SHOP_DATA from "../utility/shop-data";
import MenuSelection from "../pages/MenuSelection";
import styles from "../directoriesCSS/Menu.module.css";
import { useContext } from "react";
import { useFetchInventoryQuery } from "../utility/inventorySlice";
import { MenuContext } from "../utility/context/menuContext";

const Menu = () => {
  // const [selection, setSelection] = useState(null);
  // import { useContext } from "react";
  // import { CartContext } from "../utility/context/cartContext";
  const { selection, setSelection } = useContext(MenuContext);

  const { data, error, isLoading } = useFetchInventoryQuery();
  // console.log(data);

  const handleSelection = (title) => {
    // console.log(data);
    const isolatedCategory = data.filter((each) => each.title === title)[0]
      .items;
    setSelection(isolatedCategory);
  };

  // console.log(SHOP_DATA);

  // const cookieArr = SHOP_DATA.filter((each) => each.title === "cookies");
  // console.log(cookieArr[0].items);
  // const cookieMap = cookieArr[0].items;

  return (
    <>
      <div className={styles.menuPageContainer}>
        <h1>Treats on Deck</h1>
        {!selection && (
          <div className={styles.menuContainer}>
            {data &&
              data.map((each) => {
                return (
                  <div
                    key={each.title}
                    className={styles.menuItem}
                    onClick={() => {
                      handleSelection(each.title);
                    }}
                  >
                    <div>
                      <p>{each.title}</p>
                    </div>
                    <img
                      className={styles.menuImg}
                      alt={each.title}
                      src={require(`../assets/items/${each.picture}`)}
                    />
                  </div>
                );
              })}
          </div>
        )}
        {selection && <MenuSelection categoryArr={selection} />}
      </div>
    </>
  );
};

export default Menu;
