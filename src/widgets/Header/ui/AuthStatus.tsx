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

    if (auth.user === null) {
        return <p>You are not logged in.</p>
    }

    return (
        <>
            <p>Welcome user {auth.user}!</p>
            <Button click={handleSignout} text="Sign out" />
        </>
    );
};