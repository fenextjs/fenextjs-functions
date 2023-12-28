/**
 * Parses a string or number to a formatted number.
 *
 * @param {number|string} n - The number or string to be parsed.
 * @returns {number} A  number.
 */
export const parseNumber = (n: number | string) => {
    let number = 0;
    try {
        number = parseFloat(`${n}`.replace(/[^0-9.-]/g, ""));
        if (Number.isNaN(number)) {
            number = 0;
        }
    } catch (error) {
        number = 0;
    }
    return number;
};
