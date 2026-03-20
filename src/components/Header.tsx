import { Link } from "react-router";
import { lang } from "../lang";

export function Header() {
    return (
        <div className="header">
            <Link to="/">{lang.navigation.main}</Link>
            <Link to="/characters">{lang.navigation.characters}</Link>
            <Link to="/locations">{lang.navigation.locations}</Link>
            <Link to="/episodes">{lang.navigation.episodes}</Link>
        </div>
    );
};