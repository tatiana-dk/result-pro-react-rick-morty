import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthContextType } from "./types";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context =  useContext(AuthContext);

    if (context === null)
        throw Error('useAuth must be used within a AuthProvider');

    return context;
};

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<string | null>(localStorage.getItem('user') || null);

    const signin = (newUser: string, callback: Function): void => {
        setUser(newUser);
        localStorage.setItem('user', newUser);
        callback();
    }

    const signout = (callback: Function): void => {
        setUser(null);
        localStorage.removeItem('user');
        callback();
    }

    const value: AuthContextType = {
        user,
        signin,
        signout
    };

    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};