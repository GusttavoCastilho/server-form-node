import 'reflect-metadata';
import express from 'express';
import routes from './routes';
var cors = require('cors');
import './database';

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.listen('3333', () => {
    console.log('🚀 Server On 🚀');
});
