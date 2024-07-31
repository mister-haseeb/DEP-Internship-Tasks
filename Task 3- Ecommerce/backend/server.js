// server.js or app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // If using MongoDB
const userRoutes = require('./routes/user'); // Import your routes

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Use your routes
app.use('/api/users', userRoutes); // Adjust the path to your routes

// Connect to MongoDB (example)
mongoose.connect('mongodb://localhost:27017/ecommerce').then(console.log("Mongo Connected Successfully"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
