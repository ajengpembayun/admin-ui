import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
  
      if (next) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
  
      return next;
    });
  };

  return (
    <ModeContext.Provider
      value={{
        darkMode,
        toggleMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};