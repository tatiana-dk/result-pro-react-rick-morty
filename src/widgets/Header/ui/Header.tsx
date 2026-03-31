import { lang } from "@shared/config/lang";
import { AuthStatus } from "./AuthStatus";
import { Navigation } from "@/shared/ui";

type NavigationKeysType = keyof typeof lang.navigation;

const names = ['main', 'character', 'location', 'episode'];

export function Header() {

    const paths = names.map(name => {
        let to = name;
        if (name === 'main')
            to = '';

        return {
            to: `/${to}`,
            text: `${lang.navigation[name as NavigationKeysType]}`
        };
    });

    return (
        <div className="header">
            <div className="header-nav">
                <Navigation paths={paths} />
            </div>
            <AuthStatus />
        </div>
    );
};