import { createContext, useContext, useState } from "react";

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

    const login = async (email: string, password: string) => {
        fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => { setUser(data) })
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
            .then(data => { setUser(data) })
            .catch(err => console.log(err))
    };

    const logout = () => {
        setUser(null);
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
            .then(data => { setUser(data) })
            .catch(err => console.log(err))
    };


    return (
        <AuthContext.Provider value={{ user, login, register, logout, refresh }}>
            {children}
        </AuthContext.Provider>
    );
};
