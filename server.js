import express from "express";
import { port } from './config/environment.js';
import { connectToDb } from './db/helpers.js';
import router from './config/router.js';



const app = express();
app.use(express.json());
app.use('/api', router);

async function runServer() {
  console.log('Connecting to the db..');
  await connectToDb();
  console.log('Connected to the db sucessfully!');
  app.listen(port);
}
runServer();