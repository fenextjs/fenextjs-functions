"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumberCount = void 0;
const Number_1 = require("../Number");
/**
 * Parses a string or number to a formatted number string with commas separating thousands and optional decimal points.
 *
 * @param {number|string} n - The number or string to be parsed.
 * @returns {string} A formatted string representation of the number.
 */
const parseNumberCount = (n, options) => {
    const number = (0, Number_1.parseNumber)(n);
    return number.toLocaleString("en-US", options);
};
exports.parseNumberCount = parseNumberCount;
//# sourceMappingURL=index.js.map