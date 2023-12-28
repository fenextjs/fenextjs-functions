import { parseNumberCount } from "../NumberCount";
/**
 * Converts a number or string to a money format (e.g. "$1,000.00").
 *
 * @param {number | string} n - The number or string to format as money.
 * @returns {string} The money formatted string.
 */
export const parseMoney = (n: number | string) => {
    return `$${parseNumberCount(n)}`;
};
