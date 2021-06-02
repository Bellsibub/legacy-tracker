import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes';
import errorHandler from './controllers/errorController';
import AppError from './utils/appError';

dotenv.config();

const mongoUrl = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URL
  : 'mongodb://localhost/legacy-tracker';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Add router module and error handler
app.use('/', router);

// handle undefined Routes
app.use('*', (req, res, next) => {
  const err = new AppError(404, 'error', 'The route you provided is undefined');
  next(err, req, res, next);
});

app.use(errorHandler);

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`ENV: ${process.env.NODE_ENV}`);
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
