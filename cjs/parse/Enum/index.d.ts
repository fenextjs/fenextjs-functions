export type parseEnum_to_String_SW<T extends string> = {
    [id in T]: string;
};
export declare const parseEnum_to_String: <T extends string>(sw: parseEnum_to_String_SW<T>) => (type?: T | null | undefined) => string;
