import express from 'express';
import 'dotenv/config';
import connectDb from './db.js';
import commentsRouter from './routes/comments.js';
import usersRouter from './routes/users.js';
import weatherUpdatesRouter from './routes/weatherUpdates.js';
import Data from './models/weather.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



connectDb()

app.get('/', async (req, res) => {
  const results = await Data.find({}).limit(5)
  res.send(results)
})




app.use('/comments', commentsRouter);
app.use('/users', usersRouter);
app.use('/weatherUpdates', weatherUpdatesRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
