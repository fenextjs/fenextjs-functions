import { ImgDataProps } from "fenextjs-interface/cjs/Img";
export interface parseBase64ToImgDataProps {
    name?: string;
    base64: string;
    quality?: number;
}
export declare const parseBase64ToImgData: ({ base64, name, quality, }: parseBase64ToImgDataProps) => Promise<ImgDataProps>;
