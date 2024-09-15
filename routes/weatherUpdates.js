import express from 'express';
import Data from '../models/weather.js'; // Import the Data model

const router = express.Router();



// CREATE - Add new weather data
router.post('/', async (req, res) => {
  try {
    const newData = new Data(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ - Get all weather data
router.get('/', async (req, res) => {
  try {
    const weatherData = await Data.find(); // Fetch all data
    res.status(200).json(weatherData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ - Get weather data by ID
router.get('/:id', async (req, res) => {
  try {
    const weatherData = await Data.findById(req.params.id);
    if (!weatherData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json(weatherData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - Update weather data by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(
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

// DELETE - Delete weather data by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }
    res.status(200).json({ message: 'Weather data deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
