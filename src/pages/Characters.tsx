import type { CharactersProps } from "../types/characters";
import { Link } from "react-router";

export function Characters({ characters }: CharactersProps) {
    return (
        <>
            <h1>Персонажи</h1>

            {characters.map(character => (
                <Link to={`/characters/:${character.id}`}>
                    <img src={character.image} /><br />
                    <span>{character.name}</span>
                </Link>
            ))}
        </>
    );
};