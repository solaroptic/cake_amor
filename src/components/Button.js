import styles from "../componentsCSS/Button.module.css";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <button className={styles.flashBtn} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
