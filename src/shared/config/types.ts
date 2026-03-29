export interface CharacterItem {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: 'Human' | 'Alien';
    type: string;
    gender: 'Male' | 'Female' | 'unknown';
    image: string;
    created: string;
};

export interface CharacterCardProps {
    detail: CharacterItem
};

export interface LocationItem {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
};

export interface LocationCardProps {
    detail: LocationItem
};

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

export type Data = CharacterItem[] | LocationItem[] | EpisodeItem[];

export type CategoryName = 'character' | 'location' | 'episode';

export interface CategoryItem {
    id: number;
    name: string;
}

export type CategoryItems = CategoryItem[];