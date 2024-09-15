import express from 'express';
import User from '../models/users.js'
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully', newUser });
  } catch (error) {
    res.status(500).send({ message: 'Error registering user', error });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving users', error });
  }
});

export default router;






