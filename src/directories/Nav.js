import styles from "../directoriesCSS/Nav.module.css";
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUserAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { IoLogInSharp } from "react-icons/io5";
import CartDropDown from "../components/CartDropDown";
import { UserContext } from "../utility/context/userContext";
import { signOutUser } from "../utility/firebaseConfig";
import { toggleCart } from "../utility/store";
import { useDispatch, useSelector } from "react-redux";
import { MenuContext } from "../utility/context/menuContext";
import NavResponse from "../components/NavResponse";
// import { CartContext } from "../utility/context/cartContext";

const Nav = () => {
  const { setSelection } = useContext(MenuContext);
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useContext(UserContext);
  const access = currentUser === null ? "cat" : currentUser.email;
  const granted = "ken@gmail.com";

  const cartCount = useSelector((state) => {
    // console.log(state.cart.cartCount);
    return state.cart.cartCount;
  });
  const cartState = useSelector((state) => {
    // console.log(state.cart.isCartOpen);
    return state.cart.isCartOpen;
  });
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(toggleCart());
  };
  const navActionHandler = () => {
    setToggle(!toggle);
    setSelection(null);
  };

  return (
    <>
      <div className={styles.navBack}>
        <NavResponse
          toggle={toggle}
          setToggle={setToggle}
          navActionHandler={navActionHandler}
        />
        <section className={styles.navContainer1}>
          <span className={styles.hiddenMenuBtn} onClick={navActionHandler}>
            <ImMenu />
          </span>
          <Link to="/" className={styles.logo}>
            <img alt="cake logo" src={require(`../assets/cakeLogoMock.png`)} />
          </Link>
          <Link
            className={styles.linkHide}
            to="/menu"
            onClick={() => setSelection(null)}
          >
            <span>
              <ImMenu />
            </span>
            Menu
          </Link>
          <Link className={styles.linkHide} to="/custom">
            <span>
              <MdCake />
            </span>
            Custom Cakes
          </Link>
          <Link className={styles.linkHide} to="/keto">
            <span>
              <FaHeart />
            </span>
            Keto
          </Link>
          {currentUser && (
            <span className={styles.user}>
              <span>
                <FaUserAlt />
              </span>
              {currentUser.email}
            </span>
          )}
          {access === "cat" && (
            <span className={styles.user}>
              <span>
                <FaUserAlt />
              </span>
              Guest
            </span>
          )}
        </section>
        <section className={styles.navContainer2}>
          {currentUser ? (
            <span className={styles.signOut} onClick={signOutUser}>
              <IoLogInSharp />
              Sign-out
            </span>
          ) : (
            <Link to="/login" className={styles.login}>
              <span>
                <IoLogInSharp />
              </span>
              Login/Sign-Up
            </Link>
          )}
          {access !== granted && (
            <a href="tel:+1-254-640-1456">
              <span>
                <HiPhoneArrowUpRight />{" "}
              </span>
              Call Us
            </a>
          )}
          {access === granted && (
            <Link to="/orders">
              <span>
                <MdCake />
              </span>
              Orders
            </Link>
          )}
          <span onClick={showCart} className={styles.cartContainer}>
            <FaShoppingCart className={styles.cart}></FaShoppingCart>
            <span className={styles.cartCount}>{cartCount}</span>
          </span>
        </section>
      </div>
      {cartState && <CartDropDown />}
      <Outlet />
    </>
  );
};

export default Nav;
