export type parseEnum_to_V_SW<T extends string, V = string> = {
    [id in T]: V;
};
export interface parseEnum_to_V_Options<V = string> {
    valueNull?: V;
}
export declare const parseEnum_to_V: <T extends string, V = string>(sw: parseEnum_to_V_SW<T, V>, options?: parseEnum_to_V_Options<V> | undefined) => (type?: T | null | undefined) => "" | V;
export type parseEnum_to_String_SW<T extends string> = parseEnum_to_V_SW<T, string>;
export type parseEnum_to_String_Options = parseEnum_to_V_SW<string>;
export declare const parseEnum_to_String: <T extends string>(sw: parseEnum_to_String_SW<T>, options?: parseEnum_to_String_Options) => (type?: T | null | undefined) => string;
