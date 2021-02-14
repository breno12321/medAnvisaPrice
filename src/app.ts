import dotenv from 'dotenv';
import express from 'express';
import debug from 'debug';
import { findMedController } from './components/AnvisaMedData';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

export default express()
  .use(cors())
  .use(helmet())
  .get('/', (_req, res) => res.send({ purposeInLife: 'Provide ANVISA medications listing and price' }))
  .get('/medication', findMedController);
