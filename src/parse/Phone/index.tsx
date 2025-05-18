import { PhoneProps } from "fenextjs-interface";

export const parsePhone_to_String = (
    data: Partial<PhoneProps> | undefined | null,
): string => {
    try {
        return JSON.stringify(data);
    } catch {
        return `${data}`;
    }
};

export const parseString_to_Phone = (
    data: string | undefined | null,
): Partial<PhoneProps> => {
    try {
        return JSON.parse(`${data ?? ""}`);
    } catch {
        const num = `${data}`.replace(/[^0-9-+ ]/g, "");
        const n = num.split(/[ -]/g).filter((e) => e != "");
        const number = n?.pop() ?? "";
        const code = n?.join("-");
        return {
            number: number == "" ? undefined : number,
            code: code == "" ? undefined : code,
            tel: num,
        };
    }
};
