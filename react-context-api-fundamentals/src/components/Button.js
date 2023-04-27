import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

// useContext ve ThemeContext import ederek ThemeContext.Provider ile sarmaladigimiz butun component'larda data'ya erisebiliriz.

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Theme: {theme} <br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
