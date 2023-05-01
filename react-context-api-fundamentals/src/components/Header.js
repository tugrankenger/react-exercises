import {useTheme} from '../context/ThemeContext';
function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={()=>setTheme(theme === 'dark' ? 'light': 'dark')}>Cahnge Theme</button>
      <hr />
    </div>
  );
}

export default Header;
