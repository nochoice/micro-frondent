import express from 'express';
import cors from 'cors';
import users from './users/index';

const port = 9000;
const app = express();

app.use(cors());

app.use('/users', users);

app.listen(port);
console.log(`User server running on ${port}`);