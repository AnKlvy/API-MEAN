const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

app.get('/api/getWeather', async (req, res) => {
  try {
    // Запрос к API
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        hourly: 'temperature_2m'
      }
    });

    console.log(response.data)
    // // Отправка данных в виде JSON на HTML страницу
    // res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
