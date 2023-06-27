import { createContext, useEffect, useState } from "react";
import {
  authChangeListener,
  createDocFromAuth,
  signOutUser,
} from "../firebaseConfig";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authChangeListener((user) => {
      if (user) {
        createDocFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
