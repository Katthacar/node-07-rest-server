import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// use cors for cross-origin
app.use(cors());

export default app;
