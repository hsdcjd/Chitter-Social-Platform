import express from 'express';
import { signUp } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('you are in auth router doing get request');   //this works
});
//router.post('/signup', signUp);

export default router;