import type {CharacterItem} from './characters';
import type { LocationItem } from './locations';
import type { EpisodeItem } from './episodes';

export interface Data {
    characters: CharacterItem[];
    locations: LocationItem[];
    episodes: EpisodeItem[];
};

export type CategoryName = 'characters' | 'locations' | 'episodes';