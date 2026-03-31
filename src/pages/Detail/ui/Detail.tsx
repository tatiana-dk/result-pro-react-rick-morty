import { useMemo } from "react";
import { useParams, Navigate } from "react-router";
import { CharacterCard } from "./CharacterCard";
import { LocationCard } from "./LocationCard";
import { EpisodeCard } from "./EpisodeCard";
import { useLoadDetail } from "../lib";

import type { CategoryName, CharacterItem, LocationItem, EpisodeItem } from "@/shared/config";

export function Detail() {
    const params = useParams();

    const category: string = params.category || '';
    const id: string = params.id || '';

    const {
            loading,
            error,
            detail
        } = useLoadDetail(category as CategoryName, id);

    if (!detail)
        return <Navigate to="/404" />

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {category === 'character' && <CharacterCard detail={detail as CharacterItem} />}
            {category === 'location' && <LocationCard detail={detail as LocationItem} />}
            {category === 'episode' && <EpisodeCard detail={detail as EpisodeItem} />}
        </>
    );
};