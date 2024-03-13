"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomID = void 0;
const generateRandomID = () => {
    return new Date().getTime() + "" + Math.random();
};
exports.generateRandomID = generateRandomID;
//# sourceMappingURL=index.js.map