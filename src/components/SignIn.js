import styles from "../pagesCSS/Login.module.css";
// Login used for CSS
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../utility/firebaseConfig";
import Button from "./Button";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = ({ navigate }) => {
  const [fields, setFields] = useState(defaultFields);
  const { email, password } = fields;

  // useContext for User
  // const { setCurrentUser } = useContext(UserContext);/////replaced with onauthlistener

  //form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };
  const resetFields = () => {
    setFields(defaultFields);
  };

  // google
  const googleSignIn = async () => {
    await signInWithGooglePopup();
    navigate();
    // ////////////////////////////////////////////replaced with listener/////////////////////
    // setCurrentUser(user);///////////////////////replaced with listener/////////////////////
    // ////////////////////////////////////////////replaced with listener/////////////////////
    // await createDocFromAuth(user);
  };

  // const { setCurrentUser } = useContext(UserContext);

  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopup();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      // console.log(user);
      // ////////////////////////////////////////////replaced with listener/////////////////////
      // setCurrentUser(user);///////////////////////replaced with listener/////////////////////
      // ////////////////////////////////////////////replaced with listener/////////////////////
      resetFields();
      navigate();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Username or Password!");
      } else if (error.code === "auth/user-not-found") {
        alert("no user associated with this email");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.signInContainer}>
      <h1>Have an account?</h1>
      <h2>Sign in with your e-mail and password</h2>
      <form onSubmit={handleSubmit}>
        <input
          label="Email"
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
          placeholder="Bob@gmail.com"
        />
        <input
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
          placeholder="password"
        />
        <Button type="submit">Sign In</Button>
        {/* if type is not "button", it will try to submit all in form */}
      </form>
      <h2>Or sign in with Google</h2>
      <button type="button" className={styles.gBtn} onClick={googleSignIn}>
        <span>
          <img
            className={styles.gLogo}
            src={require(`../assets/google.png`)}
            alt="google logo"
          />
        </span>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
