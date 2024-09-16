import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: [true,'Plot is required']
  },
  cast: {
    type: Array,
    required: [true,'Cast is required']
  },
  tomatoes: {
    type: Object,
    required: [true,'Number of tomatoes']
  },
});

moviesSchema.index({ cast: 1 });
moviesSchema.index({ tomatoes: 1 });
moviesSchema.index({plot:-1});

const Movie = mongoose.model('Movie', moviesSchema, 'movies');
export default Movie;
