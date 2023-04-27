import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#333333';
      document.body.style.color = '#efefef';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#000000';
    }
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
