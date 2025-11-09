import { useEffect, useState } from "react";
import AddCityForm from "../components/AddCityForm";
import AdminNav from "../components/AdminNav";
import CityList from "../components/CityList";
import "../style/CityManipulation.css";
import axios from "axios";

function CityManipulation() {
  const [showForm, setShowForm] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cities")
      .then(res => {
        setCities(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch cities:", err);
        setLoading(false);
      });
  }, []);
  

  return (
    <div>
      <AdminNav />
      <br /> <br /> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem 2rem",
        }}
      >
        <button className="toggle-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Show City List" : "Add City"}
        </button>
      </div>

      {/* Dynamic Heading */}
      <h2 style={{ padding: "0 2rem" }}>
        {showForm 
          ? "Add a New City" 
          : `List of Cities (${loading ? "Loading..." : cities.length})`}
      </h2>

      {showForm ? (
        <AddCityForm />
      ) : (
        <CityList />
      )}
    </div>
  );
}

export default CityManipulation;
