import styles from "../componentsCSS/Footer.module.css";
import { Link } from "react-router-dom";
import { WiTime3 } from "react-icons/wi";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import {
  RiQuestionAnswerFill,
  RiQuestionnaireFill,
  RiFilePaperFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBack1}>
        <aside>
          <span className={styles.clock}>
            <WiTime3 />
          </span>
          <span>Mon-Fri: 10:00AM–6:00PM</span>
        </aside>
        <aside>
          <span className={styles.clock}>
            <WiTime3 />
          </span>
          <span>Sat: 9:00AM–4:00PM</span>
        </aside>
      </div>
      <div className={styles.footerBack2}>
        <div className={styles.footerLinkContainer}>
          <Link className={styles.footerLinks} to="/about">
            <span>
              <RiQuestionnaireFill />
            </span>
            About
          </Link>
          <Link className={styles.footerLinks} to="/contact">
            <span>
              <FaMapMarkerAlt />
            </span>
            Find Us
          </Link>
          <Link className={styles.footerLinks} to="/contact">
            <span>
              <RiQuestionAnswerFill />
            </span>
            Contact
          </Link>

          <Link className={styles.footerLinks} to="/terms">
            <span>
              <RiFilePaperFill />
            </span>
            Terms of Service
          </Link>
          <Link className={styles.footerLinks} to="/privacy">
            <span>
              <FaSearch />
            </span>
            Privacy Policy
          </Link>
        </div>

        <div className={styles.footerLinkContainerAlt}>
          <Link className={styles.footerLinks} to="/terms">
            <span>
              <RiFilePaperFill />
            </span>
            Terms of Service
          </Link>
          <Link className={styles.footerLinks} to="/privacy">
            <span>
              <FaSearch />
            </span>
            Privacy Policy
          </Link>
        </div>

        <div className={styles.socialContainer}>
          <Link className={styles.footerLinks} to="https://www.facebook.com/">
            <FaFacebookSquare />
          </Link>
          <Link className={styles.footerLinks} to="https://twitter.com/">
            <FaTwitter />
          </Link>
          <Link className={styles.footerLinks} to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
