import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import { secret } from '../config/environment.js';

async function registerUser(req, res, next) {
  try {
    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(422).json({ message: 'passwords do not match' });
    }
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

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

export default {
  registerUser,
  loginUser
};