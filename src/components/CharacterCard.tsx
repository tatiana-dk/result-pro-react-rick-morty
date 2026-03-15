import type { CharacterItem, CharacterCardProps } from "../types/characters";

function getStatus(character: CharacterItem): string {
    switch(character.status) {
        case 'Alive':
            return 'Жив';
        case 'Dead':
            return 'Мёртв';
        case 'unknown':
            return 'Неизвестен';
        default:
            return '';
    }
}

function getSpecies(character: CharacterItem): string {
    switch(character.species) {
        case 'Human':
            return 'Человек';
        case 'Alien':
            return 'Инопланетянин';
        default:
            return '';
    }
}

function getGender(character: CharacterItem): string {
    switch(character.gender) {
        case 'Male':
            return 'Мужской';
        case 'Female':
            return 'Женский';
        case 'unknown':
            return 'Неизвестен';
        default:
            return '';
    }
}

export function CharacterCard({character}: CharacterCardProps) {
    return (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} />
            <b>Статус:</b> {getStatus(character)}<br />
            <b>Вид:</b> {getSpecies(character)}<br />
            <b>Тип:</b> {character.type}<br />
            <b>Пол:</b> {getGender(character)}<br />
            <em>Дата создания: {new Date(character.created).toLocaleString()}</em>
        </>
    );
};