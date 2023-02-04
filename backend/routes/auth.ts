import express, { Router } from "express";

// controller functions
import { loginUser, signupUser, refreshUser, verifyUser } from '../controllers/authController'

const router: Router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

// refresh route
router.post('/refresh', refreshUser);

// verify route
router.post('/verify', verifyUser);

export default router;