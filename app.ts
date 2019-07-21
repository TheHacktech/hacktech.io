import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import {router} from './server/routes';
//import {requirejs} from 'requirejs';

const PORT = 3000;
const MONGO_URL = 'mongodb://localhost:27017/hacktech2020';

mongoose.connect(MONGO_URL, {useNewUrlParser: true});

const app = express()
	.use(router)
	.use(express.static(path.join(__dirname, 'client')));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
