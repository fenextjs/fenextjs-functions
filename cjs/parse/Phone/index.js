"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_Phone = exports.parsePhone_to_String = void 0;
const parsePhone_to_String = (data) => {
    try {
        return JSON.stringify(data);
    }
    catch {
        return `${data}`;
    }
};
exports.parsePhone_to_String = parsePhone_to_String;
const parseString_to_Phone = (data) => {
    try {
        return JSON.parse(`${data ?? ""}`);
    }
    catch {
        const num = `${data}`.replace(/[^1-9-+ ]/g, "");
        const n = num.split(/[ -]/g).filter((e) => e != "");
        const number = n?.pop() ?? "";
        const code = n?.join("-");
        return {
            number: number == "" ? undefined : number,
            code: code == "" ? undefined : code,
            tel: num,
        };
    }
};
exports.parseString_to_Phone = parseString_to_Phone;
//# sourceMappingURL=index.js.map