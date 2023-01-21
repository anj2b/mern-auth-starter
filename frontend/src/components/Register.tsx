import React, { useState } from 'react';

interface Props {
    onSubmit: (username: string, password: string) => void;
}

const Register: React.FC<Props> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
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
    );
};

export default Register;
