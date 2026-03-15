export interface CharacterItem {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
};

export interface CharactersProps {
    characters: CharacterItem[]
};