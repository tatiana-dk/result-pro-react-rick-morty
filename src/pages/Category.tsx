import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { data } from '../data/data';

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
        switch(category) {
            case 'characters':
                return 'героя';
            case 'locations':
                return 'локацию';
            case 'episodes':
                return 'эпизод';
            default:
                return '';
        }
    }, [category]);

    if (!isCategoryValid)
        navigate('/404');

    return (
        <>
            <h1>Выберите {heading}</h1>

            {data[category as CategoryName].map(c => (
                <Link to={`/${category}/${c.id}`}>{c.name}</Link>
            ))}
        </>
    );
};