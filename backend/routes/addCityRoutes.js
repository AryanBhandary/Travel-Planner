import express from 'express';
import City from '../models/City.js';

const router = express.Router();

// Helper: safely parse comma-separated strings into arrays
function parseCommaSeparated(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

// GET all cities
router.get('/', async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    console.error('Error fetching cities:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET city by custom string ID
router.get('/:id', async (req, res) => {
  const cityId = req.params.id;
  console.log('GET /api/cities/:id called with id =', cityId);
  
  try {
    const city = await City.findOne({ id: cityId });
    if (!city) {
      console.log(`City not found for id: ${cityId}`);
      return res.status(404).json({ message: 'City not found' });
    }
    console.log('City found:', city.name);
    res.json(city);
  } catch (err) {
    console.error('Error fetching city:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST add new city
router.post('/', async (req, res) => {
  try {
    const {
      id,
      name,
      image,
      shortDescription,
      fullDescription,
      highlights,
      bestTimeToVisit,
      mapLink,
      attractions,
      localCuisine,
      averageTemperature,
      altitude,
    } = req.body;

    if (
      !id ||
      !name ||
      !shortDescription ||
      !fullDescription ||
      !bestTimeToVisit ||
      !mapLink ||
      !averageTemperature ||
      !altitude
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newCity = new City({
      id,
      name,
      image,
      shortDescription,
      fullDescription,
      highlights: parseCommaSeparated(highlights),
      bestTimeToVisit,
      bucketListCount: 0,
      mapLink,
      attractions: parseCommaSeparated(attractions),
      localCuisine: parseCommaSeparated(localCuisine),
      averageTemperature,
      altitude,
    });

    await newCity.save();

    res.status(201).json({ message: 'City added successfully', city: newCity });
  } catch (err) {
    console.error('City addition error:', err);

    if (err.code === 11000 && err.keyPattern?.id) {
      return res.status(400).json({ error: 'City ID already exists' });
    }

    res.status(500).json({ error: err.message || 'Server error' });
  }
});

export default router;
