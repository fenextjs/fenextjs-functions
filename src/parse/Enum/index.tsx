export type parseEnum_to_String_SW<T extends string, V = string> = {
    [id in T]: V;
};

export interface parseEnum_to_String_Options<V = string> {
    valueNull?: V;
}

export const parseEnum_to_String =
    <T extends string, V = string>(
        sw: parseEnum_to_String_SW<T, V>,
        options?: parseEnum_to_String_Options<V>,
    ) =>
        (type?: T | null | undefined): V | "" => {
            return type ? sw[type] : options?.valueNull ?? "";
        };
