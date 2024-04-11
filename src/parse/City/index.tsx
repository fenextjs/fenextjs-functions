import { CityProps } from "fenextjs-interface";

export const parseCity_to_String = (data: CityProps | undefined | null): string => {
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_City = (data: string | undefined | null): CityProps => {
    try {
        return JSON.parse(`${data ?? ''}`);
    } catch {
        return {
            id:-1,
            id_country:-1,
            id_state:-1,
            text:`${data ?? ''}`
        };
    }
};
