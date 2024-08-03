const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

async function getAllReviews(placeId, apiKey) {
  let allReviews = [];
  let nextPageToken = '';

  do {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&reviews_sort=newest${nextPageToken ? `&pagetoken=${nextPageToken}` : ''}`;
    
    try {
      const response = await axios.get(url);
      const result = response.data.result;
      
      if (result && result.reviews) {
        allReviews = allReviews.concat(result.reviews);
      }
      
      nextPageToken = response.data.next_page_token || '';
      
      // Wait for a short time before making the next request
      if (nextPageToken) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      break;
    }
  } while (nextPageToken);

  return allReviews;
}

app.get('/api/google-reviews', async (req, res) => {
  try {
    const reviews = await getAllReviews(PLACE_ID, API_KEY);
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
