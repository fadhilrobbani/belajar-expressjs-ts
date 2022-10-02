import express from 'express';
require('dotenv').config();

const app = express();
app.get('/', (req, res) => {
  res.send('hallo');
});

app.get('/env', (req, res) => {
  res.send(process.env.APP_NAME);
});

export default app;
