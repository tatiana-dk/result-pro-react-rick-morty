import { Link } from "react-router";
import { locations } from '../data/locations';

export function Locations() {
    return (
        <>
            <h1>Локации</h1>

            {locations.map(location => (
                <Link to={`/locations/${location.id}`}>{location.name}</Link>
            ))}
        </>
    );
};