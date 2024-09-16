import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
usersSchema.index({ password: 1 });


// Create and export the model for users
const User = mongoose.model('User', usersSchema, 'users');
export default User;
