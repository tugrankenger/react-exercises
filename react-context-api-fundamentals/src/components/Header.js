import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={()=>setTheme(theme === 'dark' ? 'light': 'dark')}>Cahnge Theme</button>
    </div>
  );
}

export default Header;
