import express from 'express';

import dotenv from 'dotenv';
import debug from 'debug';
import { findMedController } from './components/AnvisaMedData';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

express()
  .use(cors())
  .use(helmet())
  .get('/', (_req, res) => res.send({ purposeInLife: 'Provide ANVISA medications listing and price' }))
  .get('/medication', findMedController)
  .listen(process.env.PORT || 4000, () => debug('API: MAIN')(`Listening on port ${process.env.PORT || 4000}`));
