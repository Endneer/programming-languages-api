import express, { NextFunction, Request, Response } from 'express';
import index from './routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';
import { handleError } from './utils/error';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', index);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    handleError(err);
    next(err);
});

app.listen(port, () => console.log(`API is listening on port http://localhost:${port}`));