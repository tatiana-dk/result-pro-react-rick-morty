import type { LocationCardProps } from "@/shared/config/types";
import { lang } from "@shared/config/lang";

export function LocationCard({detail}: LocationCardProps) {
    return (
        <>
            <h1>{detail.name}</h1>
            <div className="card">
                <div><b>{lang.location.props.type}:</b> {detail.type}</div>
                <div><b>{lang.location.props.dimension}:</b> {detail.dimension}</div>
                <div><em>{lang.location.props.created}: {new Date(detail.created).toLocaleString()}</em></div>
            </div>
        </>
    );
};