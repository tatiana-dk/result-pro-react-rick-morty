import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { episodes } from '../data/episodes';

export function Episode() {
    const params = useParams();
    const navigate = useNavigate();

    const episode = useMemo(() => {
        return episodes.filter(e => String(e.id) === params.id)[0] || null;
    }, [episodes]);

    if (!episode)
        navigate('/');

    return (
        <h1>{episode.name}</h1>
    );
};