const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/travelerRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

async function main() {
  try {
    const data = await mongoose.connect(
      'mongodb+srv://professor:professor@cluster0.hicppz9.mongodb.net/',
      { dbName: "exploreNepal" }
    );
    console.log("Database connected:", data.connection.name);

    // Start server only after DB connection success
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("Database connection error:", err);
  }
}

main();

module.exports = app;
