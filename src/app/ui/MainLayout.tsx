import { Outlet } from "react-router";
import { Header } from "@widgets/Header";
import { Suspense } from "react";
import ErrorBoundary from "@app/error/ErrorBoundary";

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function MainLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />

                <Header />
            </AppShell.Header>

            <AppShell.Navbar>Navbar</AppShell.Navbar>

            <AppShell.Main>
                <ErrorBoundary>
                    <Suspense fallback={'Loading...'}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </AppShell.Main>
        </AppShell>
    );
};