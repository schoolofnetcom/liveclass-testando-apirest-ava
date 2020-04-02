import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/app_ava', { useNewUrlParser: true, useUnifiedTopology: true });
routes(app);

app.listen(9000, () => console.log('Express has been started...'));

export default app;