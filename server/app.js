import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes';
import pool from './models/db_connection';
import createUsers from './models/user_table';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

pool.query(createUsers)
  .then(console.log)
  .catch(console.log);

app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    error: 'Not Found: Route does not exist',
  });
});

app.use((err, req, res) => {
  const status = err.status ? err.status : 500;
  res.status(status).send({
    status: 'error',
    'Server Error': err.message,
  });
});

export default app;
