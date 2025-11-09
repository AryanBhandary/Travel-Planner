import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

// ✅ TypeScript interface for city
interface City {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  bucketListCount: number;
  bestTimeToVisit: string;
}

function AllCities() {
  const [citiesData, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cities');
        setCities(res.data);
        console.log("Cities fetched:", res.data);
      } catch (err: any) {
  if (err.response) {
    // Server responded with a status outside 2xx
    console.error('Server responded with error:', err.response.status, err.response.data);
  } else if (err.request) {
    // Request was made but no response
    console.error('No response received:', err.request);
  } else {
    // Other errors
    console.error('Error setting up request:', err.message);
  }
}
    };
    fetchCities();
  }, []);

  return (
    <div className="city">
      {citiesData.length === 0 && (
        <p>Loading cities or no cities found.</p> // ✅ Fallback message
      )}

      {citiesData.map((city) => (
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
              {city.highlights?.slice(0, 2).map((highlight, index) => (
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

export default AllCities;
