import Slide from "../components/Slide";
import styles from "../directoriesCSS/Home.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import SHOP_DATA from "../utility/shop-data";

const Home = () => {
  // console.log(SHOP_DATA);

  // const cookieArr = SHOP_DATA.filter((each) => each.title === "cookies");
  // console.log(cookieArr[0].items);
  // const cookieMap = cookieArr[0].items;

  return (
    <>
      <div className={styles.homeBack}>
        <h1>Cake Amor</h1>
        <Slide className={styles.slideShow} />

        <div className={styles.ad}>
          <span>Sign up for exclusive deals!</span>
          <Link to="/login">
            <Button type="button" onClick={() => console.log("cats")}>
              Sign Up
            </Button>
          </Link>
        </div>
        <div className={styles.bubbles}>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 27 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 22 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 25 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 26 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 24 }}></span>
          <span style={{ "--i": 21 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 27 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 23 }}></span>
          <span style={{ "--i": 18 }}></span>
        </div>
      </div>
    </>
  );
};

export default Home;
