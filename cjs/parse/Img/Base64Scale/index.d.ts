export interface parseImgBase64ScaleProps {
    base64: string;
    width: number;
    height?: number | "auto";
    quality?: number;
}
export declare const parseImgBase64Scale: ({ base64, width, height, quality, }: parseImgBase64ScaleProps) => Promise<string | undefined>;
