import { useNavigate } from 'react-router-dom';
import "../style/Nav.css"
import { FaHome, FaCity, FaBook, FaUser, FaMountain } from "react-icons/fa";
function Nav(){

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');  // Clear stored user data and token
    navigate('/login');                // Redirect to login page
  };
    return(
        <>
            <nav className="navbar">
                <div>
                <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
                    <FaMountain /> Explore Nepal
                </h1>
                </div>
                <div>
                <ul className="nav-links">
                    <li><a href="/home" className="nav-link"><FaHome /> Home</a></li>
                    <li><a href="/cities" className="nav-link"><FaCity /> Cities</a></li>
                    <li><a href="/bookings" className="nav-link"><FaBook /> My Bookings</a></li>
                    <li className="dropdown">
                        <a href="/profile" className="nav-link"><FaUser /> Profile</a>
                            <ul className="dropdown-menu">
                                <li><a href="/profile" className="nav-link">View Profile</a></li>
                                <li><a className="logout" onClick={handleLogout}>Logout</a></li>
                            </ul>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav