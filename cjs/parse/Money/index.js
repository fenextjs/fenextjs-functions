"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoney = void 0;
const NumberCount_1 = require("../NumberCount");
/**
 * Converts a number or string to a money format (e.g. "$1,000.00").
 *
 * @param {number | string} n - The number or string to format as money.
 * @returns {string} The money formatted string.
 */
const parseMoney = (n) => {
    return `$${(0, NumberCount_1.parseNumberCount)(n)}`;
};
exports.parseMoney = parseMoney;
//# sourceMappingURL=index.js.map