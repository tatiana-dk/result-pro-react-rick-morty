import { useNavigate } from "react-router";
import { useAuth } from "@shared/providers/Auth/AuthProvider";
import { Button } from "@/shared/ui";

export function AuthStatus({}) {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSignout = () => {
        auth.signout(() => {
            navigate('/');
        });
    };

    const handleSignin = () => {
        navigate('/login');
    };

    if (auth.user === null) {
        return <Button click={handleSignin} text="Log in" />
    }

    return (
        <>
            <p>{auth.user}</p>
            <Button click={handleSignout} text="Log out" />
        </>
    );
};