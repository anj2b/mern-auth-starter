import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    return (
        <div className="flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form className="bg-white p-6 rounded-lg flex flex-col items-center" onSubmit={handleSubmit}>
                <label className="block font-medium text-lg mb-2 w-1/2">
                    Email:
                    <input
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label className="block font-medium text-lg mb-2 w-1/2">
                    Password:
                    <input
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <div className="flex">
                    <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="flex justify-center items-center mt-4">
                <p className="text-sm">Already have an account?</p>
                <Link to="/login" className="text-indigo-500 hover:text-indigo-600 ml-1">
                    Click here to login
                </Link>
            </div>
        </div>
    );
};

export default Register;
