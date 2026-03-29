export interface AuthContextType {
    user: string | null;
    signin: (newUser: string, callback: Function) => void;
    signout: (callback: Function) => void;
};