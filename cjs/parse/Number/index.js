"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = void 0;
/**
 * Parses a string or number to a formatted number.
 *
 * @param {number|string} n - The number or string to be parsed.
 * @returns {number} A  number.
 */
const parseNumber = (n) => {
    let number = 0;
    try {
        number = parseFloat(`${n}`.replace(/[^0-9.-]/g, ""));
        if (Number.isNaN(number)) {
            number = 0;
        }
    }
    catch (error) {
        number = 0;
    }
    return number;
};
exports.parseNumber = parseNumber;
//# sourceMappingURL=index.js.map