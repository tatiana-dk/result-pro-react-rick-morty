import { useEffect, useState } from "react";
import axios from 'axios';

import type { Data, CategorySingleName } from "@/shared/config/types";

export function useLoadCategory(category: CategorySingleName, pageNumber: number) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categoryItems, setCategoryItems] = useState<Data>([]);
    const [hasMore, setHasMore] = useState(false);

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
            setCategoryItems((prevState: Data): Data => {
                return [
                    ...prevState,
                    ...res.data.results
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