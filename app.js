const express = require('express');
const axios = require('axios');
const cors = require("cors");

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
const fs = require('fs');


app.post('/api/getWeather', async (req, res) => {
  try {
    // Запрос к API
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        hourly: 'temperature_2m'
      }
    });

    // Преобразование объекта данных в JSON строку
    const jsonData = JSON.stringify(response.data);

    // Запись JSON строки в файл (в данном случае data.json)
    fs.writeFile('data.json', jsonData, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing JSON to file:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('JSON data written to file successfully');
        res.status(200).json({ success: true });
      }
    });

  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


