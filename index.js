import express from 'express';
import 'dotenv/config';
import connectDb from './db.js';
import commentsRouter from './routes/comments.js';
import usersRouter from './routes/users.js';
import Movie from './models/movies.js';
import moviesRouter from './routes/movies.js'
import User from './models/users.js';
import Comment from './models/comments.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());




connectDb()



app.get('/', async (req, res) => {
  const results = await User.find({}).limit(5)
  res.send(results)
})

app.get('/movie', async (req, res) => { 
  try {
    const results = await Movie.find({}).limit(10); 
    res.status(200).json(results); 
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies', error }); 
  }
});


app.get('/comment', async (req, res) => {
  const results = await Comment.find({}).limit(5)
  res.send(results)
});

app.use((err, req, res, next)=>{
  res.send('seems like we messed up somewhere');
})


app.use('/comments', commentsRouter);
app.use('/users', usersRouter);
app.use('/movie', moviesRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
