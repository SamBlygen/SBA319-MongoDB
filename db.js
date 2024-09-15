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

const mflixDb = async () =>{
 try{
  await mongoose.createConnection(process.env.DB_URI)
  console.log('2nd connection ')
 } catch{
console.log("Error")
 }

}







export {mflixDb, connectDb}

