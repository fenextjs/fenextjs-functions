export type parseEnum_to_V_SW<T extends string, V = string> = {
    [id in T]: V;
};

export interface parseEnum_to_V_Options<V = string> {
    valueNull?: V;
}

export const parseEnum_to_V =
    <T extends string, V = string>(
        sw: parseEnum_to_V_SW<T, V>,
        options?: parseEnum_to_V_Options<V>,
    ) =>
    (type?: T | null | undefined): V | "" => {
        return type ? sw[type] : options?.valueNull ?? "";
    };

export type parseEnum_to_String_SW<T extends string> = parseEnum_to_V_SW<
    T,
    string
>;

export type parseEnum_to_String_Options = parseEnum_to_V_SW<string>;

export const parseEnum_to_String =
    <T extends string>(
        sw: parseEnum_to_String_SW<T>,
        options?: parseEnum_to_String_Options,
    ) =>
    (type?: T | null | undefined): string => {
        return type ? sw[type] : options?.valueNull ?? "";
    };
