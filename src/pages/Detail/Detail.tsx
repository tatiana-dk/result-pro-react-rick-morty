import { useMemo } from "react";
import { useParams, Navigate } from "react-router";
import { CharacterCard } from "../../components/CharacterCard";
import { LocationCard } from "../../components/LocationCard";
import { EpisodeCard } from "../../components/EpisodeCard";

import type { CategoryName } from "../../shared/types/common";
import type { CharacterItem } from "../../shared/types/characters";
import type { LocationItem } from "../../shared/types/locations";
import type { EpisodeItem } from "../../shared/types/episodes";

import { useData } from "../../context/DataProvider";

export function Detail() {
    const params = useParams();
    const data = useData();

    const category: string = params.category || '';
    const id: string = params.id || '';

    const detail = useMemo(() => {
        const categoryData = data.data[category as CategoryName];
        if (!categoryData) return null;
        return categoryData.filter(c => String(c.id) === id)[0] || null;
    }, [category, id]);

    if (!detail)
        return <Navigate to="/404" />

    return (
        <>
            {category === 'characters' && <CharacterCard detail={detail as CharacterItem} />}
            {category === 'locations' && <LocationCard detail={detail as LocationItem} />}
            {category === 'episodes' && <EpisodeCard detail={detail as EpisodeItem} />}
        </>
    );
};