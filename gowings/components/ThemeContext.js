import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: '#000000', 
    backgroundColor: '#ffffff',
  });

  const updateTextColor = (color) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      textColor: color,
    }));
  };

  const updateBackgroundColor = (color) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      backgroundColor: color,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTextColor, updateBackgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};


