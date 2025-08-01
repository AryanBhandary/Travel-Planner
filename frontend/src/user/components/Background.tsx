import { FaBuilding, FaMapMarkedAlt, FaUtensils } from "react-icons/fa";
import "../style/Background.css"
import { useNavigate } from "react-router-dom";

function Background(){
    const navigate = useNavigate();
    return(
        <>
            <div className="back-section">
                <div className="image-text">
                    <h3>Explore Nepal</h3>
                    <h1>Discover the<br></br>Heart of Nepal</h1><br />
                    <p>From the bustling streets of Kathmandu to the serene lakes <br></br>
                        of Pokhara, explore the diverse cities that showcase Nepal's rich <br></br>
                        culture and breathtaking landscapes.</p>
                        <button className="explore-btn" onClick={() => navigate("/cities")}>Explore</button>

                    <div className="info-row">
                        <div className="info-box">
                            <span><FaBuilding size={30} /></span>
                            <span>9+</span>
                            <span>Featured Cities</span>
                        </div>
                        <div className="info-box">
                            <span><FaMapMarkedAlt size={30} /></span>
                            <span>50+</span>
                            <span>Attractions</span>
                        </div>
                        <div className="info-box">
                            <span><FaUtensils size={30} /></span>
                            <span>100+</span>
                            <span>Local Cuisine</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background