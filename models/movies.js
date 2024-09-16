import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  tomatoes: {
    type: Object,
    required: true,
  },
});
moviesSchema.index({ cast: 1 });
moviesSchema.index({ tomatoes: 1 });

const Movie = mongoose.model('Movie', moviesSchema, 'movies');
export default Movie;
