import express from 'express';
import User from '../models/users.js'; 

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const results = await User.find({}).limit(5)
  res.send(results)
})


// Post a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error }); 
  }
});

// Patch a user by ID
router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); 
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error }); 
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); 
    }
    res.status(200).json({ message: 'User deleted', user });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error }); 
  }
});

export default router;

