"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUnitToText = void 0;
const parseUnitToText = (unit) => {
    const sw = {
        CC: "cc",
        CM: "cm",
        CM3: "cm³",
        FT: "pie",
        FT3: "pie³",
        G: "g",
        GAL: "galon",
        IN: "pul",
        IN3: "pul³",
        KG: "kg",
        L: "l",
        LB: "lib",
        M: "m",
        M3: "m³",
        ML: "ml",
        MM: "mm",
        OZ: "onz",
    };
    return sw[unit];
};
exports.parseUnitToText = parseUnitToText;
//# sourceMappingURL=index.js.map