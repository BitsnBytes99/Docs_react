const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Card = require('./models/Card');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (Make sure MongoDB is running locally or through MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/cardsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection failed:', error));

// API route to get all cards
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API route to add a new card
app.post('/api/cards', async (req, res) => {
  const newCard = new Card(req.body);
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
