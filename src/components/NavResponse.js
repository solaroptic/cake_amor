import styles from "../directoriesCSS/Nav.module.css";
import { Link } from "react-router-dom";
import { RiQuestionAnswerFill, RiQuestionnaireFill } from "react-icons/ri";
import { FaHeart, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { ImMenu } from "react-icons/im";

const NavResponse = ({ toggle, navActionHandler }) => {
  return (
    <section
      className={`${styles.responsiveNav} ${toggle && styles.navAction} ${
        !toggle && styles.navClose
      }`}
    >
      <div className={styles.escape} onClick={navActionHandler}>
        <FaArrowLeft />
      </div>
      <Link to="/menu" onClick={navActionHandler}>
        <span>
          <ImMenu />
        </span>
        Menu
      </Link>
      <Link to="/custom" onClick={navActionHandler}>
        <span>
          <MdCake />
        </span>
        Custom Cakes
      </Link>
      <Link to="/keto" onClick={navActionHandler}>
        <span>
          <FaHeart />
        </span>
        Keto
      </Link>
      <Link to="/about" onClick={navActionHandler}>
        <span>
          <RiQuestionnaireFill />
        </span>
        About
      </Link>
      <Link to="/contact" onClick={navActionHandler}>
        <span>
          <FaMapMarkerAlt />
        </span>
        Find Us
      </Link>
      <Link to="/contact" onClick={navActionHandler}>
        <span>
          <RiQuestionAnswerFill />
        </span>
        Contact
      </Link>
    </section>
  );
};

export default NavResponse;
