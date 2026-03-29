import type { CharacterItem, CharacterCardProps } from "@/shared/config/types";
import { lang } from "@shared/config/lang";

function getStatus(character: CharacterItem): string {
    return lang.character.status[character.status] || '';
}

function getSpecies(character: CharacterItem): string {
    return lang.character.species[character.species] || '';
}

function getGender(character: CharacterItem): string {
    return lang.character.gender[character.gender] || '';
}

export function CharacterCard({detail}: CharacterCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card card--character">
                <img src={detail.image} />
                <div className="card-content">
                    <b>{lang.character.props.status}:</b> {getStatus(detail)}<br />
                    <b>{lang.character.props.species}:</b> {getSpecies(detail)}<br />
                    <b>{lang.character.props.type}:</b> {detail.type}<br />
                    <b>{lang.character.props.gender}:</b> {getGender(detail)}<br />
                    <em>{lang.character.props.created}: {new Date(detail.created).toLocaleString()}</em>
                </div>
            </div>
        </>
    );
};