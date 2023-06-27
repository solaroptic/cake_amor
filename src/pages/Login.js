import styles from "../pagesCSS/Login.module.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navTomenu = () => {
    navigate("/menu", { replace: true });
    console.log("navigating...");
  };

  return (
    <div className={styles.loginPageContainer}>
      <SignIn navigate={navTomenu} />
      <SignUp navigate={navTomenu} />
    </div>
  );
};

export default Login;
