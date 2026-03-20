import { Outlet, useParams } from "react-router";
import { CategoryMenu } from "../components/CategoryMenu";
import { useMemo } from "react";

import type { CategoryName } from "../types/common";

const categories = ['characters', 'locations', 'episodes'];

export function CategoryLayout() {
    const params = useParams();
    const category: string = params.category || '';

    const isCategoryValid = useMemo(() => {
        return categories.includes(category);
    }, [category]);        

    return (
        <>
            <div className="content-grid">
                {isCategoryValid && <CategoryMenu category={category as CategoryName} />}
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};