import type { EpisodeCardProps } from "@/shared/config/types";
import { lang } from "@shared/config/lang";

export function EpisodeCard({detail}: EpisodeCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card">
                <div><b>{lang.episode.props.air_date}:</b> {detail.air_date}</div>
                <div><b>{lang.episode.props.episode}:</b> {detail.episode}</div>
                <div><em>{lang.episode.props.created}: {new Date(detail.created).toLocaleString()}</em></div>
            </div>
        </>
    );
};