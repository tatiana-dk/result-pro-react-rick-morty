import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { characters } from '../data/characters';
import { CharacterCard } from "../components/CharacterCard";

export function Character() {
    const params = useParams();
    const navigate = useNavigate();

    const character = useMemo(() => {
        return characters.filter(c => String(c.id) === params.id)[0] || null;
    }, [characters]);

    if (!character)
        navigate('/');

    return (
        <CharacterCard character={character} />
    );
};