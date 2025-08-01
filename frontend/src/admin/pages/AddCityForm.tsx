import { useState } from 'react';
import axios from 'axios';
import "../style/AddCityForm.css";

function AddCityForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    image: '',
    shortDescription: '',
    fullDescription: '',
    highlights: '',
    bestTimeToVisit: '',
    bucketListCount: 0,
    mapLink: '',
    attractions: '',
    localCuisine: '',
    averageTemperature: '',
    altitude: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/cities', formData);
      alert(res.data.message);
      setFormData({
        id: '', // Reset ID field
        name: '',
        image: '',
        shortDescription: '',
        fullDescription: '',
        highlights: '',
        bestTimeToVisit: '',
        bucketListCount: 0,
        mapLink: '',
        attractions: '',
        localCuisine: '',
        averageTemperature: '',
        altitude: '',
      });
    } catch (error: any) {
      console.error('Add city error:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to add city');
    }
  };

  return (
    <div className='form-container'>
  <form onSubmit={handleSubmit} className="add-form">

    <div className="form-row">
      <label>City ID:</label>
      <input name="id" value={formData.id} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>City Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Image URL:</label>
      <input name="image" value={formData.image} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Short Description:</label>
      <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Full Description:</label>
      <textarea name="fullDescription" value={formData.fullDescription} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Highlights (comma separated):</label>
      <input name="highlights" value={formData.highlights} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Best Time to Visit:</label>
      <input name="bestTimeToVisit" value={formData.bestTimeToVisit} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Map Link:</label>
      <input name="mapLink" value={formData.mapLink} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Attractions (comma separated):</label>
      <input name="attractions" value={formData.attractions} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Local Cuisine (comma separated):</label>
      <input name="localCuisine" value={formData.localCuisine} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Average Temperature:</label>
      <input type="text" name="averageTemperature" value={formData.averageTemperature} onChange={handleChange} required />
    </div>

    <div className="form-row">
      <label>Altitude (in meters):</label>
      <input type="text" name="altitude" value={formData.altitude} onChange={handleChange} required />
    </div>

    <button type="submit">Add City</button>
  </form>
</div>
    );
}

export default AddCityForm;
