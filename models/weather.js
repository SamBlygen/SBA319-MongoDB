import mongoose from 'mongoose';


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

dataSchema.index({coordinates:1});
dataSchema.index({airTemperature:1});
dataSchema.index({sections:1});

const data = mongoose.model('Data', dataSchema);
export default data;
