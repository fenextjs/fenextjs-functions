"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_Address = exports.parseAddress_to_String = void 0;
const parseAddress_to_String = (data) => {
    try {
        return JSON.stringify(data);
    }
    catch {
        return `${data}`;
    }
};
exports.parseAddress_to_String = parseAddress_to_String;
const parseString_to_Address = (data) => {
    try {
        return JSON.parse(`${data ?? ""}`);
    }
    catch {
        return {
            formatted_address: `${data ?? ""}`,
        };
    }
};
exports.parseString_to_Address = parseString_to_Address;
//# sourceMappingURL=index.js.map