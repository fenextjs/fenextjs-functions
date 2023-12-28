import { parseNumber } from "../Number";

/**
 * Parses a string or number to a formatted number string with commas separating thousands and optional decimal points.
 *
 * @param {number|string} n - The number or string to be parsed.
 * @returns {string} A formatted string representation of the number.
 */
export const parseNumberCount = (
    n: number | string,
    options?: Intl.NumberFormatOptions,
) => {
    const number = parseNumber(n);
    return number.toLocaleString("en-US", options);
};
