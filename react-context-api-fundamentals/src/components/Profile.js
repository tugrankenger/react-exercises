import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
function Profile() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setUser({
        id: 1,
        username: 'tugrankenger',
        bio: 'Protector of seven kingdoms',
      });
      setLoading(false)
    }, 1000);
  };
  const handleLogout= () =>{
    setUser(null)
  }
  return (
    <div>
      <h3>Profile</h3>
      {!user && <button onClick={handleLogin}>Login</button>}
      <br />
      {loading && <p>Loading...</p>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
