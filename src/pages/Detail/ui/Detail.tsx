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

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {category === 'character' && detail && <CharacterCard detail={detail as CharacterItem} />}
            {category === 'location' && detail && <LocationCard detail={detail as LocationItem} />}
            {category === 'episode' && detail && <EpisodeCard detail={detail as EpisodeItem} />}
        </>
    );
};