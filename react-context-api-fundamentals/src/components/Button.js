import {useTheme} from '../context/ThemeContext';

// useContext ve ThemeContext import ederek ThemeContext.Provider ile sarmaladigimiz butun component'larda data'ya erisebiliriz.

function Button() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      Theme: {theme} <br />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
      <hr />
    </div>
  );
}

export default Button;
