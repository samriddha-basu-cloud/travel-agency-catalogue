const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

app.get('/api/google-reviews', async (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const reviews = response.data.result.reviews;
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});