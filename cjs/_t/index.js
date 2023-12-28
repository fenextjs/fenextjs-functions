"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._tValidate = void 0;
const _tValidate = (d, _t) => {
    if (typeof d == "string" && _t) {
        return _t?.(d);
    }
    return d;
};
exports._tValidate = _tValidate;
//# sourceMappingURL=index.js.map