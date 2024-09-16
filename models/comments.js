import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
commentSchema.index({ name: 1 });


const Comment = mongoose.model('Comment',commentSchema, 'comments');
export default Comment;
