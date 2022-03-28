import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import { secret } from '../config/environment.js';


const registerUser = async (req, res, next) => {
  try {
    if (req.body.password === req.body.confirmPassword) {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } else {
      return res.status(400).json({ message: 'password does not match' });
    }
  } catch (err) {
    next(err);
  }
};

async function loginUser(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: 'Unauthorised, user not found' });
    }
    const isValidPw = user.validatePassword(req.body.password);

    if (!isValidPw) {
      return res.status(404).json({ message: 'Unauthorised, passwords do not match' });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      secret,
      { expiresIn: '12h' }
    );
    return res.status(202).send({ token, message: 'Login successful' });
  } catch (err) {
    next(err);
  }
}




const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    !user ? res.status(404) : res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};


const updateUser = async (req, res) => {
  try {
    const { id }  = req.params;
    
    const user = await User.findById(id);
    // if (!user) {
    //   return res.status(404).send({ message: 'user not found' });
    // }

    console.log('req.body', req.body)
    user.set(req.body)


    const newUser = await user.save();
    return res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
  }
};



export default {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  getAllUsers,
};