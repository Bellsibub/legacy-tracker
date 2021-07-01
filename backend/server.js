import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwks from 'jwks-rsa';
import jwt from 'express-jwt';

import router from './routes';
import errorHandler from './controllers/errorController';
import AppError from './utils/appError';
import devSeed from './dev/seed';

dotenv.config();

const mongoUrl = process.env.NODE_ENV === 'production'
  ? process.env.MONGO_URL
  : 'mongodb://localhost/legacyTracker';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.Promise = Promise;

if (process.env.RESET_DB) {
  devSeed();
}

const port = process.env.PORT || 8080;
const app = express();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://legacytracker.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : process.env.LOCAL_URL,
  issuer: 'https://legacytracker.eu.auth0.com/',
  algorithms: ['RS256']
});

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.use(jwtCheck);

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
