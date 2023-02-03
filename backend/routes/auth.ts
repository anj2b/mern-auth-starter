import express, { Router } from "express";

// controller functions
import { loginUser, signupUser, refreshUser } from '../controllers/authController'

const router: Router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

// refresh route
router.post('/refresh', refreshUser);

export default router;