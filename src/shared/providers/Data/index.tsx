import { createContext, useContext, useState, type ReactNode } from "react";
import type { DataContextType, Data, DataContextData, CategoryName } from "@/shared/config/types";

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
    const context =  useContext(DataContext);

    if (context === null)
        throw Error('useData must be used within a DataProvider');

    return context;
};

export function DataProvider({children}: {children: ReactNode}) {
    const [data, setData] = useState<DataContextData>({});

    const changeData = (newData: DataContextData, callback: Function): void => {
        setData((prev: DataContextData) => {
            return {
                ...prev,
                ...newData
            };
        });
        callback();
    }

    const value: DataContextType = {
        data,
        changeData
    };

    return (
        <DataContext value={value}>
            {children}
        </DataContext>
    );
};