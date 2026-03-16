import type { EpisodeCardProps } from "../types/episodes";

export function EpisodeCard({detail}: EpisodeCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <b>Air date:</b> {detail.air_date}<br />
            <b>Эпизод:</b> {detail.episode}<br />
            <em>Дата создания: {new Date(detail.created).toLocaleString()}</em>
        </>
    );
};