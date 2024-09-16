import express from 'express';
import User from '../models/users.js'; // Import the User model, using a different name to avoid conflict

const router = express.Router();


router.get('/', async (req, res) => { 
  try {
    const users = await User.find(); 
    res.send(users);
  } catch (error) {
    res.send({ message: 'Error retrieving users', error });
  }
});

router.post('/user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: 'Error creating user', error });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.send({ message: 'Error updating user', error });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send({ message: 'User deleted', user });
  } catch (error) {
    res.send({ message: 'Error deleting user', error });
  }
});

export default router;



