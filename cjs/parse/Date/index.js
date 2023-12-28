"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateTimeFormat = exports.getTimeToText = exports.getTimeValue = exports.getISOWeek = exports.getWeekValue = exports.getMonthValue = exports.parseDateToText = exports.parseTextToDate = exports.parseDateYYYYMMDD = void 0;
/**
 * Converts a Date object into a string in the "YYYY-MM-DD" format.
 *
 * @param {Date} date - The Date object to convert.
 * @returns {string} A string representation of the Date object in the "YYYY-MM-DD" format.
 */
const parseDateYYYYMMDD = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
exports.parseDateYYYYMMDD = parseDateYYYYMMDD;
/**
 * Converts a text into a date according to the specified type.
 *
 * @param {parseTextToDateProps} props - The properties used to convert the text into date.
 * @returns {Date} A date created from the specified text.
 */
const parseTextToDate = ({ text, type }) => {
    const date = new Date();
    if (type == "date") {
        const a = text.split("-");
        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(parseInt(a?.[1]) - 1);
        date.setDate(parseInt(a?.[2]));
        return date;
    }
    if (type == "month") {
        const a = text.split("-");
        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(parseInt(a?.[1]) - 1);
        date.setDate(1);
        return date;
    }
    if (type == "week") {
        const a = text.split("-W");
        date.setFullYear(parseInt(a?.[0]));
        date.setMonth(0);
        date.setDate(parseInt(a?.[1]) * 7);
        return date;
    }
    if (type == "time") {
        const a = text.split(":");
        date.setHours(parseInt(a?.[0]));
        date.setMinutes(parseInt(a?.[1]));
        return date;
    }
    return date;
};
exports.parseTextToDate = parseTextToDate;
/**
 * Converts a date into a string based on the given type.
 *
 * @function
 * @param {parseDateToTextProps} - The properties used to convert a date into a string.
 * @returns {string} - The date converted into a string.
 */
const parseDateToText = ({ date = new Date(), type, }) => {
    if (type == "YYYY-MM-DD") {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    if (type == "date") {
        return date.toDateString();
    }
    if (type == "month") {
        return (0, exports.getMonthValue)(date);
    }
    if (type == "week") {
        const tf = new Date(date);
        const ti = new Date(tf.getFullYear(), 0, 0);
        const diff = tf - ti;
        const oneDay = 1000 * 60 * 60 * 24;
        const d = Math.floor(diff / oneDay);
        const w = d / 7;
        return `${date.getFullYear()}-W${w}`;
    }
    if (type == "time") {
        return (0, exports.getTimeValue)(date);
    }
    return "";
};
exports.parseDateToText = parseDateToText;
/**
 * Gets the month value in "yyyy-mm" format from a given date.
 * @param {Date} date - The date from which to get the month value.
 * @returns {string} - The month value in "yyyy-mm" format.
 */
const getMonthValue = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
};
exports.getMonthValue = getMonthValue;
/**
 * Gets the week value in "yyyy-Www" format from a given date.
 * @param {Date} date - The date from which to get the week value.
 * @returns {string} - The week value in "yyyy-Www" format.
 */
const getWeekValue = (date) => {
    const year = date.getFullYear();
    const week = (0, exports.getISOWeek)(date);
    return `${year}-W${week}`;
};
exports.getWeekValue = getWeekValue;
/**
 * Gets the ISO week number for a given date.
 * @param {Date} date - The date for which to get the ISO week number.
 * @returns {number} - The ISO week number corresponding to the given date.
 */
const getISOWeek = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};
exports.getISOWeek = getISOWeek;
/**
 * Gets the time value in "hh:mm" format from a given date.
 * @param {Date} date - The date from which to get the time value.
 * @returns {string} - The time value in "hh:mm" format.
 */
const getTimeValue = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};
exports.getTimeValue = getTimeValue;
/**
 * Converts a given date into a string representation of time in "hh:mm:ss" format.
 * @param {Date} date - The date object to extract the time from.
 * @param {getTimeToTextProps} options - An optional object specifying which time components to include.
 * @returns {string} - The formatted time string in "hh:mm:ss" format.
 */
const getTimeToText = (date, options) => {
    /**
     * Helper function to pad a number with leading zeros if needed.
     * @param {number} n - The number to be padded.
     * @returns {string} - The padded number as a string.
     */
    const padNumber = (n) => String(n).padStart(2, "0");
    // An array to store the individual components of the time string
    const timeComponents = [];
    // Include day component in the time string if 'days' option is not explicitly set to false
    if (options?.days !== false) {
        timeComponents.push(`${padNumber(date.getDate())}`);
    }
    // Include hour component in the time string if 'hours' option is not explicitly set to false
    if (options?.hours !== false) {
        timeComponents.push(`${padNumber(date.getHours())}`);
    }
    // Include minute component in the time string if 'minutes' option is not explicitly set to false
    if (options?.minutes !== false) {
        timeComponents.push(`${padNumber(date.getMinutes())}`);
    }
    // Include second component in the time string if 'seconds' option is not explicitly set to false
    if (options?.seconds !== false) {
        timeComponents.push(`${padNumber(date.getSeconds())}`);
    }
    // Join the time components using ":" as a separator and return the formatted time string
    return timeComponents.join(":");
};
exports.getTimeToText = getTimeToText;
/**
 * Gets the time value in custom formated
 * @param {Date} date - The date from which to get the time value.
 * @param {parseDateTimeFormatOptions} options - The Options for formated
 * @returns {string} - The time value in "hh:mm" format.
 */
const parseDateTimeFormat = (date, options) => {
    const formatter = new Intl.DateTimeFormat(options?.locales, options);
    return formatter.format(date);
};
exports.parseDateTimeFormat = parseDateTimeFormat;
//# sourceMappingURL=index.js.map