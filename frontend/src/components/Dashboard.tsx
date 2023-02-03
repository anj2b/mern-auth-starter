import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <h2 className="text-xl font-medium mb-4">Welcome {user.email}</h2>
                <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;