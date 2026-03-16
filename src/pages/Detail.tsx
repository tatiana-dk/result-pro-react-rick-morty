import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { data } from '../data/data';
import { CharacterCard } from "../components/CharacterCard";
import { LocationCard } from "../components/LocationCard";
import { EpisodeCard } from "../components/EpisodeCard";

import type { CategoryName } from "../types/common";
import type { CharacterItem } from "../types/characters";
import type { LocationItem } from "../types/locations";
import type { EpisodeItem } from "../types/episodes";

export function Detail() {
    const params = useParams();
    const navigate = useNavigate();

    const category: string = params.category || '';
    const id: string = params.id || '';

    const detail = useMemo(() => {
        const categoryData = data[category as CategoryName];
        if (!categoryData) return null;
        return categoryData.filter(c => String(c.id) === id)[0] || null;
    }, [category]);

    if (!detail)
        navigate('/');

    return (
        <>
            {category === 'characters' && <CharacterCard detail={detail as CharacterItem} />}
            {category === 'locations' && <LocationCard detail={detail as LocationItem} />}
            {category === 'episodes' && <EpisodeCard detail={detail as EpisodeItem} />}
        </>
    );
};