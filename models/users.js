import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,'Name is required'] ,
    min: [3,'Name must be at least 3 characters long'],
    max: [50, 'Name must be at least 50 characters long'],
  },
  email: {
    type: String,
    required: [true,'Email is required'],
    unique:true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true,'Password is required'],
    min:['Password must be at least 6 characters long']
  },
});
usersSchema.index({ password: 1 });
usersSchema.index({email: 1})
usersSchema.index({name:1})


const User = mongoose.model('User', usersSchema, 'users');
export default User;
