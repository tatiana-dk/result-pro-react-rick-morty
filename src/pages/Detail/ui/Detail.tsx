import { useMemo } from "react";
import { useParams, Navigate } from "react-router";
import { CharacterCard } from "./CharacterCard";
import { LocationCard } from "./LocationCard";
import { EpisodeCard } from "./EpisodeCard";

import type { CategoryName, CharacterItem, LocationItem, EpisodeItem } from "@/shared/config";

import { useData } from '@shared/providers/Data';;

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