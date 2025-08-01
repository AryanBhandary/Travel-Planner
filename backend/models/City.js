import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },  // <-- String type here
  name: { type: String, required: true, trim: true },
  image: { type: String },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  highlights: { type: [String], required: true },        // Array of strings
  bestTimeToVisit: { type: String, required: true },
  bucketListCount: { type: Number, default: 0 },
  mapLink: { type: String, required: true },
  attractions: { type: [String], required: true },       // Array of strings
  localCuisine: { type: [String], required: true },      // Array of strings
  averageTemperature: { type: String, required: true },
  altitude: { type: String, required: true },
});

export default mongoose.model('City', citySchema);
