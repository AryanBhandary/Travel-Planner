import { useEffect, useState } from "react";
import axios from "axios";
import "../style/CityList.css";

interface City {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  bestTimeToVisit: string;
  averageTemperature: string;
  altitude: string;
}

function CityList() {
  const [cities, setCities] = useState<City[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [cityToDelete, setCityToDelete] = useState<City | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities")
      .then(res => setCities(res.data))
      .catch(err => console.error("Failed to fetch cities:", err));
  }, []);

  const confirmDelete = (city: City) => {
    setCityToDelete(city);
    setShowModal(true);
  };

  const deleteCity = () => {
    if (!cityToDelete) return;
    axios.delete(`http://localhost:5000/api/cities/${cityToDelete.id}`)
      .then(() => {
        setCities(prev => prev.filter(c => c.id !== cityToDelete.id));
        setShowModal(false);
        setSuccessMessage(`"${cityToDelete.name}" was deleted successfully.`);
        setCityToDelete(null);

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch(err => {
        console.error("Failed to delete city:", err);
        alert("Failed to delete city. Try again.");
        setShowModal(false);
      });
  };

  return (
    <>
      {successMessage && (
        <div className="success-banner">
          {successMessage}
          <button className="close-btn" onClick={() => setSuccessMessage("")}>×</button>
        </div>
      )}

      <div className="compact-city-list">
        {cities.map(city => (
          <div key={city.id} className="compact-city-card">
            <img src={city.image} alt={city.name} />
            <div className="compact-info">
              <h3>{city.name}</h3>
              <p>{city.shortDescription}</p>
              <div className="info-line">
                <span><strong>Best:</strong> {city.bestTimeToVisit}</span>
                <span><strong>Temp:</strong> {city.averageTemperature}</span>
                <span><strong>Alt:</strong> {city.altitude}</span>
              </div>
            </div>
            <div className="delete-button-container">
              <button className="delete-button" onClick={() => confirmDelete(city)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && cityToDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete City</h3>
            <p>Are you sure you want to delete <strong>{cityToDelete.name}</strong>?</p>
            <div className="modal-actions">
              <button onClick={deleteCity} className="confirm-delete">Yes, Delete</button>
              <button onClick={() => setShowModal(false)} className="cancel-delete">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CityList;
