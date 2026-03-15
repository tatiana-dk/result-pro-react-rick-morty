import { Link } from "react-router";
import { episodes } from '../data/episodes';

export function Episodes() {
    return (
        <>
            <h1>Эпизоды</h1>

            {episodes.map(episode => (
                <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
            ))}
        </>
    );
};