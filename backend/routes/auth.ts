import express, { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// controller functions
import { loginUser, signupUser } from '../controllers/authController'

const router: Router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

export default router;