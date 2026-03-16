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

export function CharacterCard({detail}: CharacterCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card card--character">
                <img src={detail.image} />
                <div className="card-content">
                    <b>Статус:</b> {getStatus(detail)}<br />
                    <b>Вид:</b> {getSpecies(detail)}<br />
                    <b>Тип:</b> {detail.type}<br />
                    <b>Пол:</b> {getGender(detail)}<br />
                    <em>Дата создания: {new Date(detail.created).toLocaleString()}</em>
                </div>
            </div>
        </>
    );
};