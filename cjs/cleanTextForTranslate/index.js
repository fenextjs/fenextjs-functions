"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanTextForTranslate = void 0;
const cleanTextForTranslate = (text) => {
    return text
        .replaceAll("\\n", "")
        .replaceAll("\n", "")
        .replace(/ {2,}/g, " ")
        .trim();
};
exports.cleanTextForTranslate = cleanTextForTranslate;
//# sourceMappingURL=index.js.map