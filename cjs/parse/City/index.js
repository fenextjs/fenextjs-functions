"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_City = exports.parseCity_to_String = void 0;
const parseCity_to_String = (data) => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return JSON.stringify(data);
    }
    catch {
        return `${data}`;
    }
};
exports.parseCity_to_String = parseCity_to_String;
const parseString_to_City = (data) => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        return JSON.parse(`${data ?? ""}`);
    }
    catch {
        return {
            id: -1,
            id_country: -1,
            id_state: -1,
            text: `${data ?? ""}`,
        };
    }
};
exports.parseString_to_City = parseString_to_City;
//# sourceMappingURL=index.js.map