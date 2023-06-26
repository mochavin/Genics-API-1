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

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  try{
  // const user = await User.findById(req.params.id);
    // if(!user){
    //   return res.status(404).json({
    //     message: 'User not found',
    //     data: {},
    //   });
    // }
    const updatedUser = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });

    return res.status(200).json({
      message: 'User updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error updating user',
      data: error,
    });
  }
}

const deleteUser = async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(404).json({
        message: 'User not found',
        data: {},
      });
    }
    return res.status(200).json({
      message: 'User deleted successfully',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting user',
      data: error,
    });
  }
}
    

module.exports = {
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
};
