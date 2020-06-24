import express from 'express';
import { handleError } from '../utils/error';

const router = express.Router();

router.post('/', (req, res) => {
    handleError(req.body)
    res.sendStatus(204);
});

export default router;