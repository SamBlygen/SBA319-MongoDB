import express from 'express';
import 'dotenv/config';
import {connectDb, mflixDb} from './db.js';
import commentsRouter from './routes/comments.js';
import usersRouter from './routes/users.js';
import weatherUpdatesRouter from './routes/weatherUpdates.js';
import Data from './models/weather.js';
import User from './models/users.js';





const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



connectDb()
mflixDb()


app.get('/', async (req, res) => {
  const results = await Data.find({}).limit(5)
  res.send(results)
})

app.get("/user", async (req, res) => {

  try {
    let result = await User.findOne({_id: '59b99db6cfa9a34dcd7885bc'}).limit(5)
    res.send(result);
  } catch {
    res.send("Invalid ID").status(400);
  }
});



app.use('/comments', commentsRouter);
app.use('/users', usersRouter);
app.use('/weatherUpdates', weatherUpdatesRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
