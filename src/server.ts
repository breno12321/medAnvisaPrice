import express from 'express';
import debug from 'debug';
import app from './app';

app
  .listen(process.env.PORT || 4000, () => debug('API: SERVER')(`Listening on port ${process.env.PORT || 4000}`));
