import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Name is required'],
    min: [3,'Name must be at least 3 characters long'],
    max: [50, 'Name must be at least 50 characters long'],
  },
  email: {
    type: String,
    required: [true,'Email Addess is required'],
    unique:true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  text: {
    type: String,
    required: [true,'Text is required']
  },
});
commentSchema.index({ name: 1 });
commentSchema.index({email: 1});
commentSchema.index({text: 1});


const Comment = mongoose.model('Comment',commentSchema, 'comments');
export default Comment;
