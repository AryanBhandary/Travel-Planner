import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../style/CityDetails.css";

interface City {
  id: string;                     // <-- string here
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  attractions: string[];
  localCuisine: string[];
  bestTimeToVisit: string;
  averageTemperature: string;
  altitude: string;
  bucketListCount: number;
  mapLink: string;
}

function CityDetails() {
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      setError("No city ID provided in URL.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get<City>(`http://localhost:5000/api/cities/${id}`)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          setError("City not found");
        } else {
          setError("Failed to fetch city data");
        }
        setCity(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading city data...</p>;
  if (error) return <p className="not-found">{error}</p>;
  if (!city) return <p className="not-found">City not found</p>;

  return (
    <>
      <div className="city-detail-nav">
        <Nav />
        <br />
        <br />
      </div>

      <div className="city-details-header">
        <div className="city-image">
          <img src={city.image} alt={city.name} />
        </div>
      </div>

      <div className="wrapper">
        <div className="parent">
          <div className="div1 card">
            <h2>{city.name}</h2>
            <p>{city.fullDescription}</p>
          </div>

          <div className="div2 card">
            <h3>Highlights</h3>
            <ul>
              {city.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="div3 card">
            <h3>Attractions</h3>
            <ul>
              {city.attractions.map((place, i) => (
                <li key={i}>{place}</li>
              ))}
            </ul>
          </div>

          <div className="div4 card">
            <h3>Local Cuisine</h3>
            <ul>
              {city.localCuisine.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>

          <div className="div5 card">
            <h3>Travel Info</h3>
            <p>
              <strong>Best Time:</strong> {city.bestTimeToVisit}
            </p>
            <p>
              <strong>Temperature:</strong> {city.averageTemperature}
            </p>
            <p>
              <strong>Altitude:</strong> {city.altitude}
            </p>
            <p>
              <strong>Saved by:</strong> {city.bucketListCount}+ travelers
            </p>
          </div>

          <div className="div6 card cta">
            <h3>Plan Your Visit</h3>
            <button className="book-btn">Add to Wishlist</button>
            <button
              className="book-btn"
              onClick={() => {
                navigate("/bookingForm");
              }}
            >
              Book a Trip
            </button>
          </div>

          <div className="map-container">
            <iframe src={city.mapLink} className="map" title="city-map" />
            <button
              className="map-btn"
              onClick={() => window.open(city.mapLink, "_blank")}
            >
              View on map
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CityDetails;
