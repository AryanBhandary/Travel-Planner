import { useNavigate } from 'react-router-dom';
import '../style/AdminNav.css';
import { FaHome, FaCity, FaBook, FaUser } from 'react-icons/fa';

function AdminNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear stored user data and token
    navigate('/login');                // Redirect to login page
  };

  return(
    <>
            <nav className="navbar">
                <div>
                <ul className="nav-links">
                    <li><a href="/admin" className="nav-link"><FaHome /> Home</a></li>
                    <li><a href="/cityManipulation" className="nav-link"><FaCity /> City Manipulation</a></li>
                    <li><a href="/bookingRequests" className="nav-link"><FaBook /> Booking Requests</a></li>
                    <li className="dropdown">
                        <a href="/adminProfile" className="nav-link"><FaUser /> Profile</a>
                            <ul className="dropdown-menu">
                                <li><a href="/adminProfile" className="nav-link">View Profile</a></li>
                                <li><a className="nav-link" onClick={handleLogout}>Logout</a></li>
                            </ul>
                    </li>
                </ul>
                </div>
            </nav>
        </>
  )
}

export default AdminNav;