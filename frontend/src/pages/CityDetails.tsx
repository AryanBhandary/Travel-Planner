import { useParams } from "react-router-dom";
import citiesData from "../data/CitiesData";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../style/CityDetails.css"; // New optional CSS file

function CityDetails() {
  const { id } = useParams();
  const city = citiesData.find((city) => city.id === id);

  if (!city) return <p className="not-found">City not found</p>;

  return (
    <>
    <div className="city-detail-nav">
      <Nav /> <br /> <br />
    </div>
      <div className="city-detail-container">
        <h1 className="city-title">{city.name}</h1>
        <img className="city-banner" src={city.image} alt={city.name} />

        <div className="city-section">
          <p className="description">{city.fullDescription}</p>

          <div className="info-block">
            <h3>🌟 Highlights</h3>
            <ul>
              {city.highlights.map((h, i) => <li key={i}>✅ {h}</li>)}
            </ul>
          </div>

          <div className="info-block">
            <h3>🏞️ Top Attractions</h3>
            <ul>
              {city.attractions.map((a, i) => <li key={i}>📍 {a}</li>)}
            </ul>
          </div>

          <div className="info-block">
            <h3>🍽️ Local Cuisine</h3>
            <ul>
              {city.localCuisine.map((c, i) => <li key={i}>🍴 {c}</li>)}
            </ul>
          </div>

          <div className="extra-info">
            <p><strong>🗓️ Best Time to Visit:</strong> {city.bestTimeToVisit}</p>
            <p><strong>🌡️ Avg. Temperature:</strong> {city.averageTemperature}</p>
            <p><strong>⛰️ Altitude:</strong> {city.altitude}</p>
            <p><strong>💾 Saved by:</strong> {city.bucketListCount} travelers</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CityDetails;
