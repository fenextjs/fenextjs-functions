"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyCircular = void 0;
const stringifyCircular = (obj) => {
    let cache = [];
    const str = JSON.stringify(obj, function (key, value) {
        key;
        if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    });
    cache = null;
    return str;
};
exports.stringifyCircular = stringifyCircular;
//# sourceMappingURL=index.js.map