import styles from "../pagesCSS/Login.module.css";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createDocFromAuth,
} from "../utility/firebaseConfig";
import Button from "./Button";
// import { UserContext } from "../utility/context/userContext";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ navigate }) => {
  const [fields, setFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = fields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFields = () => {
    setFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Don't Match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);///////////replaced with authListener

      await createDocFromAuth(user, { displayName });
      // userName comes from input fields object OBJECT
      resetFields();
      navigate();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className={styles.signUpContainer}>
      <h1>Don't have an account?</h1>
      <h2>Sign up with your e-mail and password</h2>
      <form onSubmit={handleSubmit}>
        <input
          // was FormInput
          label="Display name"
          placeholder="display name"
          type="text"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          required
        />

        <input
          // was FormInput
          label="Email"
          placeholder="email"
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />
        <input
          // was FormInput
          label="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />
        <input
          // was FormInput
          label="Confirm Password"
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />
        <Button style={{ width: "16rem" }} type="submit">
          Sign Up!
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
