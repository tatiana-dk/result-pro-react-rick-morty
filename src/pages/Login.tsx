
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { lang } from "../lang";

export function Login() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const username: FormDataEntryValue | null = formData.get('username');

        if (typeof username !== 'string') throw Error('Username is not a string');

        auth.signin(username, () => {
            navigate(from, {
                replace: true
            });
        });
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="username" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </>
    );
}