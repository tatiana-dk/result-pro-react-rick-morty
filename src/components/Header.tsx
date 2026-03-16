import { Link } from "react-router";

export function Header() {
    return (
        <div className="header">
            <Link to="/">Главная</Link>
            <Link to="/characters">Персонажи</Link>
            <Link to="/locations">Локации</Link>
            <Link to="/episodes">Эпизоды</Link>
        </div>
    );
};