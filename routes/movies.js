import express from 'express';
import movie from '../models/movies.js';
import Movie from '../models/movies.js';

const router = express.Router();

router.get('/', async (req, res) => { 
  try {
    const users = await movie.find(); 
    res.send(users);
  } catch (error) {
    res.send({ message: 'error fetching movies', error });
  }
});

router.post('/movie', async (req, res) => {
  try {
    const newMovie = new movie(req.body);
    await newMovie.save();
    res.send(newMovie);
  } catch (error) {
    res.send({ message: 'Error creating movies', error });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const Movie = await movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!Movie) {
      return res.send({ message: 'Movie not found' });
    }
    res.send(movie);
  } catch (error) {
    res.send({ message: 'Error updating movies', error });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const movie = await movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.send({ message: 'Movie not found' });
    }
    res.send({ message: 'Movie deleted', user });
  } catch (error) {
    res.send({ message: 'Error deleting movie', error });
  }
});


export default router;
