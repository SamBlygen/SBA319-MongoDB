import mongoose from "mongoose";  


const usersSchema = new mongoose.Schema({
 name: {
    type: string,
    required: true,
  },
  age: {
    value: {
      type: Number,
      required: true,

    },
  },
  job: {
    type: [String],
    required: true,
  }
});

// Adding indexes for optimization
usersSchema.index({sections:1})


// Create and export model
const User = mongoose.model('Data', dataSchema,'data');
export default Data;
