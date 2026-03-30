import { useEffect, useState } from "react";
import axios from 'axios';

import type { CategoryItems, CharacterItem, CategoryName } from "@/shared/config/types";

export function useLoadCategory(category: CategoryName, pageNumber: number) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categoryItems, setCategoryItems] = useState<CategoryItems>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setCategoryItems([]);
        setLoading(false);
        setError(false);
        setHasMore(false);
    }, [category]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${category}`,
            params: {
                page: pageNumber
            },
        })
        .then((res) => {
            setCategoryItems((prevState: CategoryItems): CategoryItems => {
                return [
                    ...prevState,
                    ...res.data.results.map((item: CharacterItem) => ({
                        id: item.id,
                        name: item.name
                    }))
                ];
            });

            setLoading(false);
            setHasMore(res.data.results.length > 0);
        })
        .catch(error => {
            if (axios.isCancel(error)) {
                return;
            }

            setError(false);
            console.error(error);
        });
    }, [category, pageNumber]);

    return {
        loading,
        error,
        categoryItems,
        hasMore
    };
}