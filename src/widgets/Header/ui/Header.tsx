import { AuthStatus } from "./AuthStatus";
import './Header.css';

export function Header() {
    return (
        <div className="header">
            <AuthStatus />
        </div>
    );
};