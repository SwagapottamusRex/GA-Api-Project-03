import { connectToDb, disconnectDb } from './helpers.js';

import data from './data.js';
import Podcast from '../models/podcast.js';
import User from '../models/user.js';

const adminUser = {
  username: 'admin',
  email: 'admin@admin.com',
  password: 'password!1',
  isAdmin: true,
};

const normalUser = {
  username: 'user',
  email: 'user@user.com',
  password: 'password!1',
};

async function seed() {
  //connecting
  console.log('Connecting to Mogodb via Mongoose');
  await connectToDb();
  console.log('Successfully connected to Mongo DB via Mongoose!');

  // Clearing data
  console.log('Clearing the database');
  await Podcast.deleteMany({});
  await User.deleteMany({});

  // Creating admin user
  console.log('Creating users..');
  const [admin, user] = await User.create([adminUser, normalUser]);
  console.log(`Created admin user: ${admin._id}`);
  console.log(`Created normal user: ${user._id}`);

  // Seeding
  console.log('About to seed 🌱..');
  const podcasts = await Podcast.create(data);
  console.log(`Seeded ${podcasts.length} podcasts 🎧`);

  // - Disconnecting.
  console.log('About to disconnect..');
  await disconnectDb();
  console.log('disconnected!');
}
seed();

//tester not necessary
