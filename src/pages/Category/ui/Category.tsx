import { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import { lang } from "@shared/config/lang";
import type { CategoryName } from "@/shared/config/types";

export function Category() {
    const params = useParams();

    const category: string = params.category || '';

    const isCategoryValid = useMemo(() => {
        const validValues = ['characters', 'locations', 'episodes'];
        return validValues.includes(category);
    }, [category]);

    const heading: string = useMemo(() => {
        return lang.categoryHeading[category as CategoryName] || '';
    }, [category]);

    if (!isCategoryValid)
        return <Navigate to="/404" />

    return (
        <>
            <h1>Выберите {heading}</h1>
        </>
    );
};