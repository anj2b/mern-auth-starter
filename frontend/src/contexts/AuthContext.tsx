import { createContext, useContext, useState, useEffect } from "react";

export interface AuthContextProps {
    user: any;
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
    logout: () => void;
    refresh: () => void;
}

//create context
export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: (email: string, password: string) => { },
    register: (email: string, password: string) => { },
    logout: () => { },
    refresh: () => { }
});

export function useAuth() {
    return useContext(AuthContext)
}

//create provider
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user') || null));
        }
    }, []);

    const login = async (email: string, password: string) => {
        fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => { localStorage.setItem('user', JSON.stringify(data)) })
            .then(() => { setUser(JSON.parse(localStorage.getItem('user') || null)) })
            .catch(err => console.log(err))
    };

    const register = async (email: string, password: string) => {
        fetch('http://localhost:3030/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => { localStorage.setItem('user', JSON.stringify(data)) })
            .then(() => { setUser(JSON.parse(localStorage.getItem('user') || null)) })
            .catch(err => console.log(err))
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const refresh = () => {
        fetch('http://localhost:3030/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: user.refreshToken })
        })
            .then(res => res.json())
            .then(data => { localStorage.setItem('user', JSON.stringify(data)) })
            .catch(err => console.log(err))
    };


    return (
        <AuthContext.Provider value={{ user, login, register, logout, refresh }}>
            {children}
        </AuthContext.Provider>
    );
};
