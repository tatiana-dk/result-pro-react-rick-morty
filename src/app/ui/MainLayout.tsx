import { Outlet } from "react-router";
import { Header } from "@widgets/Header";
import { Suspense } from "react";
import ErrorBoundary from "@app/error/ErrorBoundary";
import { Container } from '@mantine/core';

export function MainLayout() {
    return (
        <div className="page">
            <Header />
            <ErrorBoundary>
                <Container size="xs">
                    <Suspense fallback={'Loading...'}>
                        <Outlet />
                    </Suspense>
                </Container>
            </ErrorBoundary>
        </div>
    );
};