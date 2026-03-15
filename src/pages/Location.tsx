import { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { locations } from '../data/locations';

export function Location() {
    const params = useParams();
    const navigate = useNavigate();

    const location = useMemo(() => {
        return locations.filter(l => String(l.id) === params.id)[0] || null;
    }, [locations]);

    if (!location)
        navigate('/');

    return (
        <h1>{location.name}</h1>
    );
};