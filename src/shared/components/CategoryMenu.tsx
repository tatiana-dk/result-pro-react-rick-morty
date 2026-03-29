import type { CategoryName, CategorySingleName } from "../types/common";
import { useLoadCategory } from "../hooks/useLoadCategory";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router";

export function CategoryMenu({category}: {category: CategoryName}) {
    const [pageNumber, setPageNumber] = useState(1);
    const categorySingle = String(category as CategoryName).substring(0, category.length-1);

    const {
        loading,
        error,
        categoryItems,
        hasMore
    } = useLoadCategory(categorySingle as CategorySingleName, pageNumber);

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
        if (loading) return;
    }, [loading, hasMore]);

    return (
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
    );
}