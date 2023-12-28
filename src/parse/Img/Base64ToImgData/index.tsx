import { ImgDataProps } from "fenextjs-interface/cjs/Img";
import { parseImgBase64Scale } from "../Base64Scale";

export interface parseBase64ToImgDataProps {
    name?: string;
    base64: string;
    quality?: number;
}

export const parseBase64ToImgData = async ({
    base64,
    name,
    quality,
}: parseBase64ToImgDataProps) => {
    const srcImg = await Promise.all([
        parseImgBase64Scale({ base64, width: 1920, quality }),
        parseImgBase64Scale({ base64, width: 1680, quality }),
        parseImgBase64Scale({ base64, width: 1440, quality }),
        parseImgBase64Scale({ base64, width: 1024, quality }),
        parseImgBase64Scale({ base64, width: 992, quality }),
        parseImgBase64Scale({ base64, width: 768, quality }),
        parseImgBase64Scale({ base64, width: 575, quality }),
        parseImgBase64Scale({ base64, width: 200, height: 200, quality }),
        parseImgBase64Scale({ base64, width: 100, height: 100, quality }),
    ]);

    const Img: ImgDataProps = {
        src: base64,
        name,
        srcMin1920: srcImg[0],
        srcMin1680: srcImg[1],
        srcMin1440: srcImg[2],
        srcMin1024: srcImg[3],
        srcMin992: srcImg[4],
        srcMin768: srcImg[5],
        srcMin575: srcImg[6],
        srcThumbnail_200: srcImg[7],
        srcThumbnail_100: srcImg[8],
    };
    return Img;
};
