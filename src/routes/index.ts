import express from 'express';
import programmingLanguages from './programming-language';
import error from './error';

const router = express.Router();

router.use('/programming-language', programmingLanguages);
router.use('/error', error);

export default router;