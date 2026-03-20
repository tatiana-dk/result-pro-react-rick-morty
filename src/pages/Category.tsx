import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { lang } from "../lang";
import type { CategoryName } from "../types/common";

export function Category() {
    const params = useParams();
    const navigate = useNavigate();

    const category: string = params.category || '';

    const isCategoryValid = useMemo(() => {
        const validValues = ['characters', 'locations', 'episodes'];
        return validValues.includes(category);
    }, [category]);

    const heading: string = useMemo(() => {
        return lang.categoryHeading[category as CategoryName] || '';
    }, [category]);

    if (!isCategoryValid)
        navigate('/404');

    return (
        <>
            <h1>Выберите {heading}</h1>
        </>
    );
};