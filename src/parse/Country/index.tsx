import { CountryProps } from "fenextjs-interface";

export const parseCountry_to_String = (
    data: CountryProps | undefined | null,
): string => {
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_Country = (
    data: string | undefined | null,
): CountryProps => {
    try {
        return JSON.parse(`${data ?? ""}`);
    } catch {
        return {
            id: -1,
            code: "",
            text: `${data ?? ""}`,
        };
    }
};
