"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSCString_to_CSC = exports.parseCSC_to_CSCString = void 0;
const Country_1 = require("../Country");
const State_1 = require("../State");
const City_1 = require("../City");
const parseCSC_to_CSCString = (data) => {
    try {
        return {
            country: (0, Country_1.parseCountry_to_String)(data?.country),
            state: (0, State_1.parseState_to_String)(data?.state),
            city: (0, City_1.parseCity_to_String)(data?.city),
        };
    }
    catch {
        return {};
    }
};
exports.parseCSC_to_CSCString = parseCSC_to_CSCString;
const parseCSCString_to_CSC = (data) => {
    try {
        return {
            country: (0, Country_1.parseString_to_Country)(data?.country),
            state: (0, State_1.parseString_to_State)(data?.state),
            city: (0, City_1.parseString_to_City)(data?.city),
        };
    }
    catch {
        return {};
    }
};
exports.parseCSCString_to_CSC = parseCSCString_to_CSC;
//# sourceMappingURL=index.js.map