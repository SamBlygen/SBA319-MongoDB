import express from 'express';
import data from '../models/weather.js'; 

const router = express.Router();


router.post('/weather', async (req, res) => {
  try {
    const newData = new data(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/weather', async (req, res) => {
  try {
    const weatherData = await data.find(); 
    res.status(200).json(weatherData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/weather/:id', async (req, res) => {
  try {
    const weatherData = await data.findById(req.params.id);
    if (!weatherData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json(weatherData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/weather/:id', async (req, res) => {
  try {
    const updatedData = await data.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete('/weather/:id', async (req, res) => {
  try {
    const deletedData = await data.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json({ message: 'Weather data deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
