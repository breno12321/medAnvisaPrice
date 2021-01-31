import express from 'express';

import dotenv from 'dotenv';
import debug from 'debug';
import { findMedController } from './components/localAnvisaMedData';
import cors from 'cors';
import helmet from 'helmet';
import redoc from 'redoc-express'
import filePath from './helpers/filePath';

dotenv.config();
console.log(filePath('../public/docs.html'))
express()
  .use(cors())
  .use(helmet())
  .get('/', (_req, res) => res.send({ purposeInLife: 'Provide ANVISA medications listing and price' }))
  .get('/medication', findMedController)
  .listen(process.env.PORT || 4000, () => debug('API: MAIN')(`Listening on port ${process.env.PORT || 4000}`));
