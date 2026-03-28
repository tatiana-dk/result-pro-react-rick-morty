import type {CharacterItem} from './characters';
import type { LocationItem } from './locations';
import type { EpisodeItem } from './episodes';

export type Data = CharacterItem[] | LocationItem[] | EpisodeItem[];

export type CategoryName = 'characters' | 'locations' | 'episodes';

export type CategorySingleName = 'character' | 'location' | 'episode';

export interface AuthContextType {
    user: string | null;
    signin: (newUser: string, callback: Function) => void;
    signout: (callback: Function) => void;
};

export interface DataContextData {
    characters?: CharacterItem[];
    locations?: LocationItem[];
    episodes?: EpisodeItem[];
}
export interface DataContextType {
    data: DataContextData;
    changeData: (newData: DataContextData, callback: Function) => void;
};