import { createContext, useState } from "react";

export const MenuContext = createContext({
  selection: null,
  setSelection: () => null,
});
export const MenuProvider = ({ children }) => {
  const [selection, setSelection] = useState(null);
  const value = { selection, setSelection };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
