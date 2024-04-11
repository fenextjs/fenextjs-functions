import { AddressGoogle } from "fenextjs-interface";

export const parseAddress_to_String = (
    data: AddressGoogle | undefined | null,
): string => {
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_Address = (
    data: string | undefined | null,
): AddressGoogle => {
    try {
        return JSON.parse(`${data ?? ""}`);
    } catch {
        return {
            formatted_address: `${data ?? ""}`,
        };
    }
};
