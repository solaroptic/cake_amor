import styles from "../pagesCSS/Custom.module.css";
import CakeOrderForm from "../components/CakeOrderForm";

const Custom = () => {
  return (
    <div className={styles.customBack}>
      <CakeOrderForm />
    </div>
  );
};

export default Custom;
