import express from 'express';

const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.send(comments);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving comments', error });
  }
});

// Get a single comment by ID
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }
    res.send(comment);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving comment', error });
  }
});

// Update a comment by ID
router.patch('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }
    res.send(comment);
  } catch (error) {
    res.status(400).send({ message: 'Error updating comment', error });
  }
});

// Delete a comment by ID
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }
    res.send({ message: 'Comment deleted', comment });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting comment', error });
  }
});




export default router;







