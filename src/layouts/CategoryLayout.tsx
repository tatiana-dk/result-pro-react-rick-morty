import { Outlet, useParams } from "react-router";
import { CategoryMenu } from "../components/CategoryMenu";
import { useMemo } from "react";
import { DataProvider } from '../context/DataProvider';

import type { CategoryName } from "../types/common";
import ErrorBoundary from "../components/ErrorBoundary";

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