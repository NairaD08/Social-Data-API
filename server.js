const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const thoughtRoutes = require("./Routes/thoughtRoutes");

dotenv.config(); //pulling in the env and making thing in env availablt to the code

const app = express(); //single server from express
const PORT = process.env.PORT || 3001;

// Middleware 
app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialDataAPI",
  {}
);

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
