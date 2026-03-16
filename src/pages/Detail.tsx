import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { data } from '../data/data';
import { CharacterCard } from "../components/CharacterCard";

import type { CategoryName } from "../types/common";
import type { CharacterItem } from "../types/characters";

export function Detail() {
    const params = useParams();
    const navigate = useNavigate();

    const category: string = params.category || '';
    const id: string = params.id || '';

    const detail = useMemo(() => {
        return data[category as CategoryName].filter(c => String(c.id) === id)[0] || null;
    }, [category]);

    if (!detail)
        navigate('/');

    const cardComponent = <CharacterCard detail={detail as CharacterItem}/>

    return (
        <>
            {cardComponent}
        </>
    );
};