const express = require('express');
const path = require('path');
import { Request, Response, NextFunction } from 'express';
import { newConfig } from './config';

const app = express();

const main = async () => {
  try {
    const config = newConfig();

    app.listen(config.PORT, () => {
      console.log(`http server is running at ${config.PORT}...`);
    });
  } catch (err) {
    console.error(err);
  }
};

main();

// const app = express();
// const PORT = process.env.PORT;
// console.log(PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/*', express.static(path.resolve(__dirname, '../dist')));

// app.get('/', (req: Request, res: Response) => {
//   return res.status(200).send('Hello World!');
// });
