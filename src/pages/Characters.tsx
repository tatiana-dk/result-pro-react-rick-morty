import { Link } from "react-router";
import { characters } from '../data/characters';

export function Characters() {
    return (
        <>
            <h1>Персонажи</h1>

            {characters.map(character => (
                <Link to={`/characters/${character.id}`}>
                    <img src={character.image} /><br />
                    <span>{character.name}</span>
                </Link>
            ))}
        </>
    );
};