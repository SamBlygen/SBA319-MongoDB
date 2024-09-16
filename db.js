import mongoose from 'mongoose';
import 'dotenv/config';


const connectDb = async () => {
  try {
      await mongoose.connect(process.env.ATLAS_URI)
      console.log('MongoDB connected...')
  } catch(e) {
      console.log(e)
  }
}



export default connectDb



