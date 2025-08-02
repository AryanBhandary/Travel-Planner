import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  image: { type: String },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  highlights: { type: [String], required: true },
  bestTimeToVisit: { type: String, required: true },
  bucketListCount: { type: Number, default: 0 },  // Static count, no updates from wishlist
  mapLink: { type: String, required: true },
  attractions: { type: [String], required: true },
  localCuisine: { type: [String], required: true },
  averageTemperature: { type: String, required: true },
  altitude: { type: String, required: true },
});

export default mongoose.model('City', citySchema);
