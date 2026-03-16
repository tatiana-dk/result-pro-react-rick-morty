import type { LocationCardProps } from "../types/locations";

export function LocationCard({detail}: LocationCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card">
                <div><b>Тип:</b> {detail.type}</div>
                <div><b>Размеры:</b> {detail.dimension}</div>
                <div><em>Дата создания: {new Date(detail.created).toLocaleString()}</em></div>
            </div>
        </>
    );
};