import express, { Router } from 'express';
import Movie from '../models/movies.js';  

const router = express.Router();

// Get all movies
router.get('/movie', async (req, res) => { 
  try {
    const results = await Movie.find({}).limit(10); 
    res.status(200).json(results); 
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies', error }); 
  }
});


// Post a new movie
router.post('/movie', async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie); 
  } catch (error) {
    res.status(400).json({ message: 'Error creating movie', error });
  }
});

// Patch a movie by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' }); 
    }
    res.status(200).json(updatedMovie); 
  } catch (error) {
    res.status(400).json({ message: 'Error updating movie', error }); 
  }
});

// Delete a movie by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' }); 
    }
    res.status(200).json({ message: 'Movie deleted', movie: deletedMovie });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error }); 
  }
});

export default router;
