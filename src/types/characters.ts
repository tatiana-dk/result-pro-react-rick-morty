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
    character: CharacterItem
};