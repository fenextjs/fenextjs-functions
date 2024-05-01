export declare const parseCsvToJson: (csv: string) => {
    headers: string[];
    data: any[];
} | {
    headers?: undefined;
    data?: undefined;
};
