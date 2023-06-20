const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching users',
      data: error,
    });
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    return res.status(201).json({
      message: 'User saved successfully',
      data: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error saving user',
      data: error,
    });
  }
};

module.exports = {
  getUsers,
  saveUser,
};
