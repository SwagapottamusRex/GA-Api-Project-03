import mongoose from 'mongoose';

import bcrypt from 'bcrypt';

import mongooseHidden from 'mongoose-hidden';
import { emailRegex } from '../lib/stringTesters.js';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (email) => emailRegex.test(email),
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: { type: Boolean },
  likedPodcasts: [{ type: mongoose.Schema.ObjectId, ref: 'Liked' }],
});

userSchema.pre('save', function encryptPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};
userSchema.plugin(
  mongooseHidden({ defaultHidden: { password: true, email: true } })
);



export default mongoose.model('User', userSchema);