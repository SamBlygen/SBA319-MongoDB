import express from 'express';
import 'dotenv/config';
import connectDb from './db.js';
// import commentsRouter from './routes/comments.js';
import usersRouter from './routes/users.js';
import movie from './models/movies.js';
import moviesRouter from './routes/movies.js'
import User from './models/users.js';
import mongoose from 'mongoose';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



connectDb()



app.get('/', async (req, res) => {
  const results = await User.find({}).limit(5)
  res.send(results)
})

app.get('/movies', async (req, res) => { 
  try {
    const results = await movie.find({}).limit(10); 
    res.send(results);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving users', error });
  }
});





// app.use('/comments', commentsRouter);
app.use('/users', usersRouter);
app.use('/movie', moviesRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
