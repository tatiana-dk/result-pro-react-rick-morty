import { Outlet } from "react-router";
import { Header } from "@widgets/Header";
import { Suspense } from "react";
import ErrorBoundary from "@app/error/ErrorBoundary";
import { Navigation } from "@/shared/ui";
import { lang } from "@shared/config/lang";

import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type NavigationKeysType = keyof typeof lang.navigation;

const names = ['main', 'character', 'location', 'episode'];

export function MainLayout() {
    const [opened, { toggle }] = useDisclosure();

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
                    className="burger"
                />

                <Header />
            </AppShell.Header>

            <AppShell.Navbar>
                <Navigation paths={paths} />
            </AppShell.Navbar>

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