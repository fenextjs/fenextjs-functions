"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBufferToBase64 = void 0;
const parseBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
};
exports.parseBufferToBase64 = parseBufferToBase64;
//# sourceMappingURL=index.js.map