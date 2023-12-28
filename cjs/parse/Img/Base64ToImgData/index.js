"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBase64ToImgData = void 0;
const Base64Scale_1 = require("../Base64Scale");
const parseBase64ToImgData = async ({ base64, name, quality, }) => {
    const srcImg = await Promise.all([
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 1920, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 1680, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 1440, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 1024, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 992, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 768, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 575, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 200, height: 200, quality }),
        (0, Base64Scale_1.parseImgBase64Scale)({ base64, width: 100, height: 100, quality }),
    ]);
    const Img = {
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
exports.parseBase64ToImgData = parseBase64ToImgData;
//# sourceMappingURL=index.js.map