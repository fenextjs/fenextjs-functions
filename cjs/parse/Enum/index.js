"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnum_to_String = void 0;
const parseEnum_to_String = (sw, options) => (type) => {
    return type ? sw[type] : options?.valueNull ?? "";
};
exports.parseEnum_to_String = parseEnum_to_String;
//# sourceMappingURL=index.js.map