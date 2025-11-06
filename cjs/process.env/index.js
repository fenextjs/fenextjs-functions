"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessEnv = void 0;
const getProcessEnv = (key) => {
    try {
        return process?.env?.[key];
    }
    catch {
        return null;
    }
};
exports.getProcessEnv = getProcessEnv;
//# sourceMappingURL=index.js.map