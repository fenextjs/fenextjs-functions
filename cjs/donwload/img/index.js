"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBase64ForImageDonwload = void 0;
const getBase64ForImageDonwload = async ({ url, }) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const result = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function () {
            resolve(`${this.result ?? ""}`);
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(blob);
    });
    return await result;
};
exports.getBase64ForImageDonwload = getBase64ForImageDonwload;
//# sourceMappingURL=index.js.map