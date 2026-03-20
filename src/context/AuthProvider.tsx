import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types/common";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context =  useContext(AuthContext);

    if (context === null)
        throw Error('useAuth must be used within a AuthProvider');

    return context;
};

export function AuthProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<string | null>(null);

    const signin = (newUser: string, callback: Function): void => {
        setUser(newUser);
        callback();
    }

    const signout = (callback: Function): void => {
        setUser(null);
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