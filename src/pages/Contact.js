import styles from "../pagesCSS/Contact.module.css";
import Leaflet from "../components/Leaflet";
// import Map from "../components/Map";

const Contact = () => {
  return (
    <div className={styles.contactBack}>
      <div className={styles.contactContainer}>
        <Leaflet className={styles.mapper} alt="map" />
        <section>
          <p>Phone: (254) 640-1456</p>
          <p>Email: type2@aol.com </p>
          <p>Address: 504 Lake Air Dr, Waco, TX 76710</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
