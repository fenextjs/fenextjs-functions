import { CityProps } from "fenextjs-interface";

export const parseCity_to_String = (
    data: CityProps | undefined | null,
): string | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_City = (
    data: string | undefined | null,
): CityProps | undefined => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return JSON.parse(`${data ?? ""}`);
    } catch {
        return {
            id: -1,
            id_country: -1,
            id_state: -1,
            text: `${data ?? ""}`,
        };
    }
};
