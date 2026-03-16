import type { EpisodeCardProps } from "../types/episodes";

export function EpisodeCard({detail}: EpisodeCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card">
                <div><b>Air date:</b> {detail.air_date}</div>
                <div><b>Эпизод:</b> {detail.episode}</div>
                <div><em>Дата создания: {new Date(detail.created).toLocaleString()}</em></div>
            </div>
        </>
    );
};