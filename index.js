import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import connected from './db.js';
import locationsRouter from './routes/locations.js';
import usersRouter from './routes/users.js';
import weatherUpdatesRouter from './routes/weatherUpdates.js';
import data from './models/weather.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


connected();
await mongoose.connect(process.env.ATLAS_URI)

app.get('/', async (req, res) => {
  try {
   
    const results = await data.find({}).limit(20);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather updates', error: error.message });
  }
});



app.use('/locations', locationsRouter);
app.use('/users', usersRouter);
app.use('/weatherUpdates', weatherUpdatesRouter);

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
