import { StateProps } from "fenextjs-interface";

export const parseState_to_String = (
    data: StateProps | undefined | null,
): string => {
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_State = (
    data: string | undefined | null,
): StateProps => {
    try {
        return JSON.parse(`${data ?? ""}`);
    } catch {
        return {
            id: -1,
            id_country: -1,
            text: `${data ?? ""}`,
        };
    }
};
