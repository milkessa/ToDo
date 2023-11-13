import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/taskRoute';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error(err));
app.use(router)

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
