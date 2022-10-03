import express from 'express';
import usersRouter from './routes/users';
import 'dotenv/config';
import logger from './middleware/logger';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use(usersRouter);
app.listen(port, () => console.log('⚡Running at port 3000⚡'));

export default app;
