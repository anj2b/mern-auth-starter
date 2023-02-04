import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, user } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err) {
            console.log(err);
        }
    };

    if (user) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div className="flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
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
                        Login
                    </button>
                </div>
            </form>
            <div className="flex justify-center items-center mt-4">
                <p className="text-sm">Don't have an account?</p>
                <Link to="/signup" className="text-indigo-500 hover:text-indigo-600 ml-1">
                    Click here to sign up
                </Link>
            </div>
        </div>
    );
};

export default Login;
