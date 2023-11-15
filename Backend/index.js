import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/todo.routes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors);
app.use('/', router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error(err));
app.use(router)
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
