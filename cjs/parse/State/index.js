"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_State = exports.parseState_to_String = void 0;
const parseState_to_String = (data) => {
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
exports.parseState_to_String = parseState_to_String;
const parseString_to_State = (data) => {
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
            text: `${data ?? ""}`,
        };
    }
};
exports.parseString_to_State = parseString_to_State;
//# sourceMappingURL=index.js.map