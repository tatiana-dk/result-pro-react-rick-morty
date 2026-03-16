export interface LocationItem {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
};

export interface LocationCardProps {
    detail: LocationItem
};