import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

const createToken = (_id: string) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
        const user = await login(email, password);

        // create a token
        const token = createToken(user.id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// signup a user
const signupUser = async (req: any, res: any) => {
    const { email, password } = req.body;

    try {
        const user = await signup(email, password);

        // create a token
        const token = createToken(user.id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// static signup method
const signup = async function (email: string, password: string) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    const exists = await User.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({ email, password: hash })

    return user
}


// static login method
const login = async function (email: string, password: string) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

export { signupUser, loginUser };
