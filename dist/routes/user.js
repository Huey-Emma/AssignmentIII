const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const country = req.body.country;

    if (!name || name.length < 2) {
      throw new Error(
        'Name must be more than 2 characters. Please enter a valid name'
      );
    }

    if (!email || !(email.includes('@') && email.includes('.'))) {
      throw new Error('Please enter a valid email addresss');
    }

    if (!country || country.length < 1) {
      throw new Error('Please enter a country');
    }

    const newUser = await User.create({
      name,
      email,
      country,
    });

    res.status(201).json({
      status: 'success',
      user: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      count: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Could not fetch data',
    });
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      throw new Error(`User with the id ${req.params.userId} does not exist`);
    }

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});

router.patch('/:userId', async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      throw new Error(`User with the id ${req.params.userId} does not exist`);
    }

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    if (!deletedUser) {
      throw new Error(`User with the id ${req.params.userId} does not exist`);
    }

    res.status(204).json({});
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});

module.exports = router;
