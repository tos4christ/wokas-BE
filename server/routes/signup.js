import { Router } from 'express';
import validate from '../app_logic/inputValidator';
import signupController from '../controllers/signup';

const router = Router();

/* USERS sign-up */
router.post('/signup', validate.createUser, signupController);

export default router;
