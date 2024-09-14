import mongoose from 'mongoose';
import 'dotenv/config';

const connected = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Connected to MongoDB!');
  } catch (e) {
    console.error('Error connecting to MongoDB:', e.message);
  }
};

export default connected;
