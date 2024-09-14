import mongoose from 'mongoose';

// Define the schema for weather updates
const dataSchema = new mongoose.Schema({
  coordinates: {
    type: [Number],
    required: true,
  },
  airTemperature: {
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  },
  sections: {
    type: [String],
    required: true,
  }
});

// Adding indexes for optimization
dataSchema.index({ coordinates: 1 });
dataSchema.index({ airTemperature: 1 });
dataSchema.index({ sections: 1 });

// Create and export model
const Data = mongoose.model('Data', dataSchema,'data');
export default Data;
