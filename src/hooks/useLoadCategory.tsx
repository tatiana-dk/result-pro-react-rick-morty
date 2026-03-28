import { useEffect, useState } from "react";
import axios, { type Canceler } from 'axios';

import type { Data, CategorySingleName, DataContextData } from "../types/common";
import { useData } from "../context/DataProvider";

export function useLoadCategory(category: CategorySingleName, pageNumber: number) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categoryItems, setCategoryItems] = useState<Data>([]);
    const [hasMore, setHasMore] = useState(false);
    const {changeData} = useData();

    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel: Canceler;
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${category}`,
            params: {
                page: pageNumber
            },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        })
        .then((res) => {
            setCategoryItems((prevState: Data): Data => {
                return [
                    ...prevState,
                    ...res.data.results
                ];
            });

            const data: DataContextData = {};
            data[`${category}s`] = [
                ...categoryItems,
                ...res.data.results
            ];
            changeData(data, () => {});
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

        return () => cancel();
    }, [category, pageNumber]);

    return {
        loading,
        error,
        categoryItems,
        hasMore
    };
}