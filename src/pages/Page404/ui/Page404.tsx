import { lang } from "@shared/config/lang";
import { Link } from "react-router";

export function Page404() {
    return (
        <>
            <h1>{lang[404].heading}</h1>
            <Link to='/'>{lang[404].link}</Link>
        </>
    );
}