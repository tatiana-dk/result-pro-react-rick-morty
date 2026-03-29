import { Outlet, useParams } from "react-router";
import { CategoryMenu } from "@/pages/Category/ui/CategoryMenu";
import { useMemo } from "react";
import { DataProvider } from '@shared/providers/Data';

import type { CategoryName } from "@/shared/config/types";
import ErrorBoundary from "@app/error/ErrorBoundary";

const categories = ['characters', 'locations', 'episodes'];

export function CategoryLayout() {
    const params = useParams();
    const category: string = params.category || '';

    const isCategoryValid = useMemo(() => {
        return categories.includes(category);
    }, [category]);        

    return (
        <DataProvider>
            <div className="content-grid">
                <ErrorBoundary>{isCategoryValid && <CategoryMenu category={category as CategoryName} />}</ErrorBoundary>
                <div className="content">
                    <ErrorBoundary><Outlet /></ErrorBoundary>
                </div>
            </div>
        </DataProvider>
    );
};