import { Outlet } from "react-router";
import { Header } from "@widgets/Header";
import { Suspense } from "react";
import ErrorBoundary from "@app/error/ErrorBoundary";

export function MainLayout() {
    return (
        <div className="page">
            <Header />
            <ErrorBoundary>
                <Suspense fallback={'Loading...'}>
                    <Outlet />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};