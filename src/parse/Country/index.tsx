import { CountryProps } from "fenextjs-interface";

export const parseCountry_to_String = (
    data: CountryProps | undefined | null,
): string | undefined => {
    if(data == undefined || data == null){
        return undefined
    }
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_Country = (
    data: string | undefined | null,
): CountryProps | undefined => {
    if(data == undefined || data == null){
        return undefined
    }
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
