"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString_to_Country = exports.parseCountry_to_String = void 0;
const country_state_city_nextjs_1 = require("country-state-city-nextjs");
const parseCountry_to_String = (data) => {
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
exports.parseCountry_to_String = parseCountry_to_String;
const parseString_to_Country = (data) => {
    if (data == undefined || data == null) {
        return undefined;
    }
    try {
        const country = JSON.parse(`${data ?? ""}`);
        if (country && country?.id && country?.text && !country?.img) {
            country.img = (0, country_state_city_nextjs_1.getRuteCountryImg)(country);
        }
        return country;
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