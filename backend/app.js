import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Routes
import userRoutes from './routes/travelerRoutes.js';
import cityRoutes from './routes/addCityRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for your Vercel frontend
app.use(cors({
  origin: "https://travel-planner-gold-omega.vercel.app", // no trailing slash
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ API routes
app.use('/api/users', userRoutes);
app.use('/api/cities', cityRoutes);

// ✅ MongoDB connection + server start
async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://professor:professor@cluster0.hicppz9.mongodb.net/',
      { dbName: 'exploreNepal' }
    );
    console.log('Database connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

main();

export default app;
