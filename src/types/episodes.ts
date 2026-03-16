export interface EpisodeItem {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
};

export interface EpisodeCardProps {
    detail: EpisodeItem
};