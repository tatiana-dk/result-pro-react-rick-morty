import type { CategoryName } from "@/shared/config";
import axios from "axios";
import { useState, useEffect } from "react";

export function useLoadDetail(category: CategoryName, id: string) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [detail, setDetail] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        setError(false);

        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${category}/${id}`,
        })
        .then((res) => {
            setDetail(res.data);
            setLoading(false);
        })
        .catch(error => {
            if (axios.isCancel(error)) {
                return;
            }
            
            setLoading(false);
            setError(true);

            console.error(error);
        });
    }, []);

    return {
        loading,
        error,
        detail
    }
};