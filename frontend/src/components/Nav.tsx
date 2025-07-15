import "../style/Nav.css"
import { FaHome, FaCity, FaBook, FaUser, FaMountain } from "react-icons/fa";
function Nav(){
    return(
        <>
            <nav className="navbar">
                <div>
                    <h1><FaMountain /> Explore Nepal</h1>
                </div>
                <div>
                <ul className="nav-links">
                    <li><a href="/" className="nav-link"><FaHome /> Home</a></li>
                    <li><a href="/cities" className="nav-link"><FaCity /> Cities</a></li>
                    <li><a href="/bookings" className="nav-link"><FaBook /> My Bookings</a></li>
                    <li><a href="/profile" className="nav-link"><FaUser /> Profile</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav