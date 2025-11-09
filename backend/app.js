import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/travelerRoutes.js';
import cityRoutes from './routes/addCityRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cities', cityRoutes);

app.use(cors({
  origin: "https://travel-planner-gold-omega.vercel.app/",  // replace with your real Vercel link
  credentials: true
}));

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://professor:professor@cluster0.hicppz9.mongodb.net/',
      { dbName: 'exploreNepal' }
    );
    console.log('Database connected');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

main();

export default app;
