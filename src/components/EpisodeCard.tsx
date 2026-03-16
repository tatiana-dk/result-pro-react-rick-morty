import type { LocationCardProps } from "../types/locations";

export function LocationCard({detail}: LocationCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <b>Тип:</b> {detail.type}<br />
            <b>Размеры:</b> {detail.dimension}<br />
            <em>Дата создания: {new Date(detail.created).toLocaleString()}</em>
        </>
    );
};