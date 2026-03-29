import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Suspense } from "react";

export function MainLayout() {
    return (
        <div className="page">
            <Header />
            <Suspense fallback={'Loading...'}><Outlet /></Suspense>
        </div>
    );
};