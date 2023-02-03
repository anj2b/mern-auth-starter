import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const Navigate = useNavigate();

    return (
        <div className="flex-col justify-center items-center h-screen">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Home</h1>
                <h2 className="text-xl font-medium mb-4">Welcome to the home page</h2>
            </div>
            <div className="flex justify-center">
                <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" onClick={() => Navigate('/login')}>
                    Login
                </button>
                <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" onClick={() => Navigate('/signup')}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Home;
