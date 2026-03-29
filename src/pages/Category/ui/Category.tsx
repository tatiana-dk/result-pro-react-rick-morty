import { useMemo, useState, useRef, useCallback } from "react";
import { Navigate, useParams, Link } from "react-router";
import { lang } from "@shared/config/lang";
import type { CategoryName } from "@/shared/config/types";
import { useLoadCategory } from "../lib/useLoadCategory";

const validValues = ['characters', 'locations', 'episodes'];

export function Category() {
    const params = useParams();
    const [pageNumber, setPageNumber] = useState(1);

    const category: string = params.category || '';

    const {
        loading,
        error,
        categoryItems,
        hasMore
    } = useLoadCategory(category as CategoryName, pageNumber);

    const observer = useRef<IntersectionObserver | null>(null);

    const lastNodeRef = useCallback((node: HTMLAnchorElement | null) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1);
            }
        });
        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore]);

    const isCategoryValid: boolean = validValues.includes(category);

    if (!isCategoryValid)
        return <Navigate to="/404" />

    const heading: string = lang.categoryHeading[category as CategoryName] || '';

    return (
        <>
            <h1>Выберите {heading}</h1>

            <div className="category-menu">
                {categoryItems.map((item, index) => {
                    if (categoryItems.length === index + 1) {
                        return <Link key={item.id} ref={lastNodeRef} to={`/${category}/${item.id}`}>{item.name}</Link>
                    } else {
                        return <Link key={item.id} to={`/${category}/${item.id}`}>{item.name}</Link>
                    }
                })}
                {loading && <div className="category-loading">Loading...</div>}
                {error && <div className="category-error">Error</div>}
            </div>
        </>
    );
};