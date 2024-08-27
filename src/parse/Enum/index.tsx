export type parseEnum_to_String_SW<T extends string> = {
    [id in T]: string;
};

export interface parseEnum_to_String_Options {
    valueNull?: string;
}

export const parseEnum_to_String =
    <T extends string>(
        sw: parseEnum_to_String_SW<T>,
        options?: parseEnum_to_String_Options,
    ) =>
    (type?: T | null | undefined): string => {
        return type ? sw[type] : options?.valueNull ?? "";
    };
