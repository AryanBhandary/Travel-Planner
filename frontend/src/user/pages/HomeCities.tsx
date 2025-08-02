import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style/HomeCities.css";

interface City {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  bucketListCount: number;
  highlights: string[];
  bestTimeToVisit: string;
}

function Home() {
  const [randomCities, setRandomCities] = useState<City[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities")
      .then(res => {
        const allCities: City[] = res.data;
        // Shuffle and pick 8 random cities
        const shuffled = [...allCities].sort(() => Math.random() - 0.5);
        setRandomCities(shuffled.slice(0, 8));
      })
      .catch(err => console.error("Failed to fetch cities:", err));
  }, []);

  return (
    <div className="city">
      {randomCities.map(city => (
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
