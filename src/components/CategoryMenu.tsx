import type { CategoryName } from "../types/common";
import { data } from '../data/data';
import { Link } from "react-router";

export function CategoryMenu({category}: {category: CategoryName}) {
    return (
        <div className="category-menu">
            {data[category as CategoryName].map(c => (
                <Link to={`/${category}/${c.id}`}>{c.name}</Link>
            ))}
        </div>
    );
}