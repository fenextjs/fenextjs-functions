"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_Country = exports.parseCountry_to_String = void 0;
const parseCountry_to_String = (data) => {
    try {
        return JSON.stringify(data);
    }
    catch {
        return `${data}`;
    }
};
exports.parseCountry_to_String = parseCountry_to_String;
const parseString_to_Country = (data) => {
    try {
        return JSON.parse(`${data ?? ""}`);
    }
    catch {
        return {
            id: -1,
            code: "",
            text: `${data ?? ""}`,
        };
    }
};
exports.parseString_to_Country = parseString_to_Country;
//# sourceMappingURL=index.js.map