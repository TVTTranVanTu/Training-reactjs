import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "none",
      color: "rgb(250,250,250)",
    },
    dark: {
      background: "rgb(240, 240, 240)",
      color: "#000",
    },
  });

  const themeContextData = { theme };

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
