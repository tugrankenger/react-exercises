import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

// useContext ve ThemeContext import ederek ThemeContext.Provider ile sarmaladigimiz butun component'larda data'ya erisebiliriz.

function Button() {
  const data = useContext(ThemeContext);
  console.log(data);
  return <div>Button: {data}</div>;
}

export default Button;
