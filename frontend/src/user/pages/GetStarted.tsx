import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/GetStarted.css';
import Footer from '../components/Footer';

interface City {
  _id: string;
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
  mapLink: string; // This should be the Google Maps Embed URL (iframe src)
}

function GetStarted() {
  const navigate = useNavigate();
  const [cities, setCities] = useState<City[]>([]);
  const featuresRef = useRef<HTMLDivElement>(null);
  const cityPreviewRef = useRef<HTMLDivElement>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cities')
      .then(res => {
        const cityList: City[] = res.data;
        setCities(cityList);
      })
      .catch(err => console.error(err));
  }, []);

  const topCities = [...cities]
    .sort((a, b) => b.bucketListCount - a.bucketListCount)
    .slice(0, 3);

  useEffect(() => {
    if (topCities.length > 0) {
      setSelectedCityId(topCities[0]._id);
    }
  }, [cities]);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCities = () => {
    cityPreviewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedCity = cities.find(city => city._id === selectedCityId);

  return (
    <div className="getStartedContainer">
      {/* Navbar */}
      <nav className="navbarMain">
        <div className="brandNav" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
          Explore Nepal
        </div>
        <ul className="navLinksMain">
          <li><a href="/login" className="navLinkMain">Login</a></li>
          <li><a href="/register" className="navLinkMain">Register</a></li>
          <li><span className="navLinkMain linkBtn" onClick={scrollToFeatures}>Features</span></li>
          <li><span className="navLinkMain linkBtn" onClick={scrollToCities}>Destinations</span></li>
          <li><a href="/terms" className="navLinkMain">Terms</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="heroSection">
        <div className="heroContentSection">
          <h1>Explore Nepal Like Never Before</h1>
          <p>Your personalized guide to cities, culture, and hidden gems.</p>
          <div className="heroButtonsSection">
            <button onClick={() => navigate('/register')}>Get Started</button>
            <button onClick={scrollToFeatures}>What You Can Do</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="featuresSection" ref={featuresRef}>
        <h2>What You Can Do</h2>
        <div className="featuresListSection">
          <div className="featureCard">
            <h3>🌆 Explore Cities</h3>
            <p>Discover cities and read curated descriptions, highlights, and best time to visit.</p>
          </div>
          <div className="featureCard">
            <h3>📌 Bucket List</h3>
            <p>Add your favorite cities to your travel bucket list.</p>
          </div>
          <div className="featureCard">
            <h3>🗺️ Plan Your Journey</h3>
            <p>Use our destination data to plan routes and timing effectively.</p>
          </div>
        </div>
      </div>

      {/* City Preview Section */}
      <div className="cityPreviewSection" ref={cityPreviewRef}>
        <h2>Top 3 Destinations</h2>

        <div className="cityToggleButtons">
          {topCities.map(city => (
            <button
              key={city._id}
              className={`cityToggleBtn ${selectedCityId === city._id ? 'activeBtn' : ''}`}
              onClick={() => setSelectedCityId(city._id)}
            >
              {city.name}
            </button>
          ))}
        </div>

        {selectedCity && (
          <div className="cityCardSimple">
            {/* LEFT SIDE (Image) */}
            <div className="cityCardLeft">
              <img src={selectedCity.image} alt={selectedCity.name} className="cityImage" />
            </div>

            {/* RIGHT SIDE (Info) */}
            <div className="cityCardRight">
              <div>
                <h3 className="cityName">{selectedCity.name}</h3>
                <p className="popularity">
                  <strong>Popularity:</strong> {selectedCity.bucketListCount} travelers added this city
                </p>
                <p className="shortDesc">{selectedCity.shortDescription}</p>

                <div className="keyInfo">
                  <div className="infoSection">
                    <h4>Highlights</h4>
                    <ul className="highlightsList">
                      {selectedCity.highlights.slice(0, 4).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul> <br />
                  </div>

                  <div className="infoSection smallInfo">
                    <div className="subInfo">
                    <p><strong>Best Time to Visit:</strong> {selectedCity.bestTimeToVisit}</p>
                    <p><strong>Avg Temp:</strong> {selectedCity.averageTemperature}</p>
                    <p><strong>Altitude:</strong> {selectedCity.altitude}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAP EMBED + BUTTON */}
              <div className="map-container">
                <button
                  className="map-btn"
                  onClick={() => window.open(selectedCity.mapLink, "_blank")}
                >
                  📍 View on map
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default GetStarted;
