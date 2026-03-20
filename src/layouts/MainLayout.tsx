import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function MainLayout() {
    return (
        <div className="page">
            <Header />
            <Outlet />
        </div>
    );
};