#!/usr/bin/env node
//import { blue } from 'chalk'

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated');
    });
  });