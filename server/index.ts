import express from 'express';
import mongoose from 'mongoose';
import {router} from './routes';

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/hacktech2020';

mongoose.connect(MONGO_URL, {useNewUrlParser: true});

const app = express()
  .use(router)
  .use(express.static('client'))
  .get('*', (_, res) => res.redirect('/index.html'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
