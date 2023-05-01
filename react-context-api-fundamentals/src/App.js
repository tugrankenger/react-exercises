import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Profile from './components/Profile';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <UserProvider>
          <Header />
          <Button />
          <Profile />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
