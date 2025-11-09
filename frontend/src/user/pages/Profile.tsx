import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import '../style/Profile.css'; // External CSS

interface User {
  name: string;
  email: string;
  role: string;
  number: string;
}

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    console.log("User from localStorage:", parsedUser);
    setUser(parsedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear stored user data and token
    navigate('/login');                // Redirect to login page
  };

  return (
    <>
      <Nav /> <br />
      <div className="profile-container">
        <div className="profile-card">
          <h2>👤 My Profile</h2>
          {user ? (
            <div className="profile-info">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Number:</strong> {user.number || 'N/A'}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
          <a className="div-logout" onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </>
  );
}

export default Profile;
