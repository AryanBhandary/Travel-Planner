import { Link } from "react-router-dom";
import "../style/HomeCities.css";
import CitiesData from "../data/MajorCitiesData";

function Home() {
  return (
    <div className="city">
      {CitiesData.map((city) => (
        <Link to={`/city/${city.id}`} className="city-card" key={city.id}>
          <div className="image-container">
            <img src={city.image} alt={city.name} />
            <div className="overlay">
              <h3>{city.name}</h3>
              <p>{city.bucketListCount} saves</p>
            </div>
          </div>
          <div className="city-info">
            <p>{city.shortDescription}</p>
            <div className="highlights">
              {city.highlights.slice(0, 2).map((highlight, index) => (
                <span key={index} className="highlight-tag">{highlight}</span>
              ))}
            </div>
            <p>Best time to visit: {city.bestTimeToVisit}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
