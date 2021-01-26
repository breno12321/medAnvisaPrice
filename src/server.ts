import express from 'express';

import dotenv from 'dotenv';
import localAnvisaMedData from './components/localAnvisaMedData';

dotenv.config();

express()
  .get('/', (_req, res) => res.send({ purposeInLife: 'Provide ANVISA medications listing and price' }))
  .get('/medication', async (req, res) => {
    const { filter, value } = req.query;
    const med = await localAnvisaMedData(value as string, filter as string);
    res.json({ status: 'ok', rows: med.length, data: med });
  })
  .listen(process.env.PORT || 4000, () => console.log(`Listening on port ${process.env.PORT || 4000}`));
