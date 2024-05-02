"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
const sleep = async (time = 1000) => {
    await new Promise((r) => setTimeout(r, time));
};
exports.sleep = sleep;
//# sourceMappingURL=index.js.map