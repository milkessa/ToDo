import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/taskRoute.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error(err));
app.use(routes)

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
