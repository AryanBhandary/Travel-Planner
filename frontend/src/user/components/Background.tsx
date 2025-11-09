import { FaBuilding, FaMapMarkedAlt, FaUtensils } from "react-icons/fa";
import "../style/Background.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface City {
  id: string;
  attractions: string[];
  localCuisine: string[];
  // other fields not needed here
}

function Background() {
  const navigate = useNavigate();

  // State to store cities data
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch cities:", err);
      });
  }, []);

  // Calculate total attractions and total local cuisines (unique count)
  const featuredCitiesCount = cities.length;

  // Flatten arrays and count unique values
  const totalAttractions = Array.from(new Set(cities.flatMap(city => city.attractions))).length;

  const totalLocalCuisine = Array.from(new Set(cities.flatMap(city => city.localCuisine))).length;

  return (
    <>
      <div className="back-section">
        <div className="image-text">
          <h3>Explore Nepal</h3>
          <h1>
            Discover the
            <br />
            Heart of Nepal
          </h1>
          <br />
          <p>
            From the bustling streets of Kathmandu to the serene lakes
            <br />
            of Pokhara, explore the diverse cities that showcase Nepal's rich
            <br />
            culture and breathtaking landscapes.
          </p>
          <button className="explore-btn" onClick={() => navigate("/cities")}>
            Explore
          </button>

          <div className="info-row">
            <div className="info-box">
              <span>
                <FaBuilding size={30} />
              </span>
              <span>{featuredCitiesCount}</span>
              <span>Featured Cities</span>
            </div>
            <div className="info-box">
              <span>
                <FaMapMarkedAlt size={30} />
              </span>
              <span>{totalAttractions}</span>
              <span>Attractions</span>
            </div>
            <div className="info-box">
              <span>
                <FaUtensils size={30} />
              </span>
              <span>{totalLocalCuisine}</span>
              <span>Local Cuisine</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
